import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import { CookieButton } from "./CookieButton";
import { Cookie } from "next/font/google";
import { CookieRead } from "./CookieRead";

export default async function Home() {
  async function setCookieJenny() {
    "use server";
    const userId = "jenny.smith@gmail.com";
    cookies().set("user_id", userId);
    console.log("Jenny logged in successfully!");
  }
  async function setCookieKat() {
    "use server";
    const userId = "kat.johnson@example.com";
    cookies().set("user_id", userId);
    console.log("Kat logged in successfully!");
  }
  async function readUserCookie() {
    "use server";
    const currentUser = cookies().get("user_id");
    console.log(currentUser.value);
  }
  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="my-32 mx-4 w-1/2 bg-off-white rounded-3xl text-purple-accent p-3 shadow-card text-center text-2xl hover:bg-purple-accent hover:text-off-white hover:font-semibold">
          <Link className="font-extrabold py-7 " href="/questionnaire">
            Mortgage
          </Link>
        </div>
        <CookieButton setCookie={setCookieJenny} key={"Jenny"} />
        <CookieButton setCookie={setCookieKat} key={"Kat"} />
        <CookieRead readCookie={readUserCookie} />
        <Image
          loading="eager"
          className=""
          src={"/Logo_lendlogic.png"}
          width={300}
          height={500}
          alt="LandLogic Logo"
          priority={true}
        />
      </div>
    </main>
  );
}

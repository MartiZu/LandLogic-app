import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import { CookieButton } from "./cookies/CookieButton";

export default async function Home() {
  async function setCookieJenny() {
    "use server";
    const userId = "jenny.smith@example.com";
    cookies().set("user_id", userId);
    // console.log("Jenny logged in successfully!");
  }
  async function setCookieKat() {
    "use server";
    const userId = "kat.johnson@example.com";
    cookies().set("user_id", userId);
    // console.log("Kat logged in successfully!");
  }
  return (
    <main>
      <div className="mt-32 flex flex-col items-center">
        {/* <div className=" mx-4 w-1/2 bg-off-white rounded-3xl text-purple-accent p-3 shadow-card text-center text-2xl hover:bg-purple-accent hover:text-off-white hover:font-semibold">
          <Link className="font-extrabold py-7 " href="/questionnaire">
            Mortgage
          </Link>
        </div> */}

        <CookieButton setCookie={setCookieJenny} user={"Jenny"} />
        <CookieButton setCookie={setCookieKat} user={"Kat"} />

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

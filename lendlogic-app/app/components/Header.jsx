// import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../public/Icon.png";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="flex flex-row justify-between px-5 py-3 items-center">
        <div className="flex flex-col justify-center">
          <Image
            src="/Logo_lendlogic.png"
            width={100}
            height={100}
            alt="LandLogic Logo"
            priority={true}
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col items-center text-purple-300 h-2 font-semibold text-xl">
          <h1>LendLogic</h1>
        </div>
      </div>
      <div className="bg-purple-300 h-2"></div>
    </header>
  );
}

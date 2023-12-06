// import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../public/Icon.png"
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="flex flex-row justify-between px-5 py-3" >
      <div className="flex flex-col justify-center"><Image src={logo} className="rounded-2xl" alt="logo" width="100"/></div>
      </div>
      <div className="bg-purple-300 h-2">
      </div>
    </header>
  )
}

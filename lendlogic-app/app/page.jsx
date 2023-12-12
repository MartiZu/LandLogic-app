import Link from "next/link";
import Image from "next/image";
import Checklist from "./dashboard/Checklist";
import ChecklistExpand from "./dashboard/ExpandChecklist";

export default function Home() {
  return (
    <main>
     <div className="flex flex-col items-center">
     <div className="my-32 mx-4 w-1/2 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl hover:bg-purple-accent hover:text-off-white hover:font-semibold">
     <Link className="font-extrabold py-7" href="/questionnaire">
         Mortgage
         </Link>
        </div>

       <Image loading="eager" />
           className=""
            src={"/Logo_lendlogic.png"}
         width={300}
         height={500}
         alt="LandLogic Logo"
        priority={true}
  
    </div> 
    
    </main>
  );
}

import Image from "next/image";
import DisplayMortgageInformation from "./DisplayMortgageInformation";

export default function RemortgageReport() {
  return (
    <>
      <div className="mt-32 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
        <h2 className="font-extrabold py-7">Your Remortgage Report</h2>
        <p className="py-2 font-normal">
          Get insights into remortgaging by using our interactive tool.
        </p>
        <div className="flex justify-center items-center">
          <DisplayMortgageInformation />
          <Image
            src="/Toggle_man.png"
            alt="A man using toggles"
            width={300}
            height={200}
          />
        </div>
        <button className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button">
          View My Report
        </button>
      </div>
    </>
  );
}

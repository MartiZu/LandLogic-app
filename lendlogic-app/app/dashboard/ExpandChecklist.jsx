import Link from "next/link";

export default function ExpandChecklist() {
  return (
    <>
      <div className="mt-6 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
        <div className="grid grid-cols-2 gap-4">
          <h2 className="col-span-2 font-normal py-7 text-3xl text-purple-accent">
            New Buyer Checklist
          </h2>
          <p className="col-span-2 py-2 font-normal text-xl">
            Everything you need to know when it comes to buy a property.
          </p>
          <Link
            className="bg-off-white text-lg font-normal flex items-center justify-center h-16 p-3 border-2 border-purple-accent rounded-full shadow-button"
            href="https://www.gov.uk/government/publications/how-to-buy-a-home/how-to-buy"
          >
            How to Buy Guide
          </Link>
          <Link
            className="flex justify-center items-center h-16 bg-off-white text-lg font-normal p-3 border-2 border-purple-accent rounded-full shadow-button"
            href="https://www.gov.uk/first-homes-scheme"
          >
            First-time buyer schemes
          </Link>
          <Link
            className="flex justify-center items-center h-16 bg-off-white text-lg font-normal p-3 border-2 border-purple-accent rounded-full shadow-button"
            href="https://www.gov.uk/stamp-duty-land-tax"
          >
            Stamp Duty
          </Link>
          <Link
            className="flex justify-center items-center h-16 bg-off-white text-lg font-normal p-3 border-2 border-purple-accent rounded-full shadow-button"
            href="https://www.gov.uk/right-to-buy-buying-your-council-home"
          >
            Right to Buy
          </Link>
          <Link
            className="flex justify-center items-center h-16 bg-off-white text-lg font-normal p-3 border-2 border-purple-accent rounded-full shadow-button"
            href="https://www.gov.uk/lifetime-isa"
          >
            Lifetime ISA
          </Link>
          <Link
            className="flex justify-center items-center h-16 bg-off-white text-lg font-normal p-3 border-2 border-purple-accent rounded-full shadow-button"
            href="https://www.gov.uk/shared-ownership-scheme"
          >
            Shared ownership
          </Link>
        </div>
        <button
          className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button"
          type="submit"
        >
          See less
        </button>
      </div>
    </>
  );
}

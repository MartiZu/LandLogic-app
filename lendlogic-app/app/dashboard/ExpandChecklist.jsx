import Link from "next/link";

export default function ExpandChecklist() {
  return (
    <>
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
    </>
  );
}

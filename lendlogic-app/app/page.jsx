import Link from "next/link";



export default function Home() {
  return (
    <main>
      <div className="mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">

      <Link className="font-extrabold py-7" href="/questionnaire">Get Started</Link> 
      </div>
    </main>
  );
}

import LearningSection from "../dashboard/LearningSection";
import Newsletter from "../dashboard/Newsletter";
import DisplayKat from "../customHooks/DisplayKat";

export default async function Dashboard() {
  //destructing the object returned from the custom hook
  const kat = await DisplayKat();
  console.log(kat);

  return (
    <div className="my-8 rounded-3xl text-center text-2xl">
      <h1 className="font-extrabold pt-7 text-5xl">Welcome Kat!</h1>

      <LearningSection />
      <Newsletter />
    </div>
  );
}
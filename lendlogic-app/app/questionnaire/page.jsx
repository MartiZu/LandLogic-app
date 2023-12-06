import GetStartedCard from "../components/GetStartedCard";

export default function Home() {
  return (
    <main>
      <GetStartedCard />
      <div className="flex flex-row justify-center items-center">
        <div className="current-circle w-3 h-3 rounded-full bg-off-white shadow-card mx-1"></div>
        <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
        <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
      </div>
      <img />
    </main>
  );
}

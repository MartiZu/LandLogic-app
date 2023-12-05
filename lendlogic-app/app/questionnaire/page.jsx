import GetStartedCard from "../components/GetStartedCard";
import "./questionnaireStyle.css";

export default function Home() {
  return (
    <main>
      <GetStartedCard />
      <div className="progress-circle-container flex flex-row justify-center items-center">
        <div className="current-circle mx-1"></div>
        <div className="other-circle mx-1"></div>
        <div className="other-circle mx-1"></div>
      </div>
      <img />
    </main>
  );
}

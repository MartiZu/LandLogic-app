import GetStartedCard from "../components/GetStartedCard";
import "./questionnaireStyle.css";

export default function Home() {
  return (
    <main>
      <GetStartedCard />
      <div className="progress-circle-container">
        <div className="current-circle"></div>
        <div className="other-circle"></div>
        <div className="other-circle"></div>
      </div>
      <img />
    </main>
  );
}

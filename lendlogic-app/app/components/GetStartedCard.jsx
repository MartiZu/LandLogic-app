export default function GetStartedCard() {
  return (
    <div className="card-container mt-32 mx-4 mb-4">
      <h1>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Welcome to LendLogic! We're not just about rates; we're about you.
      </h1>
      <p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        We're here to guide you through the exciting world of homeownership,
        offering personalized advice and finding competitive mortgage rates that
        fit your unique story.
      </p>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <button>Let's get started!</button>
    </div>
  );
}

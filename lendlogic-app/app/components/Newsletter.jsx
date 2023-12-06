"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    //simulate storing user data
    console.log("Data submitted", email);
    //display messafe and reset form
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 4000);
  };

  return (
    <main>
      <div>
        <h2>Sign up for our newsletter</h2>
        <p>Get the latest news and updates from Lendlogic</p>
        <form>
          {submitted ? (
            <p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Thanks for signing up! You'll receive a confirmation email soon.
            </p>
          ) : (
            <>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleInputChange}
              />
              <button type="submit" onClick={handleSubmit}>
                Sign up
              </button>
            </>
          )}
        </form>
      </div>
    </main>
  );
}

"use client";

export function CookieButton({ setCookie, user }) {
  return (
    <form  className="mx-4 my-6 min-w-button-width w-26 bg-off-white rounded-3xl text-purple-accent p-3 shadow-card text-center text-2xl hover:bg-purple-accent hover:text-off-white hover:font-semibold" action={setCookie}>
      <button type="submit">{user}'s journey</button>
    </form>
  );
}

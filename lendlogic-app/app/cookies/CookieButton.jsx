"use client";

export function CookieButton({ setCookie }) {
  return (
    <form action={setCookie}>
      <button type="submit">Hello</button>
    </form>
  );
}

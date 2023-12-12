"use client";

export function CookieRead({ readCookie }) {
  return (
    <form action={readCookie}>
      <button type="submit">Read cookie</button>
    </form>
  );
}

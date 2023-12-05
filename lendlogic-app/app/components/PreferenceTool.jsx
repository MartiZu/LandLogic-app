import Link from "next/link";

export default function PreferenceTool() {
  return (
    <div>
      <form className="flex flex-col">
        <h2>What are you looking for</h2>
        <p>Hello</p>
        <input value="New Buyer" type="submit"></input>
        <input value="Remortgage" type="submit"></input>
        <input value="Moving House" type="submit"></input>
        <input value="Just Browsing" type="submit"></input>
      </form>
      <p>Repay your mortgage quicker</p>
      <p>Reduce your monthly payments</p>
      <p>Change mortgage type</p>
      <p>Release equity</p>
    </div>
  );
}

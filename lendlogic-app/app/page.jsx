import Image from "next/image";
import PreferenceTool from "./components/PreferenceTool";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main>
      <PreferenceTool />
      <Newsletter />
    </main>
  );
}

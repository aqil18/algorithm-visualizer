import Image from "next/image";
import DataStructure from "./dataStructure";
export default function Home() {

  const numbers = [1, 3, 4, 5];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        My Array:
        <DataStructure array={numbers}/>
      </main>
    </div>
  );
}

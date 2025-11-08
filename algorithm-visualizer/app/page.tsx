"use client";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import DataStructure from "./components/DataStructure";

export default function Home() {
  const [numbers, setNumbers] = useState([5, 2, 8, 3, 1]);
  const [code, setCode] = useState(`// Example: sort the array
function run(arr) {
  return arr.sort((a,b)=>a-b);
}`);

  const runCode = () => {
    try {
      // Create a function from code string safely
      const userFunc = new Function("arr", `${code}; return run([...arr]);`);
      const result = userFunc(numbers);
      if (Array.isArray(result)) setNumbers(result);
    } catch (e) {
      console.error(e);
      alert("Error in code");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center w-full max-w-3xl p-8 space-y-6">
        <h1 className="text-2xl font-bold">Algorithm Visualizer</h1>
        <CodeEditor code={code} setCode={setCode} />
        <button
          onClick={runCode}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Run
        </button>
        <DataStructure array={numbers} />
      </main>
    </div>
  );
}

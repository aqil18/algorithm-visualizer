// components/CodeEditor.jsx
"use client";
import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, setCode }) {
  return (
    <div className="w-full border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <Editor
        height="300px"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />
    </div>
  );
}

// components/VisualizerControls.jsx
"use client";
import { useState } from "react";

export default function VisualizerControls({
  onRun,
  onPause,
  onReset,
  onShuffle,
  onSpeedChange,
  isRunning,
  speed,
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
      <button
        onClick={isRunning ? onPause : onRun}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        {isRunning ? "Pause" : "Run"}
      </button>

      <button
        onClick={onReset}
        className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
      >
        Reset
      </button>

      <button
        onClick={onShuffle}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Shuffle
      </button>

      <div className="flex items-center space-x-2">
        <label htmlFor="speed" className="text-sm text-gray-700">
          Speed:
        </label>
        <input
          type="range"
          id="speed"
          min="100"
          max="1000"
          step="100"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

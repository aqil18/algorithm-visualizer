// components/DataStructure.jsx
"use client";
import { motion } from "framer-motion";

export default function DataStructure({ array }) {
  return (
    <div className="flex space-x-4 mt-8">
      {array.map((num, idx) => (
        <motion.div
          key={idx}
          className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500 text-white font-bold"
          layout
          transition={{ duration: 0.3 }}
        >
          {num}
        </motion.div>
      ))}
    </div>
  );
}

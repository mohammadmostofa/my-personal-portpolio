"use client";
import { useEffect, useState } from "react";

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
      }}
    >
      <div className="w-8 h-8 rounded-full border-2 border-blue-500 opacity-70 animate-ping"></div>
    </div>
  );
}
import React, { useEffect, useState } from "react";

export function Meteors({ number = 20 }: { number?: number }) {
  const [meteors, setMeteors] = useState<
    { id: number; x: number; y: number; size: number; duration: number }[]
  >([]);

  useEffect(() => {
    const newMeteors = Array.from({ length: number }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 2 + 2,
    }));
    setMeteors(newMeteors);
  }, [number]);

  return (
    <div className="absolute inset-0 pointer-events-none z-[-1]">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute bg-white opacity-70 rounded-full"
          style={{
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            width: `${meteor.size}px`,
            height: `${meteor.size}px`,
            animation: `meteor ${meteor.duration}s linear infinite`,
          }}
        />
      ))}

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes meteor {
          0% {
            transform: translate(0, 0) scaleX(1.5) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translate(-300px, 600px) scaleX(1.5) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

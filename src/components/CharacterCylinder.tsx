"use client";
import React, { useEffect, useRef, useState } from "react";

const characterImages = [
  "/images/character1.png",
  "/images/character2.png",
  "/images/character3.png",
  "/images/character4.png"
  // Add more image paths as needed
];

const imageCount = characterImages.length;
const radius = 200; // smaller radius

export function CharacterCylinder() {
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let lastTime: number = performance.now();
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      setRotation((prev) => prev - 0.03 * delta); // Anti-clockwise
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current !== undefined) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        perspective: "1000px",
        width: 700,
        height: 700,
        position: "relative",
        margin: "0 auto",
        overflow: "hidden",
      }}
      className="flex items-center justify-center"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) rotateY(${rotation}deg)`,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
      >
        {characterImages.map((src, i) => {
          const angle = (360 / imageCount) * i;
          return (
            <img
              key={src}
              src={src}
              alt={`Character ${i + 1}`}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                height: 500, // smaller image height
                width: "auto",
                transform: `
                  rotateY(${angle}deg)
                  translateZ(${radius}px)
                  translate(-50%, -50%)
                `,
                borderRadius: 16,
                zIndex: 10,
                transition: "transform 0.2s",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

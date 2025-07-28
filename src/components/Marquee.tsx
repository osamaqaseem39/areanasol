import React from "react";
import "./Marquee.css";

export default function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {Array(3)
          .fill(
            "Win • Play • Earn • Win • Play • Earn • Win • Play • Earn • Win • Play • Earn • Win • Play • Earn • Win • Play • Earn • Win • Play • Earn • Win • Play • Earn • "
          )
          .map((text, idx) => (
            <span key={idx}>{text}</span>
          ))}
      </div>
    </div>
  );
} 
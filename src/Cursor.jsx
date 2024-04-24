import React, { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ posX: 0, posY: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Introduce a delay to slow down cursor movement
      setTimeout(() => {
        setMousePosition({
          posX: event.clientX,
          posY: event.clientY,
        });
      }, 20); // Adjust this value to change the speed (in milliseconds)
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Check if the screen width exceeds a certain threshold (e.g., 768px for tablets)
  const isDesktop = window.innerWidth > 768;

  return (
    // Render the cursor element only if it's a desktop device
    isDesktop && (
      <div
        className="fixed z-50"
        style={{
          top: mousePosition.posY,
          left: mousePosition.posX,
          transform: "translate(-50%, -50%)", // Center the circle at the cursor position
        }}
      >
        <div
          className="h-8 w-8 rounded-[50%] border"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></div>
      </div>
    )
  );
}

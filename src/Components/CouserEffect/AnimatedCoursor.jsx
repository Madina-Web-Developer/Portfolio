import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

const AnimatedCoursor = () => {
  const cursorRef = useRef(null);
  // Use a ref to store the latest mouse coordinates
  const mousePosRef = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const speed = 0.1;
    const updatePosition = () => {
      setPos((prevPos) => ({
        x: prevPos.x + (mousePosRef.current.x - prevPos.x) * speed,
        y: prevPos.y + (mousePosRef.current.y - prevPos.y) * speed,
      }));
      requestAnimationFrame(updatePosition);
    };

    updatePosition();
  }, []);

  return (
    <div
      ref={cursorRef}
      id="Cursor"
      className="custom-cursor"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    />
  );
};

export default AnimatedCoursor;
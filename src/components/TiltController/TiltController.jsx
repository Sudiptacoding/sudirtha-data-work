"use client";

import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";

export default function TiltController({ children }) {
  // Start with manual tilt X = -50, Y = 0
  const [[manualTiltAngleX, manualTiltAngleY], setManualTiltAngle] = useState([10, 0]);

  useEffect(() => {
    function handleScroll() {
      const element = document.getElementById("tilt-container");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if element is mostly visible in viewport (e.g. 50% visible)
      const isInView = rect.top < windowHeight * 0.45 && rect.bottom > windowHeight * 0.25;

      if (isInView) {
        setManualTiltAngle([0, 0]);
      } else {
        setManualTiltAngle([10, 0]);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="tilt-container" className="flex flex-col items-center gap-6 mt-10">
      <Tilt
        tiltAngleXManual={manualTiltAngleX}
        tiltAngleYManual={manualTiltAngleY}
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="#ffffff"
        glarePosition="all"
        className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center rounded-xl shadow-lg"
      >
        {children}
      </Tilt>
    </div>
  );
}

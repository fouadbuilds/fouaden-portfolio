"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HiThereSticker() {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const triggerShake = () => {
      setIsShaking(true);
      window.setTimeout(() => setIsShaking(false), 520);
    };

    const initial = window.setTimeout(triggerShake, 800);
    const everyFiveSeconds = window.setInterval(triggerShake, 5000);

    return () => {
      window.clearTimeout(initial);
      window.clearInterval(everyFiveSeconds);
    };
  }, []);

  return (
    <div className="sticker-wrap">
      <div className="sticker-shadow" />
      <div className={`sticker-box ${isShaking ? "shaking" : ""}`}>
        <span className="sticker-text">hi there!</span>
      </div>
      <div className="sticker-photo">
        <Image
          src="/images/placeholder.svg"
          alt="sticker preview image"
          fill
          sizes="198px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

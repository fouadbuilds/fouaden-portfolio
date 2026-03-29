"use client";

import { useEffect, useMemo, useState } from "react";

interface TypewriterTitleProps {
  text: string;
  className?: string;
}

export default function TypewriterTitle({
  text,
  className,
}: TypewriterTitleProps) {
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const [visibleText, setVisibleText] = useState(
    prefersReducedMotion ? text : "",
  );
  const [isDone, setIsDone] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let index = 0;
    let intervalId: number | undefined;

    const startDelay = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setVisibleText(text.slice(0, index));

        if (index >= text.length) {
          if (intervalId !== undefined) {
            window.clearInterval(intervalId);
          }
          setIsDone(true);
        }
      }, 65);
    }, 180);

    return () => {
      window.clearTimeout(startDelay);
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [prefersReducedMotion, text]);

  return (
    <h1 className={className} aria-label={text}>
      <span aria-hidden="true">{visibleText}</span>
      {!isDone && <span className="hero-title-caret" aria-hidden="true" />}
    </h1>
  );
}

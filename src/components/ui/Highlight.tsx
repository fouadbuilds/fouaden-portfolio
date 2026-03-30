"use client";

import Link from "next/link";
import Image from "next/image";

interface HighlightProps {
  children: React.ReactNode;
  color: "yellow" | "red" | "purple";
  href: string;
  image?: string;
  external?: boolean;
}

export default function Highlight({
  children,
  color,
  href,
  image,
  external = true,
}: HighlightProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`highlight ${color}`}
    >
      {children}
      {image && (
        <span className="highlight-preview">
          <Image
            src={image}
            alt=""
            fill
            sizes="218px"
            style={{ objectFit: "fill" }}
          />
        </span>
      )}
    </Link>
  );
}

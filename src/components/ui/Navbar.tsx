"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Link href="/" className={`nav-logo ${pathname === "/" ? "active" : ""}`}>
        <span className="logo-bg" />
        {siteConfig.name}
      </Link>
      <ul className="nav-links">
        {[
          { label: "projects", href: "/projects", external: false },
          { label: "writing", href: "/writing", external: false },
          { label: "resume", href: "/resume.pdf", external: true },
        ].map(({ label, href, external }) => (
          <li key={label}>
            <Link
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={`nav-link ${label} ${pathname === href ? "active" : ""}`}
            >
              <span className="link-bg" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

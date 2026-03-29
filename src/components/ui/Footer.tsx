import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <>
      <div className="footer-divider" />
      <footer className="footer">
        <a className="footer-link" href={`mailto:${siteConfig.email}`}>Email</a>
        <a className="footer-link" href={siteConfig.github} target="_blank" rel="noopener noreferrer">Github</a>
        <a className="footer-link" href={siteConfig.fiverr} target="_blank" rel="noopener noreferrer">Fiverr</a>

      </footer>
    </>
  );
}
import HiThereSticker from "@/components/ui/HiThereSticker";
import Highlight from "@/components/ui/Highlight";
import TypewriterTitle from "@/components/ui/TypewriterTitle";
import { projects, highlightedLinks } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="content">
        <HiThereSticker />
        <TypewriterTitle
          text="hey, i'm fouad"
          className="hero-title hero-title-typewriter"
        />

        <div className="hero-body">
          <p>
            Incoming Applied Computer Science{" "}
            <Highlight
              color="yellow"
              href={highlightedLinks.dalhousie.href}
              image={highlightedLinks.dalhousie.image}
            >
              @Dalhousie
            </Highlight>
          </p>
          <p>
            I care a great deal about friction.
            <br />
            Everything I build is an attempt to remove it.
          </p>
          <p>
            Spending my spare time running, shooting{" "}
            <Highlight
              color="red"
              href={highlightedLinks.film.href}
              image={highlightedLinks.film.image}
            >
              film
            </Highlight>
            , soccer and{" "}
            <Highlight
              color="purple"
              href={highlightedLinks.graphicDesign.href}
              image={highlightedLinks.graphicDesign.image}
            >
              graphic design
            </Highlight>
          </p>
        </div>

        <p className="status-body">
          The page could not be loaded right now. You can try again or head back
          home.
        </p>

        <Link href="/" className="status-home-link">
          Back home
        </Link>

        <h2 className="section-heading">projects</h2>

        <ul className="project-list">
          {projects.map((p) => (
            <li key={p.slug} className="project-list-item">
              <span>
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  {p.title}:
                </a>{" "}
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

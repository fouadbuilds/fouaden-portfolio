import HiThereSticker from "@/components/ui/HiThereSticker";
import Highlight from "@/components/ui/Highlight";
import TypewriterTitle from "@/components/ui/TypewriterTitle";
import { projects, highlightedLinks } from "@/lib/data";
// import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="content">
        <HiThereSticker />
        <TypewriterTitle
          text="hi, i'm fouad"
          className="hero-title hero-title-typewriter"
        />

        <div className="hero-body">
          <p>
            incoming cs{" "}
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
            </Highlight>{" "}
            and playing soccer
          </p>
        </div>

        <h2 className="section-heading">projects</h2>

        <ul className="project-list">
          {projects
            .filter((p) => p.showOnHome !== false)
            .map((p) => (
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

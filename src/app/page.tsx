import HiThereSticker from "@/components/ui/HiThereSticker";
import Highlight from "@/components/ui/Highlight";
import TypewriterTitle from "@/components/ui/TypewriterTitle";
import { projects, highlightedLinks } from "@/lib/data";

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
            I&apos;m drawn to what happens under the hood — systems,
            <br />
            infrastructure as well as automation, and how things actually work.
          </p>
          <p>
            Outside of this i run and shoot{" "}
            <Highlight
              color="red"
              href={highlightedLinks.film.href}
              image={highlightedLinks.film.image}
            >
              film
            </Highlight>
            , i love{" "}
            <Highlight
              color="purple"
              href={highlightedLinks.graphicDesign.href}
              image={highlightedLinks.graphicDesign.image}
            >
              graphic design
            </Highlight>
            , and soccer.
          </p>
        </div>

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

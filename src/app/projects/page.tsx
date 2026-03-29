import { projects } from "@/lib/data";
import Image from "next/image";
export const metadata = { title: "projects — fouaden" };

export default function ProjectsPage() {
  return (
    <main>
      <div className="content">
        <h1 className="hero-title">projects</h1>
        <p className="projects-intro">
          A collection of things I&apos;ve built — tools, systems, and whatever
          problem needed solving that week.
        </p>
        <div className="projects-grid">
          {projects.map((p) => (
            <a
              key={p.slug}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-card-image">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span className="project-card-title">{p.title}</span>
              <span className="project-card-desc">{p.description}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

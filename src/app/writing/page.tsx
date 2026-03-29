import { writing } from "@/lib/data";

export const metadata = { title: "writing — fouaden" };

export default function WritingPage() {
  const reading = writing.filter((w) => w.type === "reading");
  const posts = writing.filter((w) => w.type === "writing");

  return (
    <main>
      <div className="content">
        <h1 className="hero-title">what i&apos;m reading</h1>
        <ul className="writing-list">
          {reading.map((item, i) => (
            <li key={i} className="writing-item">
              {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a> : <span>{item.title}</span>}
            </li>
          ))}
        </ul>

        {posts.length > 0 && (
          <>
            <h2 className="writing-section-title">writing</h2>
            <ul className="writing-list">
              {posts.map((item, i) => (
                <li key={i} className="writing-item">
                  {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a> : <span>{item.title}</span>}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="content">
        <section className="status-page" aria-labelledby="not-found-title">
          <p className="status-kicker">404</p>
          <h1 id="not-found-title" className="status-title">
            This page does not exist.
          </h1>
          <p className="status-body">
            The address may have changed or the page was never here in the first
            place.
          </p>
          <div className="status-actions">
            <Link href="/" className="status-home-link">
              Back home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

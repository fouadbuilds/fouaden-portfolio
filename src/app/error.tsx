"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  void error.digest;

  return (
    <main>
      <div className="content">
        <section className="status-page" aria-labelledby="error-title">
          <p className="status-kicker">Error</p>
          <h1 id="error-title" className="status-title">
            Something went wrong.
          </h1>
          <p className="status-body">
            The page could not be loaded right now. You can try again or head
            back home.
          </p>
          <div className="status-actions">
            <button
              type="button"
              className="status-retry-button"
              onClick={() => reset()}
            >
              Try again
            </button>
            <Link href="/" className="status-home-link">
              Back home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

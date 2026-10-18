import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p>404 / SIGNAL LOST</p>
      <h1>This path has<br /><em>gone quiet.</em></h1>
      <span>The page may have moved or never existed.</span>
      <Link href="/">Return to Meridius</Link>
    </main>
  );
}

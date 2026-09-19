import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Missing from the catalog</h1>
      <p>
        That slug is not listed. Browse the <Link href="/tools">full catalog</Link>.
      </p>
    </main>
  );
}

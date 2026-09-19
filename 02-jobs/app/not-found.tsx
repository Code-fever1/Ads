import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>That clipping is gone</h1>
      <p>
        Listings expire or rotate out of the live 100. See the <Link href="/jobs">current table</Link>.
      </p>
    </main>
  );
}

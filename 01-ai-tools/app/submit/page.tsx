import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Submit a tool",
  description: "Suggest an AI tool for Kiln. Manual review only.",
};

export default async function SubmitPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>;
}) {
  const { sent } = await searchParams;

  async function submit(formData: FormData) {
    "use server";
    const name = String(formData.get("name") ?? "").trim();
    const url = String(formData.get("url") ?? "").trim();
    if (!name || !url) return;
    redirect("/submit?sent=1");
  }

  return (
    <main>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)" }}>
        Submit a tool
      </h1>
      <p className="lede">
        We review by hand. Paid placement is not a queue jump. Cracked software, keygens, and medical
        claims are rejected.
      </p>
      {sent ? (
        <p className="ochre-panel">Received. We will only write back if we list it.</p>
      ) : (
        <form className="form" action={submit}>
          <label>
            Tool name
            <input name="name" required />
          </label>
          <label>
            Official URL
            <input name="url" type="url" required placeholder="https://" />
          </label>
          <label>
            Why it belongs
            <textarea name="why" rows={5} />
          </label>
          <button type="submit">Send for review</button>
        </form>
      )}
    </main>
  );
}

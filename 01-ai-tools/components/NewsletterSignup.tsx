import { NEWSLETTER_URL } from "@/lib/site";

export function NewsletterSignup() {
  if (!NEWSLETTER_URL) {
    return null;
  }

  return (
    <form
      className="newsletter-form"
      action={NEWSLETTER_URL}
      method="post"
      target="_blank"
      rel="noopener noreferrer"
    >
      <label className="newsletter-label" htmlFor="kiln-newsletter-email">
        Email address
      </label>
      <div className="newsletter-row">
        <input
          id="kiln-newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@domain.com"
          className="newsletter-input"
        />
        <button type="submit" className="btn btn-ochre">
          Subscribe
        </button>
      </div>
    </form>
  );
}

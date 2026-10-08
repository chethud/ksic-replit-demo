import type { FormEvent } from 'react';

interface NewsletterProps {
  email: string;
  subscribed: boolean;
  onEmailChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Newsletter({ email, subscribed, onEmailChange, onSubmit }: NewsletterProps) {
  return (
    <section className="newsletter" id="newsletter">
      <div className="eyebrow">The house of Mysore Silk</div>
      <h2 className="serif">Stay close to the story.</h2>
      <p>Discover new collections, stories from the loom, and invitations from KSIC.</p>
      <form className="newsletter-form" onSubmit={onSubmit}>
        <label className="visually-hidden" htmlFor="newsletter-email">Your email address</label>
        <input id="newsletter-email" type="email" required value={email} onChange={(event) => onEmailChange(event.target.value)} placeholder="Your email address" aria-label="Your email address" data-testid="input-email" disabled={subscribed} />
        <button type="submit" data-testid="button-subscribe" disabled={subscribed}>{subscribed ? 'SUBSCRIBED ✓' : 'SUBSCRIBE'}</button>
      </form>
      <div className="newsletter-status" aria-live="polite" data-testid="status-newsletter">{subscribed ? 'You are now part of the story. Thank you.' : ''}</div>
    </section>
  );
}

"use client";

import { useForm, ValidationError } from "@formspree/react";
import { site } from "@/data/profile";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(site.formspreeId);

  if (state.succeeded) {
    return (
      <p className="form-success" role="status">
        Thanks for your message! I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" autoComplete="name" maxLength={80} required />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="field-error" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" autoComplete="email" maxLength={120} required />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="field-error" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} maxLength={2000} required />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="field-error" />
      </div>
      <button type="submit" className="btn" disabled={state.submitting}>
        {state.submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

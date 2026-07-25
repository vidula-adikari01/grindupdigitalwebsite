"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { contactDetails } from "../data/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = String(form.get("name") ?? "");
        const email = String(form.get("email") ?? "");
        const project = String(form.get("project") ?? "");
        const message = String(form.get("message") ?? "");
        const subject = `Book a Call Request from ${name || "Website Visitor"}`;
        const body = [
          "New GrindUp Digital booking request",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Project type: ${project}`,
          "",
          "Message:",
          message || "No message provided.",
        ].join("\n");

        window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus(`Opening an email to ${contactDetails.email}.`);
      }}
      className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur"
    >
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-zinc-300">
          Name
          <input
            required
            name="name"
            placeholder="Your name"
            className="h-12 rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-white placeholder:text-zinc-600"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-300">
          Email
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            className="h-12 rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-white placeholder:text-zinc-600"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-300">
          Project type
          <select name="project" className="h-12 rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-white">
            <option>Full digital presence</option>
            <option>Social media content</option>
            <option>Video production</option>
            <option>Brand identity</option>
            <option>Website or landing page</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-300">
          Message
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us what you are building"
            className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-600"
          />
        </label>
        <button
          type="submit"
          className="shimmer-btn inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-zinc-950 transition hover:bg-zinc-200"
        >
          Book a Call <Send size={17} aria-hidden="true" />
        </button>
        <p aria-live="polite" className="min-h-6 text-sm font-medium text-lime">
          {status}
        </p>
      </div>
    </form>
  );
}

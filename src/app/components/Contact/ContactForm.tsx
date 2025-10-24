"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setStatus("success");
    setTimeout(() => setStatus("idle"), 4000); // Reset message
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white/90 backdrop-blur-sm p-10 rounded-2xl border border-brandDark/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all"
    >
      {/* Header */}
      <h3 className="text-xl font-serif text-brandDark text-center mb-2">
        Send me a message
      </h3>
      <p className="text-sm text-brandDark/70 text-center mb-6">
        I’ll personally read and reply within 24–48 hours (Mon–Fri).
      </p>

      {/* Inputs */}
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-brandDark mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-brandDark/20 rounded-md px-4 py-2.5 text-brandDark bg-white focus:outline-none focus:ring-2 focus:ring-brandAccent/50 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-brandDark mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-brandDark/20 rounded-md px-4 py-2.5 text-brandDark bg-white focus:outline-none focus:ring-2 focus:ring-brandAccent/50 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-brandDark mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-brandDark/20 rounded-md px-4 py-2.5 text-brandDark bg-white focus:outline-none focus:ring-2 focus:ring-brandAccent/50 focus:border-transparent resize-none transition-all"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="group w-full flex items-center justify-center gap-2 bg-brandAccent text-brandDark font-medium tracking-wide px-6 py-3 rounded-full hover:bg-brandDark hover:text-white transition-all duration-300"
      >
        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        SEND MESSAGE
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <p className="text-brandDark/80 bg-brandAccent/10 border border-brandAccent/20 rounded-md px-4 py-3 text-center font-medium mt-4 animate-fade-in">
          Thanks for reaching out! I’ll get back to you soon. ☕
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center font-medium mt-2">
          Oops! Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

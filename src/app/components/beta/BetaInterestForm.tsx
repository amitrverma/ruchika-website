"use client";

import { useEffect, useState } from "react";
import { Send, CheckCircle2, AlertCircle, X } from "lucide-react";

type FormStatus = "idle" | "success" | "error";

type BetaInterestFormData = {
  namePronoun: string;
  email: string;
  businessName: string;
  website: string;
  anythingElse: string;
};

const initialData: BetaInterestFormData = {
  namePronoun: "",
  email: "",
  businessName: "",
  website: "",
  anythingElse: "",
};

export default function BetaInterestForm() {
  const [formData, setFormData] = useState<BetaInterestFormData>(initialData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    try {
      const res = await fetch("/api/beta-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData(initialData);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("open-beta-interest-form", handleOpen as EventListener);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("open-beta-interest-form", handleOpen as EventListener);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeModal = () => setIsOpen(false);

  const baseButtonClass =
    "group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm tracking-wide transition-all duration-300";
  const statusClass =
    status === "success"
      ? "bg-green-600"
      : status === "error"
      ? "bg-red-600"
      : "bg-brandSecondary hover:bg-brandDark";
  const buttonClassName = [
    baseButtonClass,
    statusClass,
    status === "idle" ? "hover:-translate-y-0.5 shadow-md" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="beta-interest-form"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-10"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-brandDark/20 bg-white p-5 md:p-8 text-brandDark">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3 text-left">
            <h2 className="text-2xl md:text-3xl font-serif">
              Beta Client Interest Form - Website Messaging and Copywriting
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Thank you for your interest in my website messaging and copywriting beta offering.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              This short form helps me understand a bit about your business, where you are at,
              and what you are looking for from your website.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Filling this out does not commit you to anything. Once I review your responses,
              I will reach out to schedule a conversation so we can see if this feels aligned
              for both of us.
            </p>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="inline-flex items-center justify-center rounded-full border border-brandDark/20 p-2 text-brandDark hover:text-brandSecondary transition-colors cursor-pointer"
            aria-label="Close form"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 border border-brandDark/40 bg-brandPrimary/40 p-6 md:p-8 space-y-5 text-left"
        >
          <div className="space-y-2">
            <label htmlFor="namePronoun" className="text-sm font-semibold text-brandDark">
              What is your first and last name and your pronoun? *
            </label>
            <input
              id="namePronoun"
              name="namePronoun"
              type="text"
              required
              value={formData.namePronoun}
              onChange={handleChange}
              className="w-full rounded-md border border-brandDark/20 bg-white px-3 py-2 text-brandDark focus:outline-none focus:ring-2 focus:ring-brandSecondary/40"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-brandDark">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-brandDark/20 bg-white px-3 py-2 text-brandDark focus:outline-none focus:ring-2 focus:ring-brandSecondary/40"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="businessName" className="text-sm font-semibold text-brandDark">
              What is your business name and what services do you offer? *
            </label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              required
              value={formData.businessName}
              onChange={handleChange}
              className="w-full rounded-md border border-brandDark/20 bg-white px-3 py-2 text-brandDark focus:outline-none focus:ring-2 focus:ring-brandSecondary/40"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="website" className="text-sm font-semibold text-brandDark">
              Do you currently have a website? If yes, share the URL. If no, share your social
              media links (Instagram, LinkedIn, etc.) *
            </label>
            <input
              id="website"
              name="website"
              type="text"
              required
              value={formData.website}
              onChange={handleChange}
              className="w-full rounded-md border border-brandDark/20 bg-white px-3 py-2 text-brandDark focus:outline-none focus:ring-2 focus:ring-brandSecondary/40"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="anythingElse" className="text-sm font-semibold text-brandDark">
              Anything else you would like me to know
            </label>
            <textarea
              id="anythingElse"
              name="anythingElse"
              rows={4}
              value={formData.anythingElse}
              onChange={handleChange}
              className="w-full rounded-md border border-brandDark/20 bg-white px-3 py-2 text-brandDark focus:outline-none focus:ring-2 focus:ring-brandSecondary/40"
            />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className={`${buttonClassName} cursor-pointer`}
          >
            {status === "success" ? (
              <>
                <CheckCircle2 className="w-5 h-5 animate-[pop_0.4s_ease-out]" />
                Sent!
              </>
            ) : status === "error" ? (
              <>
                <AlertCircle className="w-5 h-5 animate-[shake_0.4s_ease-in-out]" />
                Try Again
              </>
            ) : (
              <>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                SUBMIT
              </>
            )}
          </button>

          {status === "success" && (
            <p className="text-brandDark/80 bg-white/60 border border-brandPrimary/40 rounded-lg px-4 py-3 text-center font-medium mt-4">
              Thanks for sharing your details. I will be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center font-medium mt-2">
              Oops! Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

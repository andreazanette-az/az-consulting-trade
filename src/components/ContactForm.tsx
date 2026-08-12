"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { formspreeEndpoint } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

type Fields = {
  name: string;
  email: string;
  message: string;
  _gotcha: string;
};

type Errors = Partial<Record<keyof Omit<Fields, "_gotcha">, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialFields: Fields = { name: "", email: "", message: "", _gotcha: "" };

const fieldClass =
  "w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-accent";

export default function ContactForm() {
  const t = useTranslations("contactForm");
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(values: Fields): Errors {
    const validationErrors: Errors = {};

    if (!values.name.trim()) {
      validationErrors.name = t("errors.name");
    }

    if (!values.email.trim()) {
      validationErrors.email = t("errors.emailRequired");
    } else if (!EMAIL_RE.test(values.email.trim())) {
      validationErrors.email = t("errors.emailInvalid");
    }

    if (!values.message.trim()) {
      validationErrors.message = t("errors.message");
    }

    return validationErrors;
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Honeypot: bots fill every field, humans never see this one.
    // Pretend success without ever hitting the network.
    if (fields._gotcha) {
      setStatus("success");
      return;
    }

    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFields(initialFields);
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-white/15 p-8">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
          {t("successTitle")}
        </p>
        <p className="mt-3 text-white/70">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/15 p-8"
      aria-label={t("ariaLabel")}
      noValidate
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
        {t("heading")}
      </p>

      <div className="mt-6 space-y-6">
        {/* Honeypot field: hidden from sighted users and screen readers,
            bots that auto-fill every input will trip it. */}
        <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
          <label htmlFor="_gotcha">{t("honeypotLabel")}</label>
          <input
            id="_gotcha"
            name="_gotcha"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={fields._gotcha}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="name" className="sr-only">
            {t("namePlaceholder")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={t("namePlaceholder")}
            className={fieldClass}
            value={fields.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            {t("emailPlaceholder")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t("emailPlaceholder")}
            className={fieldClass}
            value={fields.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            {t("messagePlaceholder")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={t("messagePlaceholder")}
            className={`${fieldClass} resize-none`}
            value={fields.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-xs text-red-400">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-white px-6 py-3.5 text-sm font-medium tracking-wide text-black transition-colors duration-300 hover:bg-accent disabled:opacity-60"
      >
        <span>{status === "submitting" ? t("submitting") : t("submit")}</span>
        {status !== "submitting" && (
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path
              d="M2 8H14M14 8L9 3M14 8L9 13"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {status === "error" && (
        <p className="mt-4 text-sm text-white/60">{t("errorBody")}</p>
      )}
    </form>
  );
}

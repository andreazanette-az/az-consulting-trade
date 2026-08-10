"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
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
  "w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-accent";

function validate(fields: Fields): Errors {
  const errors: Errors = {};

  if (!fields.name.trim()) {
    errors.name = "Inserisci il tuo nome.";
  }

  if (!fields.email.trim()) {
    errors.email = "Inserisci un indirizzo email.";
  } else if (!EMAIL_RE.test(fields.email.trim())) {
    errors.email = "Inserisci un indirizzo email valido.";
  }

  if (!fields.message.trim()) {
    errors.message = "Raccontaci brevemente la tua esigenza.";
  }

  return errors;
}

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

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
          Messaggio inviato
        </p>
        <p className="mt-3 text-white/70">
          Grazie per averci contattato. Ti risponderemo il prima possibile.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/15 p-8"
      aria-label="Modulo di contatto"
      noValidate
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
        Scrivici
      </p>

      <div className="mt-6 space-y-6">
        {/* Honeypot field: hidden from sighted users and screen readers,
            bots that auto-fill every input will trip it. */}
        <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
          <label htmlFor="_gotcha">Non compilare questo campo</label>
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
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nome e cognome"
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
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email aziendale"
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
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Raccontaci il tuo progetto"
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
        <span>
          {status === "submitting" ? "Invio in corso…" : "Invia messaggio"}
        </span>
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
        <p className="mt-4 text-sm text-white/60">
          Non è stato possibile inviare il messaggio. Riprova oppure scrivici
          direttamente via email.
        </p>
      )}
    </form>
  );
}

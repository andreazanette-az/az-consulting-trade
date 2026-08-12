import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="it">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "4rem 1.5rem" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#727272" }}>
          Errore 404
        </p>
        <h1 style={{ marginTop: "1rem", fontSize: "2rem" }}>Pagina non trovata.</h1>
        <Link href="/" style={{ display: "inline-block", marginTop: "1.5rem", color: "#111111" }}>
          Torna alla home →
        </Link>
      </body>
    </html>
  );
}

// Testi tradotti in messages/it.json e messages/en.json.
// Qui restano solo dati non testuali (percorsi immagine, contatti, anchor).

export const navAnchors = [
  { key: "servizi", href: "#servizi" },
  { key: "metodo", href: "#metodo" },
  { key: "contatti", href: "#contatti" },
] as const;

export const serviceImages = [
  "/assets/images/service-diecasting.jpg",
  "/assets/images/service-automation.jpg",
  "/assets/images/service-robotics.jpg",
  "/assets/images/service-consulting.jpg",
];

export const contact = {
  email: "andrea@azconsultingtrade.it",
  phone: "+39 392 135 7797",
  vat: "IT05567410260",
  linkedin: "https://www.linkedin.com/company/az-consulting-trade",
};

export const formspreeEndpoint = "https://formspree.io/f/xoeaerzr";

export const footerLinkAnchors = [
  { key: "diecasting", href: "#servizi" },
  { key: "automation", href: "#servizi" },
  { key: "robotics", href: "#servizi" },
  { key: "consulting", href: "#servizi" },
  { key: "trade", href: "#trade" },
  { key: "contact", href: "#contatti" },
] as const;

// ID della policy su Iubenda (usato per i link Privacy/Cookie Policy nel footer).
export const iubendaPolicyId = "31362546";

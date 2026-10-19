// Testi tradotti in messages/it.json e messages/en.json.
// Qui restano solo dati non testuali (percorsi immagine, contatti, anchor).

export const navAnchors = [
  { key: "servizi", href: "#servizi" },
  { key: "metodo", href: "#metodo" },
  { key: "collaborazioni", href: "#collaborazioni" },
  { key: "contatti", href: "#contatti" },
] as const;

export const serviceImages = [
  "/assets/images/service-packaging.jpg",
  "/assets/images/service-automation.jpg",
  "/assets/images/service-robotics.jpg",
  "/assets/images/service-consulting.jpg",
];

// Partner: testi in messages/*.json sotto "partners.items.<key>".
export const partners = [
  {
    key: "artEco",
    url: "https://art-eco.it",
    images: [
      "/assets/images/art-eco-riscaldamento-capannone.webp",
      "/assets/images/art-eco-raffrescatore-tetto.webp",
      "/assets/images/art-eco-raffrescamento-capannone.webp",
      "/assets/images/art-eco-riscaldamento-commerciale.webp",
    ],
  },
] as const;

export const contact = {
  email: "andrea@azconsultingtrade.it",
  phone: "+39 349 934 4369",
  vat: "IT05567410260",
  linkedin:
    "https://www.linkedin.com/company/az-consulting-trade/about/?viewAsMember=true",
};

export const formspreeEndpoint = "https://formspree.io/f/xoeaerzr";

// ID della policy su Iubenda (usato per i link Privacy/Cookie Policy nel footer).
export const iubendaPolicyId = "31362546";

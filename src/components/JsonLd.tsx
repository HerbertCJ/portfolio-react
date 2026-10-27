import { certifications, education, experience, site, skills, summary } from "@/data/profile";

const current = experience[0];

const person = {
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.fullName,
  alternateName: site.name,
  url: site.url,
  image: `${site.url}/profile-1200.webp`,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  description: summary,
  worksFor: { "@type": "Organization", name: current.company },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Recife",
    addressRegion: "PE",
    addressCountry: "BR",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  knowsLanguage: ["en", "pt-BR"],
  knowsAbout: skills.flatMap((s) => s.items),
  hasCredential: certifications.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c.name,
    credentialCategory: "certification",
    recognizedBy: { "@type": "Organization", name: c.issuer },
    ...(c.url && { url: c.url }),
  })),
  sameAs: [site.github, site.linkedin],
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      name: site.title,
      description: site.description,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: { "@id": `${site.url}/#person` },
      dateModified: new Date().toISOString().slice(0, 10),
    },
    person,
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}

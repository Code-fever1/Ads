import type { CareerPage } from "@/lib/types";

export const careerPages: CareerPage[] = [
  {
    slug: "cv",
    title: "CV notes for software engineers",
    summary: "A one-page CV that a human can scan in 20 seconds.",
    body: [
      "Hiring managers skim. Put a title, years, stack, and two product outcomes at the top. “Worked on various projects” is not an outcome. “Cut p95 API latency from 800ms to 120ms” is.",
      "If you are in Lahore or Karachi applying to remote US teams, say timezone overlap in one line. Do not hide the city. Do not paste a photo or a CNIC number.",
      "Keep the file a PDF with selectable text. Fancy columns break applicant-tracking parsers. Rolepaper does not store CVs. We also do not rewrite yours for a fee.",
      "Tailor the first six bullets to the posting you clicked from this site. That is the whole trick. There is no AI prompt that replaces reading the apply page.",
    ],
  },
  {
    slug: "cover-letter",
    title: "Cover letters that do not waste a screen",
    summary: "Half a page, specific, or skip it if the form allows.",
    body: [
      "If the employer’s form makes the letter optional, spend the time on the CV. If they ask for one, three short paragraphs beat a page of adjectives.",
      "Paragraph one: the product they ship, in their words. Paragraph two: one thing you shipped that maps to it. Paragraph three: timezone and start date.",
      "Do not mention this aggregator. They do not care. Do not mention Indeed either. Brand-navigational cover letters read as spam.",
    ],
  },
  {
    slug: "interview-questions",
    title: "Interview questions worth practicing",
    summary: "A small set, not a dump of 500 leaked puzzles.",
    body: [
      "For frontend: build a UI from a spec, talk about accessibility, and explain a performance trace. For backend: design a small API, talk about indexes, and describe a production incident.",
      "For electrical and embedded: a circuit you can draw, a firmware bug you actually found, and how you test on hardware you cannot rewind.",
      "System design at junior level is “how would you store this and what fails.” At senior level it is trade-offs and cost. Rehearse out loud. An AI interviewer is optional. A rubber duck is enough.",
    ],
  },
  {
    slug: "salaries",
    title: "How to read a salary on a third-party listing",
    summary: "We display the source’s number. We do not invent a market report.",
    body: [
      "When Remote OK or Himalayas send a min and max, Rolepaper prints them. When Arbeitnow does not, we print “Not listed.” Filling that gap with a blogger’s guess would be the YMYL problem this site is trying to avoid.",
      "Pakistan, UAE, and US bands are not interchangeable. A remote posting in USD may still exclude your country on the apply form. Always open the original URL.",
      "This page is for ads later: people read compensation essays. It is not personal financial advice.",
    ],
  },
  {
    slug: "how-to-become-software-engineer",
    title: "How to become a software engineer (without a 40-page funnel)",
    summary: "Ship things, show them, apply to junior titles that exist this week.",
    body: [
      "The sequence that still works: learn enough to build, publish a small project with a README, get one person to review your code, then apply to intern and junior listings that are actually dated.",
      "Bootcamps and YouTube roads are optional. A Git history is not. If you cannot explain your own repo, you are not ready for a panel.",
      "Use the internships and entry-level hubs on this site as a filter, not as a guarantee. We are not a school.",
    ],
  },
  {
    slug: "how-to-become-electrical-engineer",
    title: "How to become an electrical engineer",
    summary: "A licensed, school-shaped path in most countries, plus firmware adjacent work.",
    body: [
      "Electrical engineering is not a weekend WordPress career. In Pakistan and many other countries it runs through an accredited degree and, for some roles, a professional body. We are not PEC and we are not a university.",
      "If your goal is firmware or embedded software, you may sit at the border with this site’s software desk. Show hardware labs and code, not only a transcript.",
      "Skip “electrician near me” if you wanted EE. That is a local services query and the wrong niche for this domain.",
    ],
  },
  {
    slug: "certifications",
    title: "Certifications, used sparingly",
    summary: "A cert is a signal. It is not a job.",
    body: [
      "Cloud certs (AWS, Azure, GCP) help when the posting already asked for them. They do not replace a project. Security certs are a minefield of up-sells; prefer names the posting mentioned.",
      "We will not run a fake practice-exam mill. That content is how job sites get a bad reputation and an ads problem.",
      "If a live listing requires a cert, it will say so on the employer page. We do not parse every PDF.",
    ],
  },
  {
    slug: "remote-basics",
    title: "Remote work basics",
    summary: "Overlap hours, equipment, and the apply-form restrictions you cannot see here.",
    body: [
      "Remote OK and Himalayas skew worldwide. Many employers still list US-only after you click. That is why every Rolepaper row sends you outbound.",
      "Say your timezone. Have a quiet mic. Do not fake a US address. It burns you later.",
      "This is not immigration advice. Gulf relocation posts are geo filters, not a promise we can get you a visa.",
    ],
  },
];

export function getCareer(slug: string) {
  return careerPages.find((page) => page.slug === slug);
}

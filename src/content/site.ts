/**
 * Single source of truth for every piece of copy on the site.
 * Claims here are traceable to research/andrei-profile-notes.md.
 */

export const SITE_URL = "https://andreichereches.com";

/** Change this if you would rather publish a personal address than the work one. */
export const EMAIL = "andrei@eforah.nl";

export const person = {
  name: "Andrei Petru Cherecheș",
  shortName: "Andrei Cherecheș",
  role: "AI Builder & Campus Community Organizer",
  location: "Cluj-Napoca, Romania",
  email: EMAIL,
} as const;

export const links = {
  linkedin: "https://linkedin.com/in/andrei-chereches",
  github: "https://github.com/AndreiChereches",
  eforah: "https://eforah.nl",
  estimator: "https://eforah.nl/tools/discovery-estimator",
  utcn: "https://www.utcluj.ro/en/",
  gdg: "https://gdg.community.dev/gdg-on-campus-technical-university-of-cluj-napoca-cluj-napoca-romania/",
  sas: "https://sas.utcluj.ro",
} as const;

export const nav = [
  { label: "Building", href: "#method" },
  { label: "Work", href: "#work" },
  { label: "Campus", href: "#campus" },
  { label: "About", href: "#about" },
] as const;

export const hero = {
  headline: "I build production software with AI,",
  headlineTail: "and help other students learn to build with it.",
  standfirst:
    "Computer Engineering student at the Technical University of Cluj-Napoca. I write software, automation and integrations at Eforah with Claude Code in the loop — and help run the hackathons, workshops and Demo Days where other students ship things of their own.",
  primaryCta: { label: "See what I'm building", href: "#work" },
} as const;

export type Affiliation = {
  org: string;
  detail: string;
  href?: string;
};

export const affiliations: Affiliation[] = [
  { org: "Eforah", detail: "Software engineering & business development", href: links.eforah },
  { org: "UTCN", detail: "Computer Engineering", href: links.utcn },
  { org: "GDG on Campus UTCN", detail: "Volunteer & event co-organizer", href: links.gdg },
  { org: "SAS UTCN", detail: "Incoming board member", href: links.sas },
];

/* ---------------------------------------------------------------- method -- */

export const method = {
  eyebrow: "Working method",
  title: "Building with Claude",
  lead: "Claude is part of how I work, not a side experiment.",
  body: [
    "Nearly everything I ship — at Eforah, in startup work, at hackathons — goes through Claude Code. Not as a snippet generator that I paste from, but as an agent with real access to the project: reading an unfamiliar codebase before touching it, proposing an approach, making the change across files, running the thing, and getting corrected when it’s wrong.",
    "The work has moved. It’s now in the context I hand over and the review I hold the output to. That’s a different skill from prompting, and it’s the part that took longest to learn.",
  ],
  stages: [
    {
      name: "Context",
      detail: "Point it at the codebase, the constraints and the actual business problem before asking for anything.",
    },
    {
      name: "Plan",
      detail: "Agree on an approach and what it will touch. Cheaper to argue here than inside a diff.",
    },
    {
      name: "Build",
      detail: "Implement across the project, not in isolated fragments that someone has to reassemble.",
    },
    {
      name: "Verify",
      detail: "Run it, test it, read the output. Nothing ships because it looked plausible.",
    },
    {
      name: "Review",
      detail: "Read every diff. Delegating the work doesn’t delegate responsibility for it.",
    },
  ],
  loopNote: "Then round again — the second pass is usually where it gets good.",
  caveats: [
    {
      title: "What this is not",
      body: "Dropping a vague prompt in and shipping whatever comes back. Given no context an agent guesses, and a confident guess is the expensive kind of wrong.",
    },
    {
      title: "A distinction I keep",
      body: "Claude is in my build loop. That doesn’t mean Claude is the model running inside a finished product — those are two different claims, and I try not to blur them.",
    },
  ],
} as const;

/* -------------------------------------------------------------- featured -- */

export const featured = {
  eyebrow: "Featured · In production",
  title: "Eforah Discovery Estimator",
  oneLiner:
    "Turns seven answers about a business problem into a defensible price range — and publishes its own arithmetic.",
  body: [
    "Before Eforah scopes anything, someone has to judge what a Software Discovery is worth for that particular client. It’s slow, it’s judgment-heavy, and it happens before there is any commitment on either side. The estimator does that first pass in about two minutes.",
    "A model writes the final range, but it doesn’t get the last word: every result is re-checked server-side against the same rules before anyone sees it. Answering “not sure” widens the range instead of inflating it, which is the behavior I care about most — the tool is allowed to admit what it doesn’t know.",
  ],
  pipeline: [
    {
      step: "Seven answers",
      detail: "Problem type, breadth, systems involved, data, workflow roles, how clearly the solution is defined, risk factors.",
    },
    {
      step: "Complexity read",
      detail: "Regulation, legacy technology and external vendors all move the number.",
    },
    {
      step: "Implementation band",
      detail: "Held internally and never shown — before Discovery it isn’t reliable enough to quote.",
    },
    {
      step: "Discovery is 10% of it",
      detail: "The same commercial model Eforah applies to every engagement, floored at €700.",
    },
    {
      step: "Server-side check",
      detail: "The generated range is validated against those rules before it reaches the page.",
    },
  ],
  role: "Software engineering at Eforah. Built and iterated with Claude and Claude Code.",
  disclaimer: "Published as an indicative range, not a quotation.",
  href: links.estimator,
  linkLabel: "Try the live tool",
} as const;

/* -------------------------------------------------------------- projects -- */

export type Project = {
  title: string;
  meta: string;
  oneLiner: string;
  body: string;
  result?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Dash",
    meta: "Co-founder & lead developer · 2023–24",
    oneLiner: "Dockless e-bike sharing, started by six of us in high school.",
    body: "A whole stack, not a demo: bikes with swappable batteries and anti-theft hardware, and an app to find, unlock and pay for the nearest one. I led the software — platform, web app, and the layer where hardware and software had to actually agree with each other. We took it through FIX Cluj's 2023–24 cohort and pitched it on Imperiul Leilor, the Romanian Shark Tank format.",
    result: "1st place · SAS Demo Day 2023",
    tags: ["Hardware ↔ software", "Platform", "Startup program"],
  },
  {
    title: "DentAI",
    meta: "Built with Andrei Ciocoiu · 2025",
    oneLiner: "Shows a patient what a gingivectomy will look like before they consent to it.",
    body: "Gum contouring is a hard thing to agree to when you can’t picture the result. DentAI simulates the outcome on the patient's own teeth and gums rather than on a generic model, which is the difference between a rendering and a decision. Built over roughly two months alongside coursework.",
    result: "1st of 19 teams · SAS Demo Day 2025",
    tags: ["Applied AI", "Healthcare"],
  },
  {
    title: "UDecide",
    meta: "48-hour hackathon · 2026",
    oneLiner: "Substitution decisions for a football bench, while the match is still running.",
    body: "Built at “U” Hack! Code in Black & White, a 48-hour hackathon run with FC Universitatea Cluj for around 150 students. UDecide pulls live match context and player information into an LLM workflow that suggests who to bring on and when, with the reasoning attached — a bench assistant that shows its work, not an oracle.",
    result: "2nd in its track",
    tags: ["LLM workflow", "Retrieval", "Real-time data"],
  },
  {
    title: "Microgravity research platform",
    meta: "NASA Space Apps, Cluj-Napoca · 2025",
    oneLiner: "Making mouse bone-density research from orbit actually queryable.",
    body: "Research into how bone develops in microgravity sits in datasets that are awkward to search and awkward to process, which quietly limits who can use them. We built a platform to get researchers at that data directly, and kept developing it with mentorship after the event finished.",
    result: "2nd place · local event",
    tags: ["Research data", "Platform"],
  },
];

/* ---------------------------------------------------------------- campus -- */

export const campus = {
  eyebrow: "On campus",
  title: "From builder to community builder",
  lead: "The events I used to enter are the ones I now help put on.",
  hackathon: {
    label: "Co-organizer",
    title: "AI product hackathon, on Lovable",
    teams: "14",
    teamsLabel: "teams",
    size: "4–6",
    sizeLabel: "students per team",
    body: "Fourteen teams, each going from an idea to something that actually ran. The prizes worth having were development credits — the kind you can keep building on after everyone goes home. Watching what people made, and how they made it, is what convinced me most students have not met agentic development yet.",
  },
  sas: {
    label: "Student Entrepreneurship Society · UTCN",
    title: "SAS Demo Day",
    body: "I entered Demo Day as a builder twice and won it twice. For the November 2026 edition I’m on the other side of it, helping organize the competition as an incoming board member.",
    timeline: [
      { year: "2023", event: "Won it with Dash" },
      { year: "2025", event: "Won it again with DentAI" },
      { year: "2026", event: "Helping organize it" },
    ],
  },
  gdg: {
    label: "Member, volunteer & event co-organizer",
    title: "GDG on Campus UTCN",
    body: "UTCN's Google Developer Groups on Campus chapter is a student-led community of around 400 running workshops, technical sessions and hackathons. I help get events out the door and keep people engaged once they’re in the room.",
  },
  rep: {
    label: "Elected · Computer Engineering",
    title: "Student Cohort Representative",
    body: "The channel between my year and the faculty — șef de an. Unglamorous work: getting the right information to the right people quickly, carrying feedback in both directions, and being the person everyone already messages. It’s also why I can reach a cohort in an afternoon.",
  },
} as const;

/* ------------------------------------------------------------ philosophy -- */

export const philosophy = {
  eyebrow: "Point of view",
  title: "Beyond prompting",
  quote: "I assumed most engineering students were already working with agents. I was wrong.",
  body: [
    "Plenty of students use AI every day. Far fewer hand it real project context, let it work across a codebase, test what comes back, and treat it as something to collaborate with rather than something to query.",
    "That gap isn’t about ability. Almost nobody has been shown the other way of working — and it’s hard to discover on your own from a chat box. Closing it is mostly a matter of putting people in a room where it’s happening, which is a thing I already know how to do.",
  ],
} as const;

/* ----------------------------------------------------------- recognition -- */

export type Award = { place: string; event: string; detail: string; year: string };

export const recognition: Award[] = [
  { place: "1st", event: "SAS Demo Day", detail: "DentAI, of 19 teams", year: "2025" },
  { place: "1st", event: "SAS Demo Day", detail: "Dash", year: "2023" },
  { place: "2nd", event: "“U” Hack", detail: "UDecide, in its track", year: "2026" },
  { place: "2nd", event: "NASA Space Apps", detail: "Cluj-Napoca local event", year: "2025" },
];

/* ----------------------------------------------------------------- about -- */

export const about = {
  eyebrow: "About",
  title: "I like the seam where engineering, entrepreneurship and communities meet.",
  paragraphs: [
    "I started Dash in high school — an e-bike sharing network with real hardware, real software and every problem that comes with both. It went through a startup program and a televised pitch, and taught me more than any single course has.",
    "Now I study Computer Engineering at UTCN and write software at Eforah, mostly for firms whose expertise doesn’t scale past the few people holding it: integrations, automation, internal tools, applied AI. Claude Code is in that loop daily.",
    "The rest of my time goes to the student side of the same thing — representing my year, volunteering with GDG on Campus, and helping SAS run the competition I used to enter.",
  ],
  currently: "Currently interested in: agentic development, and how to teach it to the people who would be good at it.",
} as const;

/* --------------------------------------------------------------- contact -- */

export const contact = {
  eyebrow: "Contact",
  title: "Get in touch",
  body: "Building something, organizing a student tech event, or want to argue about agentic development? I’m easy to reach.",
} as const;

export const meta = {
  title: `${person.shortName} — AI Builder & Campus Community Organizer`,
  description:
    "Computer Engineering student at UTCN building production software with Claude and Claude Code at Eforah, co-founder of Dash, and organizer of student AI and startup events in Cluj-Napoca.",
} as const;

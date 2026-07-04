export const SITE_CONFIG = {
  name: "Vaishali Purohit",
  title: "Senior Full-Stack Engineer",
  description:
    "7+ years building scalable AI platforms, enterprise systems, and real-time applications.",
  location: "UK (Open to Remote / Singapore / Japan)",
  email: "vaishalipurohit12@gmail.com",
  linkedin: "https://linkedin.com/in/vaishali-purohit",
  github: "https://github.com/vaishali-purohit",
  resume: "/Vaishali_Purohit_Resume_2026.pdf",
};

export const HIGHLIGHTS = [
  "100k+ users AI platform with 30% latency reduction",
  "Enterprise claim processing efficiency +40%",
  "5,000+ daily real-time ride tracking system",
  "Built 50+ reusable frontend components",
  "Led system design across React, Node.js, and AI pipelines",
];

export const FOCUS_AREAS = [
  "AI Platforms",
  "Scalable Web Systems",
  "Enterprise SaaS",
  "System Design",
  "Frontend Architecture",
];

export const TECH_STACK = [
  "React",
  "TypeScript",
  "Python",
  "Node.js",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "WebSockets",
  "Google Maps",
  "Security Systems",
];

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const SOCIALS = [
  { label: "LinkedIn", href: SITE_CONFIG.linkedin },
  { label: "GitHub", href: SITE_CONFIG.github },
  { label: "Email", href: `mailto:${SITE_CONFIG.email}` },
];

export const METRICS = [
  { value: "100k+", label: "Platform Users" },
  { value: "30%", label: "Latency Reduction" },
  { value: "40%", label: "Workflow Efficiency" },
  { value: "5,000+", label: "Daily Real-time Rides" },
];

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  client: string;
  tech: string[];
  problem: string;
  design: { title: string; items: string[] };
  contributions: string[];
  tradeoffs: string[];
  impact: { metric: string; detail: string }[];
  architectureFlow: string[];
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: "modelia",
    title: "AI Fashion Platform",
    client: "Modelia",
    tagline:
      "SSR/CSR hybrid AI platform serving 100k+ users with real-time image generation workflows.",
    tech: ["React", "TypeScript", "Node.js", "AI/ML", "System Design"],
    problem:
      "The platform needed to support compute-heavy AI image generation while maintaining a responsive UX at 100k+ user scale. High latency risk and unpredictable backend load required a robust frontend architecture.",
    design: {
      title: "Hybrid SSR/CSR with Async Job Queue",
      items: [
        "SSR for initial shell + SEO-critical paths",
        "CSR for interactive AI studio workflows",
        "Node.js API layer for request orchestration",
        "Async queue decoupling AI jobs from user requests",
        "CDN-backed asset delivery for generated media",
      ],
    },
    contributions: [
      "Architected hybrid SSR/CSR system optimized for AI workloads",
      "Built Node.js backend APIs for AI workflow orchestration",
      "Integrated generative pipeline with real-time UI feedback",
      "Built 20+ reusable component library reducing delivery time by 25%",
      "Collaborated with UX/product on Figma handoffs and design tokens",
    ],
    tradeoffs: [
      "Chose SSR for initial loads over full SPA simplicity",
      "Accepted eventual consistency via async jobs to keep UI responsive",
      "Balanced cache TTL to keep generated assets fresh without CDN storms",
    ],
    impact: [
      { metric: "100k+", detail: "active monthly users" },
      { metric: "30%", detail: "response latency decrease" },
      { metric: "25%", detail: "faster feature delivery via component reuse" },
      { metric: "15%", detail: "reduction in UI defect escape rate" },
    ],
    architectureFlow: [
      "Frontend (React SSR/CSR)",
      "API Layer (Node.js)",
      "AI Processing Queue",
      "Model Execution Layer",
      "Storage / CDN",
    ],
  },
  {
    slug: "axa",
    title: "Enterprise Insurance System",
    client: "AXA",
    tagline:
      "Scalable React/TypeScript claim processing UI improving operational efficiency by 40% with 15% fewer UI defects.",
    tech: ["React", "TypeScript", "REST APIs", "Enterprise Systems"],
    problem:
      "Legacy insurance claim workflows suffered from fragmented UI, slow re-renders, and poor form validation at scale. The team needed a maintainable component system and predictable data flow.",
    design: {
      title: "Component-Driven Enterprise UI",
      items: [
        "Shared design system for form, table, and wizard patterns",
        "Type-safe API client layer with centralized error handling",
        "Optimistic UI updates for claim status transitions",
        "Role-based rendering for adjusters vs customers",
        "Automated regression coverage for critical claim flows",
      ],
    },
    contributions: [
      "Designed scalable React + TypeScript UI architecture",
      "Built reusable form and data-table components used across 6 modules",
      "Improved data-fetching reliability with retry + caching strategy",
      "Introduced lazy-loaded routes to reduce bundle churn",
      "Mentored 2 junior engineers on TS best practices and PR reviews",
    ],
    tradeoffs: [
      "Chose TypeScript strictness upfront over short-term velocity",
      "Accepted heavier initial bundle to minimize runtime refactor cost",
      "Picked optimistic updates over simpler request-response model",
    ],
    impact: [
      { metric: "40%", detail: "improvement in claim processing throughput" },
      { metric: "15%", detail: "decrease in UI defect escape rate" },
      { metric: "6", detail: "product modules standardized on shared UI" },
      { metric: "2x", detail: "faster onboarding for new engineers" },
    ],
    architectureFlow: [
      "Browser (React + TS)",
      "BFF / Gateway",
      "Claims Core Services",
      "Policy & Underwriting DB",
      "Audit + Reporting Layer",
    ],
  },
  {
    slug: "deqode",
    title: "Real-time Taxi Platform",
    client: "Deqode",
    tagline:
      "WebSocket-based live tracking system supporting 5,000+ daily rides with sub-second geolocation updates.",
    tech: ["React", "Node.js", "WebSockets", "Google Maps"],
    problem:
      "Riders and drivers needed live map synchronization with acceptable latency across heterogeneous mobile networks. Existing HTTP polling was too slow and bandwidth-heavy.",
    design: {
      title: "WebSocket Fan-Out with Geo Indexing",
      items: [
        "Persistent WebSocket connections per active session",
        "Redis pub/sub to broadcast location updates to riders",
        "Batched geohash indexing for fast map tile queries",
        "Heartbeat + reconnect logic for flaky mobile connections",
        "Google Maps SDK custom markers and live trajectories",
      ],
    },
    contributions: [
      "Implemented WebSocket server with room-based broadcasting",
      "Built live map UI with React + Google Maps custom overlays",
      "Optimized payload size via protobuf over websocket frames",
      "Added client-side reconnect with exponential backoff",
      "Reduced dropped ride events by 20% with queue replay",
    ],
    tradeoffs: [
      "Accepted higher server memory footprint for connection state",
      "Chose room-based routing for predictable scaling before full microservices",
      "Lowered update frequency during idle to save client battery",
    ],
    impact: [
      { metric: "5,000+", detail: "daily active rides supported" },
      { metric: "<1s", detail: "average location latency" },
      { metric: "20%", detail: "fewer dropped location events" },
      { metric: "3x", detail: "reduction in API bandwidth usage" },
    ],
    architectureFlow: [
      "Driver App",
      "WebSocket Gateway",
      "Redis Pub/Sub",
      "Rider App (React + Maps)",
      "Trip History DB",
    ],
  },
  {
    slug: "miniorange",
    title: "Enterprise Security Plugins",
    client: "miniOrange",
    tagline:
      "Authentication and security plugins improving enterprise adoption by 30% across WordPress and SSO ecosystems.",
    tech: ["WordPress", "Security Systems", "SSO", "Enterprise Plugins"],
    problem:
      "Enterprises struggled with fragmented authentication across SaaS and on-prem tools. The plugin suite needed stronger default security, better UX, and compliance with corporate identity providers.",
    design: {
      title: "Plug-in Security Architecture",
      items: [
        "Extendable auth provider pattern for SSO/MFA/SCIM",
        "Secure token handling with short-lived access tokens",
        "Admin UX for onboarding corporate IdPs without engineering support",
        "Hardened input validation and CSP-aligned rendering",
        "Audit logging for security and compliance requirements",
      ],
    },
    contributions: [
      "Designed extensible plugin architecture used across 8 security modules",
      "Implemented SSO/SAML/OAuth flows with standardized provider interfaces",
      "Improved admin onboarding flow reducing support tickets by 30%",
      "Introduced automated security regression tests for common exploit vectors",
      "Worked with InfoSec to align plugin behavior with enterprise policies",
    ],
    tradeoffs: [
      "Chose extensibility over strict opinionated defaults",
      "Accepted larger plugin bundle to keep wizard UX inside WordPress admin",
      "Preferred defensive validation over trusting upstream endpoints",
    ],
    impact: [
      { metric: "30%", detail: "increase in enterprise plugin adoption" },
      { metric: "8", detail: "security modules on shared architecture" },
      { metric: "25%", detail: "reduction in onboarding support tickets" },
      { metric: "4", detail: "common exploit vectors covered by regression tests" },
    ],
    architectureFlow: [
      "Enterprise IdP",
      "miniOrange Plugin Core",
      "Security Modules (SSO/MFA/SCIM)",
      "App / SSO Target",
      "Audit + Compliance Logs",
    ],
  },
  {
    slug: "msc-eo-ai",
    title: "Adaptive Onboard AI for EO Data Prioritization",
    client: "MSc Research — Earth Observation Systems",
    tagline:
      "Ongoing research project exploring lightweight onboard AI for prioritizing Earth observation satellite imagery downlinks using the Adaptive Scientific Value Function (ASVF) with a mandatory safety gate.",
    tech: [
      "Python",
      "PyTorch",
      "MobileNetV2",
      "FastAPI",
      "React",
      "Rasterio",
      "Skyfield",
      "D3.js",
    ],
    problem:
      "Earth observation satellites generate more imagery than they can transmit given limited onboard memory, power, and intermittent ground-station contact. Conventional 'downlink everything' approaches waste scarce bandwidth and delay access to time-critical information such as deforestation and wildfire detection.",
    design: {
      title: "Adaptive Scientific Value Function (ASVF) with Safety Gate",
      items: [
        "Onboard lightweight CNN (MobileNetV2) for real-time tile scoring",
        "Multi-signal ASVF combining detection confidence, event severity, and live resource state",
        "Mandatory safety gate ensuring critical alerts always transmit",
        "Skyfield-based orbital simulation for realistic communication windows",
        "Interactive dashboard for visualizing forest change, ASVF scores, and transmission decisions",
      ],
    },
    contributions: [
      "Designed the ASVF scoring framework fusing multi-signal environmental event detection",
      "Developed lightweight CNN pipeline on PyTorch for onboard imagery prioritization",
      "Built FastAPI backend for model inference, ASVF ranking, and resource simulation",
      "Implemented React + D3.js dashboard for live visualization of satellite resource states",
      "Integrated orbital simulation using Skyfield for realistic communication window modeling",
    ],
    tradeoffs: [
      "Accepted reduced model capacity for onboard deployment versus cloud accuracy",
      "Chose transparent ASVF score over opaque black-box prioritization to ensure auditability",
      "Lowered update frequency to conserve satellite power while maintaining timely alerts",
    ],
    impact: [
      { metric: "Ongoing", detail: "MSc research project" },
      { metric: "Objective", detail: "Reduce time-critical deforestation and wildfire data latency" },
      { metric: "Beneficiaries", detail: "ESA, NASA, satellite system engineers, and environmental researchers" },
      { metric: "Novelty", detail: "First framework to fuse environmental signals with live resource constraints in one auditable score" },
    ],
    architectureFlow: [
      "Satellite Imagery",
      "Onboard AI (MobileNetV2 / PyTorch)",
      "ASVF Scoring Engine",
      "Safety Gate / Prioritization",
      "Downlink Selection + Ground Station",
    ],
  },
];

export default [
  {
    slug: "workdesk",
    color: "#149056",
    name: "WorkDesk",
    category: "Daily reporting & HRIS",
    tagline: "Your workday, all in one desk.",
    summary:
      "Daily reporting and HRIS for small teams. Employees log their work, clock in, request leave or overtime and chat with the team, or just type a request to the built-in AI assistant. Managers see progress, blockers and attendance without chasing a spreadsheet.",
    features: [
      "Daily reports per project, with progress and blockers",
      "AI command bar: ask questions or prepare actions to confirm",
      "Dashboard and Gantt timeline calculated from the reports",
      "Attendance, leave, overtime and trips with approval flow",
    ],
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Supabase", "Gemini"],
    url: "https://workdesk.mujahidin.my.id",
  },
  {
    slug: "stockdesk",
    color: "#1273e2",
    name: "StockDesk",
    category: "Inventory & warehouse",
    tagline: "Your warehouse and inventory, perfectly in sync.",
    summary:
      "Inventory and warehouse management for retail, distributors and small fulfillment warehouses. Every unit moves through an append-only ledger, from the receiving dock to the delivery order, and a read-only AI assistant answers questions about the stock in plain language.",
    features: [
      "Stock per warehouse, bin and batch, with nested units",
      "FEFO/FIFO picking and blind stock opname",
      "FIFO and moving-average valuation as of any date",
      "AI assistant: ask about stock and orders, jump to the right page",
    ],
    stack: ["React 19", "TypeScript", "Supabase", "Gemini"],
    url: "https://stockdesk.mujahidin.my.id",
  },
  {
    slug: "sopi",
    color: "#ec6a26",
    name: "Sopi",
    category: "Omnichannel retail sales",
    tagline: "Online store, cashier and B2B sales, one data.",
    summary:
      "One sales system for multi-outlet retail. The online store, the in-store POS and the B2B sales team share one catalog, one stock count, one price logic and one customer base.",
    features: [
      "Online store with outlet pickup or delivery, priced by the server",
      "POS shifts, held carts, supervisor PIN and member points",
      "Quotation to invoice, with a credit gate and tiered approval",
      "Price books, stackable promos and stock per outlet",
    ],
    stack: ["Vue 3", "Pinia", "TanStack Query", "Supabase"],
    url: "https://sopi.mujahidin.my.id",
  },
  {
    slug: "mojepict",
    color: "#6a4cf5",
    name: "Mojepict",
    category: "Web toolbox",
    tagline: "Free web tools, no strings attached.",
    summary:
      "A privacy-first toolbox of 100+ tools for images, PDFs, text, colors and code. Files are processed in the browser, with no sign-up and no ads.",
    features: [
      "100+ tools across 8 categories, searchable with ⌘K",
      "Local-first: files never leave the device",
      "Installable PWA with offline support",
      "English and Bahasa Indonesia, light and dark",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "onnxruntime-web"],
    url: "https://mojepict.vercel.app",
  },
  {
    slug: "mekar-ayu",
    color: "#e0457b",
    name: "Mekar Ayu",
    category: "Cycle tracker",
    tagline: "A private menstrual cycle journal.",
    summary:
      "A cycle tracker that runs entirely on the user's device. No account, no server, no tracking: all data stays in the browser.",
    features: [
      "Period and fertile window predictions",
      "Daily log for flow, symptoms and mood",
      "Mood and cycle statistics",
      "Export to PDF and Excel",
    ],
    stack: ["React", "TypeScript", "Dexie", "PWA"],
    url: "https://mekar-ayu.vercel.app",
  },
  {
    slug: "ruang-materi",
    color: "#76992f",
    name: "Ruang Materi",
    category: "Learning platform",
    tagline: "Learn to code, step by step.",
    summary:
      "Free programming courses in Bahasa Indonesia, built from PowerPoint decks. Every course is split into chapters to read in the browser, with quizzes, code exercises, flashcards and a final exam. No download, no sign-up required.",
    features: [
      "17 courses and 3 roadmaps, from HTML to Node.js and SQL",
      "Code exercises run and checked in the browser",
      "Spaced-repetition flashcards and server-graded exams",
      "Verifiable certificates, installable PWA with offline mode",
    ],
    stack: ["Astro", "React 19", "Supabase", "PWA"],
    url: "https://ruang-materi.mujahidin.my.id",
  },
];

export const upcoming = [
  {
    name: "AI Docs Assistant",
    category: "RAG & tool calling",
    summary:
      "Chat with your PDFs and notes. Answers come only from the documents, stream token by token and cite the exact chunk they used.",
    stack: ["Next.js", "pgvector", "Claude", "GPT"],
  },
  {
    name: "CyberVerse Corp",
    category: "3D AI agent office",
    summary:
      "A 3D anime office where 50 AI agents plan, build and review work together, with a Kanban board, approvals and all-hands meetings.",
    stack: ["React Three Fiber", "FastAPI", "LiteLLM", "Ollama"],
  },
];

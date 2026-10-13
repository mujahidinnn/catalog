export default [
  {
    slug: "workdesk",
    color: "#149056",
    name: "WorkDesk",
    category: "Daily reporting & HRIS",
    tagline: "Your workday, all in one desk.",
    summary:
      "Daily reporting and HRIS for small teams. Employees log their work, clock in, request leave or overtime and chat with the team. Managers see progress, blockers and attendance without chasing a spreadsheet.",
    features: [
      "Daily reports per project, with progress and blockers",
      "Dashboard and Gantt timeline calculated from the reports",
      "Attendance with late flags and period locking",
      "Leave, overtime and business trips with approval flow",
    ],
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Supabase"],
    url: "https://workdesk.mujahidin.my.id",
  },
  {
    slug: "stockdesk",
    color: "#1273e2",
    name: "StockDesk",
    category: "Inventory & warehouse",
    tagline: "Your warehouse and inventory, perfectly in sync.",
    summary:
      "Inventory and warehouse management for retail, distributors and small fulfillment warehouses. Every unit moves through an append-only ledger, from the receiving dock to the delivery order.",
    features: [
      "Stock per warehouse, bin and batch, with nested units",
      "FEFO/FIFO picking and blind stock opname",
      "FIFO and moving-average valuation as of any date",
      "Public REST API with signed webhooks",
    ],
    stack: ["React 19", "TypeScript", "Supabase", "Recharts"],
    url: "https://stockdesk.mujahidin.my.id",
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
];

export const upcoming = [
  {
    name: "Sopi",
    category: "POS & sales management",
    summary:
      "Cashier, quotations, orders, invoices, receivables, promos, members, returns, commission and outlet stock in one place.",
    stack: ["Vue 3", "Pinia", "TanStack Query", "Supabase"],
  },
  {
    name: "Ruang Materi",
    category: "Learning platform",
    summary:
      "Turns PowerPoint decks into interactive courses with chapters, quizzes, flashcards, exams, streaks and badges. Installable as an offline PWA.",
    stack: ["Next.js", "Supabase", "Gemini", "PWA"],
  },
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

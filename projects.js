// ============================================================
//  PROJECTS DATA — edit this file to add/change/delete projects
// ============================================================
//
//  HOW TO ADD A PROJECT:
//  1. Copy one of the objects below and add it to the correct track array
//  2. Fill in: id, name, desc, bullets, tags, track
//  3. Optional: add media (see MEDIA section below)
//
//  HOW TO DELETE A PROJECT:
//  - Remove the entire object from the array
//
//  HOW TO EDIT A PROJECT:
//  - Find it by name, change any field
//
//  HOW TO CHANGE PINNED PROJECTS (homepage):
//  - Edit the PINNED array at the bottom of this file
//  - Use the project's `id` string
//  - Keep exactly 4 ids in the array
//
//  MEDIA OPTIONS:
//  - No media:          media: null
//  - YouTube video:     media: { type: "youtube", url: "https://youtu.be/XXXX", label: "Demo" }
//  - Autoplay gif/mp4:  media: { type: "video",   url: "assets/demo.mp4",       label: "Demo" }
//  - Screenshots:       media: { type: "images",  urls: ["assets/a.png", "assets/b.png"], labels: ["Plot","Results"] }
//
//  TAGS:
//  - First tag gets the colored accent based on track
//  - Rest are neutral gray
//
// ============================================================

const PROJECTS = {

  ml: [
    {
      id: "graphrag",
      name: "SEC Knowledge Graph RAG",
      desc: "Multi-hop reasoning over SEC 10-K filings via LlamaIndex + Neo4j with hybrid retrieval",
      bullets: [
        "Built production-ready GraphRAG over 10-K filings — entity extraction via async LLM pipeline, stored in Neo4j AuraDB",
        "Hybrid vector-and-graph retrieval with context fencing (temp=0.0) to eliminate hallucinations",
        "Served structured sub-graphs to Llama-3.3-70B via Groq for compliance and supply chain risk queries"
      ],
      tags: ["GraphRAG", "LLM", "Neo4j", "Groq"],
      media: { type: "youtube", url: "https://youtu.be/PLACEHOLDER", label: "Demo video" }
    },
    {
      id: "word2vec",
      name: "Word2Vec for Author Attribution",
      desc: "Skip-gram SGNS from scratch in PyTorch — verification and clustering across unseen authors",
      bullets: [
        "Implemented Skip-gram with negative sampling — no pretrained models, trained on multi-author corpora",
        "TF-IDF weighted embedding aggregation for author-level representations",
        "Evaluated on MRR (verification) and Hungarian-matched accuracy (clustering) across unseen authors"
      ],
      tags: ["NLP", "PyTorch", "KMeans++", "MRR"],
      media: { type: "images", urls: ["assets/word2vec_tsne.png", "assets/word2vec_mrr.png"], labels: ["t-SNE plot", "MRR results"] }
    },
    {
      id: "lime-shap",
      name: "Credit Risk Explainability",
      desc: "LIME & SHAP on XGBoost classifier — fairness violations in black-box credit risk models",
      bullets: [
        "XGBoost on UCI German Credit — 78%+ accuracy with full decision transparency",
        "LIME for instance-level, SHAP for global attribution — compared both frameworks",
        "Identified demographic feature dominance invisible to accuracy metrics alone"
      ],
      tags: ["xAI", "SHAP", "XGBoost", "Fairness"],
      media: { type: "images", urls: ["assets/shap_summary.png", "assets/lime_exp.png"], labels: ["SHAP summary", "LIME explanation"] }
    },
    {
      id: "forest-fire",
      name: "Forest Fire Route Blocking",
      desc: "Stochastic influence minimisation — submodularity, greedy approx, Monte Carlo at 150k nodes",
      bullets: [
        "Modelled wildfire containment as stochastic influence minimisation on directed graphs",
        "Proved NP-hardness via Min-Cut reduction; analysed submodularity for approximation guarantees",
        "Scaled to 150k+ node graphs within 60-minute budget with incremental output writes"
      ],
      tags: ["Graph ML", "Optimization", "Monte Carlo"],
      media: null
    }
  ],

  sde: [
    {
      id: "interpreter",
      name: "Toy Language Interpreter",
      desc: "Full-pipeline OCaml interpreter — lexer, recursive descent parser, unification, backtracking",
      bullets: [
        "Engineered from scratch — lexical analysis, recursive descent parsing, AST construction",
        "Implemented unification algorithm and chronological backtracking for Horn clause resolution"
      ],
      tags: ["OCaml", "Compilers", "PL"],
      media: { type: "images", urls: ["assets/interp_repl.png"], labels: ["REPL demo"] }
    },
    {
      id: "swap-space",
      name: "Swap Space & Page Replacement",
      desc: "xv6 kernel with disk-backed swap, clock replacement policy, and demand paging",
      bullets: [
        "Extended xv6 with disk-backed swap and demand paging under physical memory pressure",
        "Second-chance (clock) replacement using PTE accessed bits to approximate LRU",
        "Page fault trap dispatch to lazy-load swapped pages; swap-slot metadata encoded in invalid PTEs"
      ],
      tags: ["OS", "C", "xv6", "Kernel"],
      media: null
    },
    {
      id: "udp-transfer",
      name: "Reliable UDP File Transfer",
      desc: "TCP-equivalent transport over UDP — SACK, fast retransmit, Reno congestion control",
      bullets: [
        "Sliding window flow control, SACK-based loss recovery, adaptive RTO (Jacobson/Karels)",
        "Reno congestion control — slow start, congestion avoidance, fast recovery",
        "Evaluated throughput, link utilisation, and Jain's fairness index in Mininet"
      ],
      tags: ["Networks", "C", "Mininet"],
      media: null
    },
    {
      id: "spreadsheet",
      name: "Terminal Spreadsheet",
      desc: "CLI tool with formula parsing, dependency tracking, topological sort — 60% latency reduction",
      bullets: [
        "Interactive CLI/GUI with formula parsing and real-time updates for 500+ cells",
        "Optimised recompute via topological sort — 60% latency reduction"
      ],
      tags: ["Systems", "DAG", "C"],
      media: { type: "video", url: "assets/spreadsheet_demo.mp4", label: "Screen recording" }
    },
    {
      id: "game-bot",
      name: "Game-Playing AI Bot",
      desc: "Minimax + alpha-beta pruning + iterative deepening for a zero-sum adversarial game",
      bullets: [
        "Anytime behaviour via iterative deepening — always returns best move found before timeout",
        "Move ordering heuristics to maximise alpha-beta cutoffs for deeper ply search",
        "Competed in class-wide knockout tournament evaluated on win/loss and margin score"
      ],
      tags: ["C++", "AI", "Search"],
      media: null
    }
  ],

  finance: [
    {
      id: "arb-bot",
      name: "CEX/DEX Arbitrage Bot",
      desc: "Live arbitrage across Binance + Uniswap v2 with real-time WebSocket feeds and slippage modelling",
      bullets: [
        "Binance WebSocket for CEX price feeds + Uniswap v2 via Web3.py for DEX pricing",
        "Modelled slippage, gas costs, and profitability thresholds before execution",
        "Live terminal dashboard with P&L tracking and trade log"
      ],
      tags: ["Crypto", "Arbitrage", "Web3", "WebSocket"],
      media: { type: "youtube", url: "https://youtu.be/PLACEHOLDER", label: "Live terminal demo" }
    },
    {
      id: "order-book",
      name: "Low-Latency Order Book Engine",
      desc: "C++ price-time priority matching engine — lock-free vs mutex benchmarks under sustained load",
      bullets: [
        "Price-time priority matching with concurrent order insert, cancel, and match",
        "Benchmarked mutex vs lock-free (std::atomic CAS) — Xns median latency, X× improvement",
        "Stress-tested under sustained synthetic order stream using std::chrono profiling"
      ],
      tags: ["C++", "HFT", "Concurrency", "Lock-free"],
      media: null
    },
    {
      id: "graphrag-fin",
      name: "SEC Knowledge Graph RAG",
      desc: "Financial document intelligence — entity extraction from 10-K filings for supply chain risk",
      bullets: [
        "Extracted company, supplier, and regulatory entities from SEC filings via async LLM pipeline",
        "Multi-hop graph queries for supply chain exposure and regulatory risk analysis",
        "Hybrid retrieval with hallucination elimination via strict context fencing"
      ],
      tags: ["FinNLP", "RAG", "Neo4j"],
      media: { type: "youtube", url: "https://youtu.be/PLACEHOLDER", label: "Demo video" }
    },
    {
      id: "lime-shap-fin",
      name: "Credit Risk Explainability",
      desc: "XGBoost + SHAP on German Credit dataset — fairness analysis for risk model transparency",
      bullets: [
        "XGBoost classifier on UCI German Credit — 78%+ accuracy",
        "SHAP summary plots revealed demographic feature dominance despite comparable alternatives",
        "Demonstrates how accurate models can encode fairness violations invisible to standard metrics"
      ],
      tags: ["Risk", "ML", "SHAP", "Fairness"],
      media: { type: "images", urls: ["assets/shap_summary.png"], labels: ["SHAP summary"] }
    }
  ]

};

// ============================================================
//  PINNED PROJECTS — shown on homepage (exactly 4 ids)
//  Use the `id` field from any project above
// ============================================================
const PINNED = ["graphrag", "interpreter", "arb-bot", "word2vec"];

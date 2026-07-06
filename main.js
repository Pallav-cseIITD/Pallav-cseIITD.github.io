// ── State ──────────────────────────────────────────────────
let currentTrack = null;

// ── Track config ───────────────────────────────────────────
const TRACK_CONFIG = {
  ml:      { label: "AI / ML Projects",       tagClass: "tag-ml"  },
  sde:     { label: "Systems / SDE Projects",  tagClass: "tag-sde" },
  finance: { label: "Quant / Finance Projects", tagClass: "tag-fin" }
};

// ── Icons (inline SVG strings) ──────────────────────────────
const ICONS = {
  graphrag:    `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="12" y1="7" x2="5" y2="17"/><line x1="12" y1="7" x2="19" y2="17"/><line x1="5" y1="19" x2="19" y2="19"/></svg>`,
  word2vec:    `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  "lime-shap": `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  "forest-fire":`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/></svg>`,
  interpreter: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  "swap-space":`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  "udp-transfer":`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`,
  spreadsheet: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>`,
  "game-bot":  `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  "arb-bot":   `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/></svg>`,
  "order-book":`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  "graphrag-fin":`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="12" y1="7" x2="5" y2="17"/><line x1="12" y1="7" x2="19" y2="17"/></svg>`,
  "lime-shap-fin":`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
};

const ICON_BG = {
  ml:      "var(--ml-bg)",
  sde:     "var(--sde-bg)",
  finance: "var(--fin-bg)"
};

const ICON_COLOR = {
  ml:      "var(--ml-text)",
  sde:     "var(--sde-text)",
  finance: "var(--fin-text)"
};

// ── Navigation ──────────────────────────────────────────────
function goHome() {
  showPage("home");
  currentTrack = null;
  closeDD();
}

function goTrack(track) {
  currentTrack = track;
  renderProjectsPage(track);
  showPage("projects");
  closeDD();
}

function showPage(name) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("pg-" + name).classList.add("active");
  window.scrollTo(0, 0);
}

// ── Dropdown ────────────────────────────────────────────────
function toggleDD(e) {
  if (e) e.stopPropagation();
  document.getElementById("dd-menu").classList.toggle("open");
}

function closeDD() {
  document.getElementById("dd-menu").classList.remove("open");
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) closeDD();
});

// ── Render pinned projects on homepage ──────────────────────
function renderPinned() {
  const grid = document.getElementById("pin-grid");
  if (!grid) return;

  // Build a flat lookup of all projects by id
  const lookup = {};
  Object.entries(PROJECTS).forEach(([track, list]) => {
    list.forEach(p => { lookup[p.id] = { ...p, track }; });
  });

  grid.innerHTML = PINNED.map(id => {
    const p = lookup[id];
    if (!p) return "";
    const icon = ICONS[p.id] || ICONS["word2vec"];
    const cfg = TRACK_CONFIG[p.track];
    const firstTag = p.tags[0];
    const tagClass = cfg ? cfg.tagClass : "";
    return `
      <div class="pin-card" onclick="goTrack('${p.track}')">
        <div class="pin-icon" style="background:${ICON_BG[p.track]};color:${ICON_COLOR[p.track]}">${icon}</div>
        <div class="pin-name">${p.name}</div>
        <div class="pin-desc">${p.desc}</div>
        <div class="pin-tags">
          <span class="tag ${tagClass}">${firstTag}</span>
        </div>
      </div>`;
  }).join("");
}

// ── Render project list page ─────────────────────────────────
function renderProjectsPage(track) {
  const cfg = TRACK_CONFIG[track];
  document.getElementById("proj-page-title").textContent = cfg.label;

  const list = PROJECTS[track] || [];
  const container = document.getElementById("proj-list");

  container.innerHTML = list.map((p, i) => {
    const firstTagClass = cfg.tagClass;
    const tagsHtml = p.tags.map((t, ti) =>
      `<span class="tag ${ti === 0 ? firstTagClass : ""}">${t}</span>`
    ).join("");

    const mediaHtml = buildMedia(p.media);
    const bulletsHtml = p.bullets.map(b => `<li>${b}</li>`).join("");

    return `
      <div class="proj-card" id="proj-${track}-${i}" onclick="toggleProj(this)">
        <div class="proj-card-body">
          <div class="proj-card-main">
            <div class="proj-card-name">${p.name}</div>
            <div class="proj-card-desc">${p.desc}</div>
            <div class="proj-card-tags">${tagsHtml}</div>
          </div>
          <svg class="chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
        <div class="proj-detail">
          <div class="proj-detail-inner">
            <ul class="proj-bullets">${bulletsHtml}</ul>
            ${mediaHtml}
          </div>
        </div>
      </div>`;
  }).join("");
}

// ── Build media HTML ─────────────────────────────────────────
function buildMedia(media) {
  if (!media) return "";

  if (media.type === "youtube") {
    // Extract video ID from URL
    const match = media.url.match(/(?:youtu\.be\/|v=)([^&?/]+)/);
    const vid = match ? match[1] : null;
    const thumb = vid ? `https://img.youtube.com/vi/${vid}/hqdefault.jpg` : null;
    const thumbStyle = thumb ? `style="background-image:url('${thumb}');background-size:cover;background-position:center"` : "";

    return `
      <div class="media-box">
        <div class="media-thumb" ${thumbStyle} onclick="openYT('${media.url}', event)">
          <div class="play-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <div class="media-label">${media.label || "Watch demo"}</div>
        </div>
      </div>`;
  }

  if (media.type === "video") {
    return `
      <div class="media-box">
        <video autoplay muted loop playsinline style="width:100%;display:block;border-radius:8px">
          <source src="${media.url}" type="video/mp4">
        </video>
      </div>`;
  }

  if (media.type === "images") {
    const cols = media.urls.length === 1 ? "img-grid-1" : "";
    const imgs = media.urls.map((url, i) => {
      const label = (media.labels && media.labels[i]) ? media.labels[i] : "";
      // Show placeholder if url looks like a template path, real img otherwise
      const isPlaceholder = url.includes("PLACEHOLDER") || !url;
      if (isPlaceholder) {
        return `<div class="img-placeholder">${label}</div>`;
      }
      return `<img class="media-img" src="${url}" alt="${label}" loading="lazy" />`;
    }).join("");
    return `<div class="media-box"><div class="img-grid ${cols}" style="padding:6px">${imgs}</div></div>`;
  }

  return "";
}

function openYT(url, e) {
  e.stopPropagation();
  window.open(url, "_blank");
}

// ── Toggle project card open/close ───────────────────────────
function toggleProj(card) {
  const isOpen = card.classList.contains("open");
  // Close all
  document.querySelectorAll(".proj-card.open").forEach(c => c.classList.remove("open"));
  // Open this one if it was closed
  if (!isOpen) card.classList.add("open");
}

// ── Init ─────────────────────────────────────────────────────
renderPinned();

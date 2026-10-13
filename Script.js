
const apps = [
  {
    name: "WhatsApp",
    category: "Social",
    description: "La xiriir asxaabtaada iyo qoyskaaga.",
    icon: "💬",
    url: "https://www.whatsapp.com/"
  },
  {
    name: "Instagram",
    category: "Social",
    description: "La wadaag sawirro iyo muuqaallo.",
    icon: "📸",
    url: "https://www.instagram.com/"
  },
  {
    name: "YouTube",
    category: "Media",
    description: "Daawo muuqaallo iyo casharro.",
    icon: "▶️",
    url: "https://www.youtube.com/"
  },
  {
    name: "Telegram",
    category: "Social",
    description: "Farriimo iyo kooxo kula xiriir.",
    icon: "✈️",
    url: "https://telegram.org/"
  },
  {
    name: "ChatGPT",
    category: "AI",
    description: "Ka caawi waxbarashada, qoraalka iyo fikradaha.",
    icon: "🤖",
    url: "https://chatgpt.com/"
  },
  {
    name: "Roblox",
    category: "Games",
    description: "Sahami oo ciyaar ciyaaro kala duwan.",
    icon: "🎮",
    url: "https://www.roblox.com/"
  }
];

const software = [
  {
    name: "Visual Studio Code",
    description: "Qalab lagu qoro laguna horumariyo code.",
    icon: "💻",
    url: "https://code.visualstudio.com/"
  },
  {
    name: "VLC Media Player",
    description: "Daawo muuqaallo, dhegayso codad.",
    icon: "🎬",
    url: "https://www.videolan.org/vlc/"
  },
  {
    name: "7-Zip",
    description: "Fur oo samee faylal la isku ururiyey.",
    icon: "🗂️",
    url: "https://www.7-zip.org/"
  },
  {
    name: "GIMP",
    description: "Wax ka beddel sawirrada.",
    icon: "🖼️",
    url: "https://www.gimp.org/"
  }
];

const stores = [
  {
    name: "Google Play",
    description: "Ka raadi apps-ka Android.",
    icon: "📱",
    url: "https://play.google.com/store"
  },
  {
    name: "Apple App Store",
    description: "Ka raadi apps-ka iPhone iyo iPad.",
    icon: "🍎",
    url: "https://www.apple.com/app-store/"
  }
];

const $ = (selector) => document.querySelector(selector);

const appCards = $("#appCards");
const softwareCards = $("#softwareCards");
const storeCards = $("#storeCards");
const search = $("#search");
const filters = $("#filters");
const empty = $("#empty");
const appCount = $("#appCount");

function makeCard(item) {
  const card = document.createElement("article");
  card.className = "card";

  const icon = document.createElement("div");
  icon.className = "app-icon";
  icon.textContent = item.icon;

  const title = document.createElement("h3");
  title.textContent = item.name;

  const description = document.createElement("p");
  description.textContent = item.description;

  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = item.category || "Website";

  const link = document.createElement("a");
  link.className = "btn primary";
  link.href = item.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Open ↗";

  card.append(icon, title, description, tag, link);
  return card;
}

function renderList(container, items) {
  if (!container) return;

  container.replaceChildren();

  items.forEach((item) => {
    container.appendChild(makeCard(item));
  });
}

function renderApps() {
  if (!appCards) return;

  const term = (search?.value || "").trim().toLowerCase();
  const activeFilter =
    filters?.querySelector(".active")?.dataset.filter || "All";

  const filteredApps = apps.filter((app) => {
    const matchesSearch = [
      app.name,
      app.category,
      app.description
    ].join(" ").toLowerCase().includes(term);

    const matchesCategory =
      activeFilter === "All" || app.category === activeFilter;

    return matchesSearch && matchesCategory;
  });

  renderList(appCards, filteredApps);

  if (appCount) {
    appCount.textContent = String(filteredApps.length);
  }

  if (empty) {
    empty.classList.toggle("hidden", filteredApps.length > 0);
  }
}

function setupFilters() {
  if (!filters) return;

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    filters.querySelectorAll("[data-filter]").forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    renderApps();
  });
}

function setupMenu() {
  const menuBtn = $("#menuBtn");
  const nav = $("#nav");

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

function init() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  renderApps();
  renderList(softwareCards, software);
  renderList(storeCards, stores);
  setupFilters();
  setupMenu();

  if (search) {
    search.addEventListener("input", renderApps);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

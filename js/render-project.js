/* ==================================================
   Render isi halaman detail project (project.html)
   berdasarkan ?slug=... di URL
   Ambil data dari PROJECTS (js/projects-data.js)
================================================== */

/* --------------------------------------------------
   Alias nama -> slug Simple Icons
   (dipakai kalau nama di data beda dari slug aslinya)
   Daftar lengkap slug: https://simpleicons.org/
-------------------------------------------------- */
const TOOL_ICON_ALIASES = {
  html: "html5",
  css: "css3",
  node: "nodedotjs",
  nodejs: "nodedotjs",
  react: "react",
  vue: "vuedotjs",

  // Mobile
  flutter: "flutter",
  dart: "dart",

  // Backend / Database
  firebase: "firebase",
  laravel: "laravel",

  // CSS / Framework
  bootstrap: "bootstrap",
  tailwind: "tailwindcss",

  // Design
  canva: "canva",
  xd: "adobexd",
  adobexd: "adobexd",
  photoshop: "adobephotoshop",
  illustrator: "adobeillustrator",
  premierepro: "adobepremierepro",
  aftereffects: "adobeaftereffects",

  // JavaScript Framework
  nextjs: "nextdotjs",

  // .NET
  dot_net: "dotnet",
  net: "dotnet",
  csharp: "csharp",

  // Programming Language
  cplusplus: "cplusplus",
  c: "c",
};

/* Ubah nama tool jadi URL logo (Simple Icons CDN, otomatis warna asli brand) */
function getToolIconUrl(name) {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const slug = TOOL_ICON_ALIASES[key] || key;
  return `https://cdn.simpleicons.org/${slug}`;
}

/* Bangun HTML badge untuk satu tool (logo + nama), fallback ke teks polos kalau logo tidak ketemu */
function renderToolBadge(name) {
  const iconUrl = getToolIconUrl(name);
  return `
    <span class="tool-badge">
      <img
        src="${iconUrl}"
        alt="${name}"
        class="tool-icon"
        onerror="this.remove();"
        loading="lazy"
      />
      <span class="tool-name">${name}</span>
    </span>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const project = typeof PROJECTS !== "undefined" ? PROJECTS.find((p) => p.slug === slug) : null;

  // Kalau slug tidak ditemukan / tidak valid, balik ke index
  if (!project) {
    window.location.href = "index.html";
    return;
  }

  document.title = project.title + " — adty";

  document.getElementById("project-title").textContent = project.title;

  const metaParts = [];
  if (project.year) metaParts.push(`Year: ${project.year}`);
  if (project.role) metaParts.push(`Role: ${project.role}`);
  let metaHtml = metaParts.join("<br /><br />");
  if (project.prototypeUrl) {
    metaHtml += `<br /><br />Prototype <a href="${project.prototypeUrl}" target="_blank">View</a>`;
  }
  document.getElementById("project-meta").innerHTML = metaHtml ? `<p>${metaHtml}</p>` : "";

  // Render logo tools/software (Figma, PHP, MySQL, dst)
  const toolsWrap = document.getElementById("project-tools");
  if (toolsWrap) {
    const tools = Array.isArray(project.tools) ? project.tools : [];
    toolsWrap.innerHTML = tools.map(renderToolBadge).join("");
  }

  document.getElementById("project-description").textContent = project.description;

  const imagesWrap = document.getElementById("project-images");
  imagesWrap.innerHTML = project.images
    .map(
      (src) => `
      <div class="span12">
        <div class="team-img">
          <img src="${src}" alt="${project.title}" />
        </div>
      </div>`,
    )
    .join("");
});

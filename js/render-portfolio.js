/* ==================================================
   Render grid project di index.html
   Ambil data dari PROJECTS (js/projects-data.js)
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("projects");
  if (!list || typeof PROJECTS === "undefined") return;

  list.innerHTML = PROJECTS.map(
    (p) => `
    <li class="item-project">
      <a href="project.html?slug=${encodeURIComponent(p.slug)}" title="${p.title}">
        <img src="${p.thumb}" alt="${p.title}" />
      </a>
    </li>`,
  ).join("");
});

/* ==================================================
   Render isi halaman about.html
   Ambil data dari ABOUT (js/about-data.js)
================================================== */

/* Bagi array jadi 2 bagian serata mungkin, untuk layout 2 kolom */
function splitInTwo(arr) {
  const half = Math.ceil(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half)];
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof ABOUT === "undefined") return;

  // Foto about
  const imgEl = document.getElementById("about-image");
  if (imgEl) imgEl.src = ABOUT.aboutImage;

  // Bio
  const bioEl = document.getElementById("about-bio");
  if (bioEl) bioEl.textContent = ABOUT.bio;

  // Services -> dibagi 2 kolom
  const [servicesCol1, servicesCol2] = splitInTwo(ABOUT.services || []);
  const servicesCol1El = document.getElementById("services-col-1");
  const servicesCol2El = document.getElementById("services-col-2");
  if (servicesCol1El) servicesCol1El.innerHTML = servicesCol1.join("<br />");
  if (servicesCol2El) servicesCol2El.innerHTML = servicesCol2.join("<br />");

  // Experience -> dibagi 2 kolom, tiap item title + subtitle
  const [expCol1, expCol2] = splitInTwo(ABOUT.experience || []);
  const renderExpColumn = (items) =>
    items
      .map(
        (item) => `
        <p>${item.title}<br />
          <span class="exp-subtitle">${item.subtitle}</span>
        </p>`,
      )
      .join("");

  const expCol1El = document.getElementById("experience-col-1");
  const expCol2El = document.getElementById("experience-col-2");
  if (expCol1El) expCol1El.innerHTML = renderExpColumn(expCol1);
  if (expCol2El) expCol2El.innerHTML = renderExpColumn(expCol2);
});

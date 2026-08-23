/* ==================================================
   Render isi halaman contact.html
   Ambil data dari CONTACT (js/contact-data.js)
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof CONTACT === "undefined") return;

  const imgEl = document.getElementById("contact-image");
  if (imgEl) imgEl.src = CONTACT.image;

  const headingEl = document.getElementById("contact-heading");
  if (headingEl) headingEl.textContent = CONTACT.heading;

  const phoneEl = document.getElementById("contact-phone");
  if (phoneEl) phoneEl.textContent = CONTACT.phone;

  const emailEl = document.getElementById("contact-email");
  if (emailEl) emailEl.textContent = CONTACT.email;
});

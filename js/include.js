async function loadPartial(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(url);
  el.innerHTML = await res.text();
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadPartial('site-header', '/partials/header.html');
  await loadPartial('site-footer', '/partials/footer.html');

  initNavToggle(); // panggil setelah header ke-inject
});
/* ============================================================
   Graceland PVO — Home page dynamic sections
   ============================================================ */
(function () {
  "use strict";

  /* Core values */
  const vg = document.getElementById("valuesGrid");
  if (vg) {
    vg.innerHTML = DATA.values
      .map(
        (v, i) => `
      <article class="value-card" data-reveal="scale" data-delay="${(i % 4) + 1}">
        <div class="vi">${svg(v.icon, 26)}</div>
        <h4>${v.title}</h4>
        <p>${v.text}</p>
      </article>`
      )
      .join("");
  }

  /* Programmes */
  const pg = document.getElementById("programmesGrid");
  if (pg) {
    pg.innerHTML = DATA.programmes
      .map(
        (p, i) => `
      <article class="card prog-card" data-reveal data-delay="${(i % 3) + 1}">
        <div class="icon-badge">${svg(p.icon, 28)}</div>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
        <div class="prog-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      </article>`
      )
      .join("");
  }

  /* Impact */
  const ig = document.getElementById("impactGrid");
  if (ig) {
    ig.innerHTML = DATA.impact
      .map(
        (s, i) => `
      <article class="impact-card" data-reveal="scale" data-delay="${(i % 5) + 1}">
        <div class="ic">${svg(s.icon, 22)}</div>
        <div class="num" data-count="${s.num}" data-suffix="${s.suffix}">0</div>
        <div class="label">${s.label}</div>
      </article>`
      )
      .join("");
  }
})();

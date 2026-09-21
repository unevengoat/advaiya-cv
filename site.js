/* Shared site logic: language state, topbar, download dialog, page rendering.
   Expects cv-data.js loaded first. body[data-page] is landing | interactive. */
"use strict";

function params() { return new URLSearchParams(window.location.search); }

var state = {
  lang: params().get("lang") === "sv" ? "sv" : (params().get("lang") === "en" ? "en" : (localStorage.getItem("cv-lang") || "en"))
};
if (state.lang !== "en" && state.lang !== "sv") state.lang = "en";

var PAGE = document.body.getAttribute("data-page") || "landing";

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function interactiveHref(lang) { return INTERACTIVE_URL + "?lang=" + lang; }

/* ---------- interactive render ---------- */
function renderInteractive(d) {
  var jobs = d.experience.map(function (job) {
    var growth = job.progression ? " growth" : "";
    var roles = job.roles.map(function (r) {
      return '<div class="role"><h4>' + esc(r.title) + '</h4><p class="meta">' + esc(r.dates) + "</p><p>" + esc(r.text) + "</p></div>";
    }).join("");
    var prog = job.progression
      ? '<p><span class="prog-pill"><span class="from">' + esc(job.progression[0]) + '</span><span aria-hidden="true">\u2192</span><span>' + esc(job.progression[1]) + "</span></span></p>"
      : "";
    var noteHtml = job.note ? '<p class="note">' + esc(job.note) + "</p>" : "";
    return '<li class="reveal"><div class="card' + growth + '"><h3>' + esc(job.org) + "</h3>" +
      '<p class="meta">' + esc(job.roles[0].dates) + "</p>" + roles + prog + noteHtml + "</div></li>";
  }).join("");

  var skills = d.skills.map(function (g) {
    return '<div class="skill-group"><h3>' + esc(g.group) + '</h3><ul class="pills">' +
      g.items.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></div>";
  }).join("");

  var langs = '<div class="grid-2">' + d.languages.map(function (l) {
    return '<div class="mini-card reveal"><h3>' + esc(l.lang) + '</h3><p class="level">' + esc(l.level) + "</p></div>";
  }).join("") + "</div>";

  var certs = '<div class="grid-3">' + d.certifications.map(function (c) {
    return '<div class="mini-card reveal"><h3>' + esc(c.title) + '</h3><p class="org">' + esc(c.org) + "</p><p>" +
      esc(c.text) + "</p><p><em>" + esc(c.note) + "</em></p></div>";
  }).join("") + "</div>";

  var interests = '<div class="grid-3">' + d.interests.map(function (i) {
    return '<div class="mini-card reveal"><h3>' + esc(i.title) + "</h3><p>" + esc(i.text) + "</p></div>";
  }).join("") + "</div>";

  return (
    '<section class="hero">' +
      '<img src="profile.jpg" alt="' + esc(CONTACT.name) + '" onerror="this.style.display=\'none\'">' +
      "<div><h1>" + esc(CONTACT.name) + '</h1><p class="tagline">' + esc(d.ui.tagline) + "</p>" +
      '<ul class="chips">' +
        "<li><span class=\"chip\">" + esc(d.location) + "</span></li>" +
        '<li><a href="' + CONTACT.phoneHref + '">' + esc(CONTACT.phone) + "</a></li>" +
        '<li><a href="mailto:' + CONTACT.email + '">' + esc(CONTACT.email) + "</a></li>" +
        '<li><a href="' + CONTACT.linkedin + '" target="_blank" rel="noopener">LinkedIn</a></li>' +
      "</ul></div>" +
    "</section>" +
    '<section class="i-section" id="s-profile"><h2>' + esc(d.ui.profile) + '</h2><p class="lead">' + esc(d.profileText) + "</p></section>" +
    '<section class="i-section" id="s-education"><h2>' + esc(d.ui.education) + "</h2>" +
      '<div class="card reveal"><h3>' + esc(d.education.school) + "</h3>" +
      '<p class="meta">' + esc(d.education.programme) + " \u00b7 " + esc(d.education.years) + "</p>" +
      d.education.lines.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") + "</div></section>" +
    '<section class="i-section" id="s-experience"><h2>' + esc(d.ui.experience) + "</h2>" +
      '<ol class="timeline">' + jobs + "</ol></section>" +
    '<section class="i-section" id="s-skills"><h2>' + esc(d.ui.skills) + "</h2>" + skills + "</section>" +
    '<section class="i-section" id="s-languages"><h2>' + esc(d.ui.languages) + "</h2>" + langs + "</section>" +
    '<section class="i-section" id="s-certifications"><h2>' + esc(d.ui.certifications) + "</h2>" + certs + "</section>" +
    '<section class="i-section" id="s-interests"><h2>' + esc(d.ui.interests) + "</h2>" + interests + "</section>" +
    '<section class="i-section" id="s-references"><h2>' + esc(d.ui.references) + "</h2>" +
      '<div class="card reveal">' + d.references.map(function (r) { return "<p>" + esc(r) + "</p>"; }).join("") + "</div></section>"
  );
}

/* ---------- section nav (interactive page) ---------- */
function renderNav(d) {
  var el = document.getElementById("sectionNavInner");
  if (!el) return;
  var items = [
    ["s-profile", d.ui.profile], ["s-education", d.ui.education],
    ["s-experience", d.ui.experience], ["s-skills", d.ui.skills],
    ["s-languages", d.ui.languages], ["s-certifications", d.ui.certifications],
    ["s-interests", d.ui.interests], ["s-references", d.ui.references]
  ];
  el.innerHTML = items.map(function (it) {
    return '<a href="#' + it[0] + '">' + esc(it[1]) + "</a>";
  }).join("");
}

/* ---------- reveal on scroll ---------- */
var observer = null;
function observeReveals() {
  var els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("visible"); });
    return;
  }
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  els.forEach(function (el) { observer.observe(el); });
}

/* ---------- download dialog ---------- */
function wireDialog() {
  var dlg = document.getElementById("dlDialog");
  if (!dlg) return;
  document.querySelectorAll("[data-open-download]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (typeof dlg.showModal === "function") dlg.showModal();
      else window.location.href = state.lang === "en" ? PDF_EN : PDF_SV;
    });
  });
  dlg.addEventListener("click", function (e) {
    if (e.target === dlg) dlg.close();
  });
}

function updateDialog(d) {
  var primary = document.getElementById("dlPrimary");
  var alt = document.getElementById("dlAlt");
  var closeBtn = document.getElementById("dlClose");
  if (!primary) return;
  var isEn = state.lang === "en";
  primary.setAttribute("href", isEn ? PDF_EN : PDF_SV);
  primary.querySelector("span:last-child").textContent = d.ui.downloadPrimary;
  document.getElementById("dlAlso").textContent = d.ui.alsoAvailable;
  alt.setAttribute("href", isEn ? PDF_SV : PDF_EN);
  alt.textContent = d.ui.otherPdfLabel;
  var title = document.getElementById("dlTitle");
  if (title) title.textContent = d.ui.downloadShort;
  if (closeBtn) closeBtn.textContent = d.ui.close;
}

/* ---------- language switching ---------- */
function setLang(lang) {
  state.lang = lang;
  localStorage.setItem("cv-lang", lang);
  apply();
}

function langQuery() { return "?lang=" + state.lang; }

function apply() {
  var d = CV[state.lang];
  document.documentElement.lang = d.htmlLang;
  document.title = CONTACT.name + " \u2014 CV";

  var enBtn = document.getElementById("langEn");
  var svBtn = document.getElementById("langSv");
  if (enBtn) enBtn.setAttribute("aria-pressed", state.lang === "en" ? "true" : "false");
  if (svBtn) svBtn.setAttribute("aria-pressed", state.lang === "sv" ? "true" : "false");

  var skip = document.getElementById("skipLink");
  if (skip) skip.textContent = d.ui.skip;

  var brand = document.getElementById("brandLink");
  if (brand) brand.setAttribute("href", "index.html" + langQuery());

  var dlBtns = document.querySelectorAll("[data-open-download] .dl-label");
  dlBtns.forEach(function (el) { el.textContent = d.ui.downloadShort; });

  if (PAGE === "interactive") {
    document.getElementById("interactiveRoot").innerHTML = renderInteractive(d);
    renderNav(d);
    observeReveals();
  } else if (PAGE === "landing") {
    applyLanding(d);
  }

  updateDialog(d);

  var url = new URL(window.location.href);
  url.searchParams.set("lang", state.lang);
  url.searchParams.delete("view"); // legacy param; the site is interactive-only now
  window.history.replaceState(null, "", url.toString());
}

/* ---------- landing: name, CV, View straight to the interactive CV ---------- */
function applyLanding(d) {
  var viewBtn = document.getElementById("viewBtn");
  if (viewBtn) {
    viewBtn.textContent = d.landing.view;
    viewBtn.setAttribute("href", interactiveHref(state.lang));
  }

  // Legacy links (e.g. old PDFs) that still carry ?view= land on the interactive CV.
  if (params().get("view")) window.location.replace(interactiveHref(state.lang));
}

/* ---------- events ---------- */
var enBtn = document.getElementById("langEn");
var svBtn = document.getElementById("langSv");
if (enBtn) enBtn.addEventListener("click", function () { setLang("en"); });
if (svBtn) svBtn.addEventListener("click", function () { setLang("sv"); });

wireDialog();

/* active section highlight (interactive page) */
window.addEventListener("scroll", function () {
  if (PAGE !== "interactive") return;
  var ids = ["s-profile", "s-education", "s-experience", "s-skills", "s-languages", "s-certifications", "s-interests", "s-references"];
  var current = ids[0];
  ids.forEach(function (id) {
    var el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < 180) current = id;
  });
  document.querySelectorAll("#sectionNavInner a").forEach(function (a) {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}, { passive: true });

apply();

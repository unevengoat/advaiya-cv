/* Advaiya Bahl CV — single source of truth for EN + SV content and UI strings.
   Change the hosted URL in one place when deploying. */
"use strict";

var SITE_URL = "https://advaiya-cv.onrender.com"; // <-- set to the real Render URL
var PDF_EN = "pdfs/Advaiya-Bahl-CV-EN.pdf";
var PDF_SV = "pdfs/Advaiya-Bahl-CV-SV.pdf";

var CV = {
  en: {
    htmlLang: "en",
    location: "Gothenburg, Sweden",
    contactLabels: { location: "Location", phone: "Phone", email: "Email", linkedin: "LinkedIn" },
    ui: {
      skip: "Skip to content",
      classic: "Classic",
      interactive: "Interactive",
      profile: "Profile",
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      languages: "Languages",
      certifications: "Certifications",
      interests: "Interests",
      references: "References",
      downloadPrimary: "Download English PDF",
      alsoAvailable: "Also available:",
      otherPdfLabel: "Ladda ner svensk PDF",
      tagline: "Year 2 Economics student — retail, coaching, AI automation & performance marketing",
      downloadSectionTitle: "Take it with you",
      footer: "Advaiya Bahl — bilingual CV (EN/ SV) · Classic / Interactive · PDFs link back to the interactive version."
    },
    profileText: "I\u2019m a Year 2 Economics student at Kitas Gymnasium with practical experience across retail, customer service, coaching, AI automation and performance marketing. I\u2019ve taken on responsibility early, from leading my own MMA sessions to working with AI-driven marketing systems and helping customers in a retail environment. I\u2019m particularly interested in business, technology, finance and entrepreneurship, and I enjoy learning by building things and taking on practical challenges. I work well independently, but I also value being part of a team and contributing wherever I can.",
    education: {
      school: "Kitas Gymnasium, G\u00f6teborg",
      programme: "Economics Programme, Specialisation in Economics",
      years: "2025\u20132028",
      lines: ["Currently in Year 2", "Expected graduation: 2028"]
    },
    experience: [
      {
        org: "Fighter Centre, G\u00f6teborg",
        roles: [
          {
            title: "MMA Instructor",
            dates: "June 2026 \u2013 Present",
            text: "Lead my own MMA training sessions, planning and conducting sessions independently. I coach participants with different levels of experience and am responsible for creating a structured and productive training environment."
          },
          {
            title: "MMA Assistant Instructor",
            dates: "January 2026 \u2013 May 2026",
            text: "Assisted with MMA training sessions, supported participants during exercises and helped instructors run structured sessions."
          }
        ],
        progression: ["Assistant Instructor", "Instructor"]
      },
      {
        org: "Helium",
        roles: [
          {
            title: "AI Automation and Performance Marketing Intern",
            dates: "June 2026 \u2013 August 2026",
            text: "Worked on AI automation and performance marketing, with a particular focus on automating and optimising Meta Ads. I helped develop AI-driven systems for marketing and social media processes and worked with campaign optimisation and automation."
          }
        ],
        note: "Letter of recommendation available."
      },
      {
        org: "Saronkyrkan Second Hand",
        roles: [
          {
            title: "Retail Associate",
            dates: "February 2026 \u2013 May 2026",
            text: "Worked in a customer-facing retail environment, handling sales, cash register and payments, caf\u00e9 duties, and general shop operations. I also helped customers with furniture and technology and gained experience dealing with different customer needs."
          }
        ]
      },
      {
        org: "ISGR",
        roles: [
          {
            title: "Football Instructor",
            dates: "September 2026 \u2013 Present",
            text: "Coach football for children, leading and structuring training sessions and giving clear instructions throughout activities. The role involves working with younger participants, keeping sessions organised and helping create a positive training environment."
          }
        ]
      }
    ],
    skills: [
      { group: "Business & Marketing", items: ["Customer service", "Performance marketing", "Meta Ads", "E-commerce", "AI automation"] },
      { group: "Technology", items: ["Shopify", "Meta Ads Manager", "AI tools and automation", "Coding and programming"] },
      { group: "Professional", items: ["Leadership", "Communication", "Teamwork", "Problem-solving", "Organisation", "Teaching and coaching"] }
    ],
    languages: [
      { lang: "English", level: "Fluent" },
      { lang: "Hindi", level: "Fluent" },
      { lang: "Swedish", level: "Very high proficiency" },
      { lang: "Spanish", level: "Working proficiency" }
    ],
    certifications: [
      { title: "Financial Literacy Course", org: "BrightCHAMPS", text: "Completed a financial literacy course.", note: "Certificate available upon request." },
      { title: "Foundational Debate and Public Speaking Course", org: "Taivas Debate Club", text: "Three-month programme, April\u2013June 2026. Completed a foundational course in debate and public speaking.", note: "Certificate available upon request." },
      { title: "Helium Internship Certificate", org: "Helium", text: "Certificate confirming completion of the internship.", note: "Certificate available upon request." }
    ],
    interests: [
      { title: "MMA & BJJ", text: "Training and coaching." },
      { title: "Coding & Technology", text: "Coding, app development and building projects." },
      { title: "AI & Automation", text: "Exploring practical applications of AI for automation and business." },
      { title: "E-commerce", text: "Interested in building and operating online businesses." },
      { title: "Finance & Investing", text: "Strong interest in financial markets, investing and financial literacy." }
    ],
    references: [
      "Helium reference available.",
      "A letter of recommendation from Helium is also available.",
      "The letter can be provided if needed."
    ]
  },

  sv: {
    htmlLang: "sv",
    location: "G\u00f6teborg, Sverige",
    contactLabels: { location: "Ort", phone: "Telefon", email: "E-post", linkedin: "LinkedIn" },
    ui: {
      skip: "Hoppa till inneh\u00e5ll",
      classic: "Klassisk",
      interactive: "Interaktiv",
      profile: "Profil",
      education: "Utbildning",
      experience: "Arbetslivserfarenhet",
      skills: "Kompetenser",
      languages: "Spr\u00e5k",
      certifications: "Certifieringar",
      interests: "Intressen",
      references: "Referenser",
      downloadPrimary: "Ladda ner svensk PDF",
      alsoAvailable: "Finns \u00e4ven som:",
      otherPdfLabel: "Download English PDF",
      tagline: "Andra \u00e5ret p\u00e5 Ekonomiprogrammet \u2014 butik, coaching, AI-automation & performance marketing",
      downloadSectionTitle: "Ta med dig CV:t",
      footer: "Advaiya Bahl \u2014 tv\u00e5spr\u00e5kig CV (EN / SV) · Klassisk / Interaktiv · PDF:erna l\u00e4nkar tillbaka till den interaktiva versionen."
    },
    profileText: "Jag g\u00e5r andra \u00e5ret p\u00e5 Ekonomiprogrammet p\u00e5 Kitas Gymnasium och har praktisk erfarenhet inom bland annat handel, kundservice, coaching, AI-automation och performance marketing. Jag har tidigt f\u00e5tt ta eget ansvar, bland annat genom att leda egna MMA-pass och arbeta med AI-drivna marknadsf\u00f6ringssystem samt kundservice i butik. Jag \u00e4r s\u00e4rskilt intresserad av f\u00f6retagande, teknik, ekonomi och entrepren\u00f6rskap och tycker om att l\u00e4ra mig genom att bygga saker och ta mig an praktiska utmaningar. Jag arbetar bra sj\u00e4lvst\u00e4ndigt, men trivs ocks\u00e5 med att vara en del av ett team och bidra d\u00e4r det beh\u00f6vs.",
    education: {
      school: "Kitas Gymnasium, G\u00f6teborg",
      programme: "Ekonomiprogrammet, inriktning Ekonomi",
      years: "2025\u20132028",
      lines: ["\u00c5r 2", "Ber\u00e4knad examen: 2028"]
    },
    experience: [
      {
        org: "Fighter Centre, G\u00f6teborg",
        roles: [
          {
            title: "MMA-instrukt\u00f6r",
            dates: "Juni 2026 \u2013 nuvarande",
            text: "Leder egna MMA-pass och ansvarar sj\u00e4lvst\u00e4ndigt f\u00f6r planering och genomf\u00f6rande. Jag instruerar deltagare med olika erfarenhetsniv\u00e5er och ansvarar f\u00f6r att skapa en strukturerad och effektiv tr\u00e4ningsmilj\u00f6."
          },
          {
            title: "Assisterande MMA-instrukt\u00f6r",
            dates: "Januari 2026 \u2013 maj 2026",
            text: "Assisterade under MMA-pass, st\u00f6ttade deltagare under \u00f6vningar och hj\u00e4lpte instrukt\u00f6rer att genomf\u00f6ra strukturerade tr\u00e4ningspass."
          }
        ],
        progression: ["Assisterande instrukt\u00f6r", "Instrukt\u00f6r"]
      },
      {
        org: "Helium",
        roles: [
          {
            title: "Praktikant inom AI-automation och performance marketing",
            dates: "Juni 2026 \u2013 augusti 2026",
            text: "Arbetade med AI-automation och performance marketing, med s\u00e4rskilt fokus p\u00e5 att automatisera och optimera Meta Ads. Jag var med och utvecklade AI-drivna system f\u00f6r marknadsf\u00f6ring och sociala medier samt arbetade med kampanjoptimering och automatisering."
          }
        ],
        note: "Rekommendationsbrev finns tillg\u00e4ngligt."
      },
      {
        org: "Saronkyrkan Second Hand",
        roles: [
          {
            title: "Butiksmedarbetare",
            dates: "Februari 2026 \u2013 maj 2026",
            text: "Arbetade i en kundn\u00e4ra butiksmilj\u00f6 med f\u00f6rs\u00e4ljning, kassahantering och betalningar, caf\u00e9arbete och allm\u00e4nna butiksuppgifter. Jag hj\u00e4lpte \u00e4ven kunder med m\u00f6bler och teknik och fick erfarenhet av att hantera olika kundbehov."
          }
        ]
      },
      {
        org: "ISGR",
        roles: [
          {
            title: "Fotbollsinstrukt\u00f6r",
            dates: "September 2026 \u2013 nuvarande",
            text: "Leder fotbollstr\u00e4ningar f\u00f6r barn, planerar och strukturerar tr\u00e4ningspassen samt ger tydliga instruktioner under aktiviteterna. Rollen inneb\u00e4r att arbeta med yngre deltagare, h\u00e5lla tr\u00e4ningarna organiserade och bidra till en positiv tr\u00e4ningsmilj\u00f6."
          }
        ]
      }
    ],
    skills: [
      { group: "Aff\u00e4r & marknadsf\u00f6ring", items: ["Kundservice", "Performance marketing", "Meta Ads", "E-handel", "AI-automation"] },
      { group: "Teknik", items: ["Shopify", "Meta Ads Manager", "AI-verktyg och automation", "Programmering"] },
      { group: "Personliga kompetenser", items: ["Ledarskap", "Kommunikation", "Teamarbete", "Probleml\u00f6sning", "Organisation", "Undervisning och coaching"] }
    ],
    languages: [
      { lang: "Engelska", level: "Flytande" },
      { lang: "Hindi", level: "Flytande" },
      { lang: "Svenska", level: "Mycket h\u00f6g niv\u00e5" },
      { lang: "Spanska", level: "Yrkesm\u00e4ssig kommunikation" }
    ],
    certifications: [
      { title: "Kurs i finansiell f\u00f6rst\u00e5else", org: "BrightCHAMPS", text: "Genomf\u00f6rd kurs inom finansiell f\u00f6rst\u00e5else och privatekonomi.", note: "Certifikat finns tillg\u00e4ngligt vid behov." },
      { title: "Grundkurs i debatt och muntlig framst\u00e4llning", org: "Taivas Debate Club", text: "Tre m\u00e5naders program, april\u2013juni 2026. Genomf\u00f6rde en grundl\u00e4ggande kurs inom debatt och muntlig framst\u00e4llning.", note: "Certifikat finns tillg\u00e4ngligt vid behov." },
      { title: "Praktikcertifikat fr\u00e5n Helium", org: "Helium", text: "Certifikat som bekr\u00e4ftar genomf\u00f6rd praktik.", note: "Certifikat finns tillg\u00e4ngligt vid behov." }
    ],
    interests: [
      { title: "MMA & BJJ", text: "Tr\u00e4ning och coaching." },
      { title: "Kodning & teknik", text: "Programmering, apputveckling och att bygga egna projekt." },
      { title: "AI & automation", text: "Praktiska till\u00e4mpningar av AI f\u00f6r automation och f\u00f6retagande." },
      { title: "E-handel", text: "Intresse f\u00f6r att bygga och driva onlineverksamheter." },
      { title: "Ekonomi & investeringar", text: "Stort intresse f\u00f6r finansmarknader, investeringar och finansiell f\u00f6rst\u00e5else." }
    ],
    references: [
      "Referens fr\u00e5n Helium finns tillg\u00e4nglig.",
      "Ett rekommendationsbrev fr\u00e5n Helium finns ocks\u00e5 tillg\u00e4ngligt.",
      "Rekommendationsbrevet kan delas vid behov."
    ]
  }
};

var CONTACT = {
  name: "Advaiya Bahl",
  phone: "+46 769 502 461",
  phoneHref: "tel:+46769502461",
  email: "advaiyabahl@gmail.com",
  linkedin: "https://linkedin.com/in/advaiyabahl/",
  linkedinShort: "linkedin.com/in/advaiyabahl"
};

/* ---------- state ---------- */
function params() { return new URLSearchParams(window.location.search); }
var state = {
  lang: params().get("lang") === "sv" ? "sv" : (params().get("lang") === "en" ? "en" : (localStorage.getItem("cv-lang") || "en")),
  view: params().get("view") === "interactive" ? "interactive" : (params().get("view") === "classic" ? "classic" : (localStorage.getItem("cv-view") || "classic"))
};
if (state.lang !== "en" && state.lang !== "sv") state.lang = "en";
if (state.view !== "classic" && state.view !== "interactive") state.view = "classic";

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ---------- classic render ---------- */
function renderClassic(d) {
  var jobs = d.experience.map(function (job) {
    var roles = job.roles.map(function (r, i) {
      return (i === 0
        ? '<div class="job-head"><h3>' + esc(r.title) + ' <span class="job-org">\u2014 ' + esc(job.org) + '</span></h3><span class="job-date">' + esc(r.dates) + '</span></div>'
        : '<div class="job-head"><h3>' + esc(r.title) + '</h3><span class="job-date">' + esc(r.dates) + '</span></div>')
        + "<p>" + esc(r.text) + "</p>";
    }).join("");
    var prog = job.progression
      ? '<div class="progression" role="note">' + esc(job.progression[0]) + ' <span class="arrow" aria-hidden="true">\u2192</span> ' + esc(job.progression[1]) + "</div>"
      : "";
    var note = job.note ? '<p class="note">' + esc(job.note) + "</p>" : "";
    return '<div class="job">' + roles + prog + note + "</div>";
  }).join("");

  var skills = '<div class="skills-grid">' + d.skills.map(function (g) {
    return "<div><h3>" + esc(g.group) + "</h3><ul>" +
      g.items.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></div>";
  }).join("") + "</div>";

  var langs = d.languages.map(function (l) {
    return "<strong>" + esc(l.lang) + "</strong> \u2014 " + esc(l.level);
  }).join(" &nbsp;\u00b7&nbsp; ");

  var certs = d.certifications.map(function (c) {
    return '<div class="cert"><h3>' + esc(c.title) + ' <span class="org">\u2014 ' + esc(c.org) + "</span></h3><p>" +
      esc(c.text) + ' <span class="note">' + esc(c.note) + "</span></p></div>";
  }).join("");

  var interests = d.interests.map(function (i) {
    return "<strong>" + esc(i.title) + "</strong> \u2014 " + esc(i.text);
  }).join(" &nbsp;\u00b7&nbsp; ");

  return (
    '<div class="cv-classic-head">' +
      "<h1>" + esc(CONTACT.name) + "</h1>" +
      '<p class="location">' + esc(d.location) + "</p>" +
      '<p class="contact-line"><span><span class="sr-only"></span><a href="' + CONTACT.phoneHref + '">' + esc(CONTACT.phone) + "</a></span>" +
      '<span><a href="mailto:' + CONTACT.email + '">' + esc(CONTACT.email) + "</a></span>" +
      '<span><a href="' + CONTACT.linkedin + '" target="_blank" rel="noopener">' + esc(CONTACT.linkedinShort) + "</a></span></p>" +
    "</div>" +
    '<section class="cv-section"><h2>' + esc(d.ui.profile) + "</h2><p>" + esc(d.profileText) + "</p></section>" +
    '<section class="cv-section"><h2>' + esc(d.ui.education) + "</h2>" +
      '<div class="job-head"><h3>' + esc(d.education.school) + '</h3><span class="job-date">' + esc(d.education.years) + "</span></div>" +
      "<p><strong>" + esc(d.education.programme) + "</strong></p>" +
      d.education.lines.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") +
    "</section>" +
    '<section class="cv-section"><h2>' + esc(d.ui.experience) + "</h2>" + jobs + "</section>" +
    '<section class="cv-section"><h2>' + esc(d.ui.skills) + "</h2>" + skills + "</section>" +
    '<section class="cv-section"><h2>' + esc(d.ui.languages) + '</h2><p class="lang-line">' + langs + "</p></section>" +
    '<section class="cv-section"><h2>' + esc(d.ui.certifications) + "</h2>" + certs + "</section>" +
    '<section class="cv-section"><h2>' + esc(d.ui.interests) + '</h2><p class="inline-list">' + interests + "</p></section>" +
    '<section class="cv-section"><h2>' + esc(d.ui.references) + "</h2>" +
      d.references.map(function (r) { return "<p>" + esc(r) + "</p>"; }).join("") + "</section>"
  );
}

/* ---------- interactive render ---------- */
function renderInteractive(d) {
  var jobs = d.experience.map(function (job, idx) {
    var growth = job.progression ? " growth" : "";
    var roles = job.roles.map(function (r) {
      return '<div class="role"><h4>' + esc(r.title) + '</h4><p class="meta">' + esc(r.dates) + "</p><p>" + esc(r.text) + "</p></div>";
    }).join("");
    var prog = job.progression
      ? '<p><span class="prog-pill"><span class="from">' + esc(job.progression[0]) + '</span><span aria-hidden="true">\u2192</span><span>' + esc(job.progression[1]) + "</span></span></p>"
      : "";
    var note = job.note ? '<p class="note">' + esc(job.note) + "</p>" : "";
    return '<li class="reveal"><div class="card' + growth + '"><h3>' + esc(job.org) + "</h3>" +
      '<p class="meta">' + esc(job.roles[0].dates) + "</p>" + roles + prog + note + "</div></li>";
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

/* ---------- nav ---------- */
function renderNav(d) {
  var items = [
    ["s-profile", d.ui.profile], ["s-education", d.ui.education],
    ["s-experience", d.ui.experience], ["s-skills", d.ui.skills],
    ["s-languages", d.ui.languages], ["s-certifications", d.ui.certifications],
    ["s-interests", d.ui.interests], ["s-references", d.ui.references]
  ];
  document.getElementById("sectionNavInner").innerHTML = items.map(function (it) {
    return '<a href="#' + it[0] + '">' + esc(it[1]) + "</a>";
  }).join("");
}

/* ---------- apply state ---------- */
function apply() {
  var d = CV[state.lang];
  document.documentElement.lang = d.htmlLang;
  document.title = CONTACT.name + " \u2014 " + (state.lang === "sv" ? "CV" : "CV");

  document.getElementById("langEn").setAttribute("aria-pressed", state.lang === "en" ? "true" : "false");
  document.getElementById("langSv").setAttribute("aria-pressed", state.lang === "sv" ? "true" : "false");
  document.getElementById("viewClassic").setAttribute("aria-pressed", state.view === "classic" ? "true" : "false");
  document.getElementById("viewInteractive").setAttribute("aria-pressed", state.view === "interactive" ? "true" : "false");
  document.getElementById("viewClassic").textContent = d.ui.classic;
  document.getElementById("viewInteractive").textContent = d.ui.interactive;
  document.getElementById("skipLink").textContent = d.ui.skip;

  document.getElementById("classicRoot").innerHTML = renderClassic(d);
  document.getElementById("interactiveRoot").innerHTML = renderInteractive(d);
  renderNav(d);

  var isEn = state.lang === "en";
  var primaryPdf = isEn ? PDF_EN : PDF_SV;
  var otherPdf = isEn ? PDF_SV : PDF_EN;
  ["classicDownloadBtn", "interactiveDownloadBtn"].forEach(function (id) {
    document.getElementById(id).setAttribute("href", primaryPdf);
  });
  ["classicDownloadLabel", "interactiveDownloadLabel"].forEach(function (id) {
    document.getElementById(id).textContent = d.ui.downloadPrimary;
  });
  ["classicAltPrefix", "interactiveAltPrefix"].forEach(function (id) {
    document.getElementById(id).textContent = d.ui.alsoAvailable;
  });
  ["classicAltLink", "interactiveAltLink"].forEach(function (id) {
    var a = document.getElementById(id);
    a.setAttribute("href", otherPdf);
    a.textContent = d.ui.otherPdfLabel;
  });

  var classic = state.view === "classic";
  document.getElementById("classicView").hidden = !classic;
  document.getElementById("interactiveView").hidden = classic;
  document.getElementById("sectionNav").hidden = classic;

  document.getElementById("footerText").textContent = d.ui.footer;

  localStorage.setItem("cv-lang", state.lang);
  localStorage.setItem("cv-view", state.view);
  var url = new URL(window.location.href);
  url.searchParams.set("lang", state.lang);
  url.searchParams.set("view", state.view);
  window.history.replaceState(null, "", url.toString());

  observeReveals();
}

/* ---------- reveal on scroll ---------- */
var observer = null;
function observeReveals() {
  var els = document.querySelectorAll("#interactiveView .reveal");
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

/* ---------- events ---------- */
document.getElementById("langEn").addEventListener("click", function () { state.lang = "en"; apply(); });
document.getElementById("langSv").addEventListener("click", function () { state.lang = "sv"; apply(); });
document.getElementById("viewClassic").addEventListener("click", function () { state.view = "classic"; apply(); });
document.getElementById("viewInteractive").addEventListener("click", function () { state.view = "interactive"; apply(); });

/* active section highlight */
window.addEventListener("scroll", function () {
  if (state.view !== "interactive") return;
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

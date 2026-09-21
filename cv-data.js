/* Advaiya Bahl CV — single source of truth for EN + SV content and UI strings.
   Loaded by every page (landing, classic, interactive). */
"use strict";

var SITE_URL = "https://advaiya-cv.onrender.com"; // <-- set to the real Render URL
var PDF_EN = "pdfs/Advaiya-Bahl-CV-EN.pdf";
var PDF_SV = "pdfs/Advaiya-Bahl-CV-SV.pdf";
var INTERACTIVE_URL = "interactive.html";

var CV = {
  en: {
    htmlLang: "en",
    location: "Gothenburg, Sweden",
    contactLabels: { location: "Location", phone: "Phone", email: "Email", linkedin: "LinkedIn" },
    ui: {
      skip: "Skip to content",
      downloadShort: "Download PDF",
      downloadPrimary: "Download English PDF",
      alsoAvailable: "Also available:",
      otherPdfLabel: "Swedish PDF",
      close: "Close",
      profile: "Profile",
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      languages: "Languages",
      certifications: "Certifications",
      interests: "Interests",
      references: "References",
      tagline: "Year 2 Economics student — retail, coaching, AI automation & performance marketing",
    },
    landing: {
      view: "View"
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
      downloadShort: "Ladda ner PDF",
      downloadPrimary: "Ladda ner svensk PDF",
      alsoAvailable: "Finns \u00e4ven som:",
      otherPdfLabel: "English PDF",
      close: "St\u00e4ng",
      profile: "Profil",
      education: "Utbildning",
      experience: "Arbetslivserfarenhet",
      skills: "Kompetenser",
      languages: "Spr\u00e5k",
      certifications: "Certifieringar",
      interests: "Intressen",
      references: "Referenser",
      tagline: "Andra \u00e5ret p\u00e5 Ekonomiprogrammet \u2014 butik, coaching, AI-automation & performance marketing",
    },
    landing: {
      view: "Visa"
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

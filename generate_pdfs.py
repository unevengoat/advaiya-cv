# Generates the two one-page classic PDF CVs (EN + SV) with reportlab.
# Run:  C:\Python312\python.exe generate_pdfs.py
# Output: pdfs/Advaiya-Bahl-CV-EN.pdf, pdfs/Advaiya-Bahl-CV-SV.pdf
# If you change the Render URL, update BASE_URL here AND SITE_URL in app.js.
"""Generates the two one-page classic PDF CVs (EN + SV) with reportlab."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer,
    Table, TableStyle, HRFlowable, KeepTogether,
)

BASE_URL = "https://advaiya-cv.onrender.com"
PDF_EN_URL = BASE_URL + "/pdfs/Advaiya-Bahl-CV-EN.pdf"
PDF_SV_URL = BASE_URL + "/pdfs/Advaiya-Bahl-CV-SV.pdf"
INT_EN_URL = BASE_URL + "/interactive.html?lang=en"
INT_SV_URL = BASE_URL + "/interactive.html?lang=sv"

INK = HexColor("#16202e")
SOFT = HexColor("#33415a")
MUTED = HexColor("#5b6b7f")
ACCENT = HexColor("#0e6b6b")
WASH = HexColor("#e9f2f0")
LINE = HexColor("#dfe5ec")

PHONE = "+46 769 502 461"
EMAIL = "advaiyabahl@gmail.com"
LINKEDIN = "https://linkedin.com/in/advaiyabahl/"
LINKEDIN_SHORT = "linkedin.com/in/advaiyabahl"
DISPLAY_URL = "advaiya-cv.onrender.com"  # printed in full so paper copies can be typed in

EN = {
    "location": "Gothenburg, Sweden",
    "profile_h": "Profile",
    "profile": (
        "I\u2019m a Year 2 Economics student at Kitas Gymnasium with practical experience across retail, "
        "customer service, coaching, AI automation and performance marketing. I\u2019ve taken on responsibility "
        "early, from leading my own MMA sessions to working with AI-driven marketing systems and helping "
        "customers in a retail environment. I\u2019m particularly interested in business, technology, finance and "
        "entrepreneurship, and I enjoy learning by building things and taking on practical challenges. I work "
        "well independently, but I also value being part of a team and contributing wherever I can."
    ),
    "edu_h": "Education",
    "edu_school": "Kitas Gymnasium, G\u00f6teborg",
    "edu_prog": "Economics Programme, Specialisation in Economics",
    "edu_years": "2025\u20132028",
    "edu_lines": ["Currently in Year 2", "Expected graduation: 2028"],
    "exp_h": "Experience",
    "jobs": [
        {"org": "Fighter Centre, G\u00f6teborg", "roles": [
            {"t": "MMA Instructor", "d": "June 2026 \u2013 Present",
             "x": "Lead my own MMA training sessions, planning and conducting sessions independently. I coach participants with different levels of experience and am responsible for creating a structured and productive training environment."},
            {"t": "MMA Assistant Instructor", "d": "January 2026 \u2013 May 2026",
             "x": "Assisted with MMA training sessions, supported participants during exercises and helped instructors run structured sessions."}],
         "prog": "Assistant Instructor \u2192 Instructor"},
        {"org": "Helium", "roles": [
            {"t": "AI Automation and Performance Marketing Intern", "d": "June 2026 \u2013 August 2026",
             "x": "Worked on AI automation and performance marketing, with a particular focus on automating and optimising Meta Ads. I helped develop AI-driven systems for marketing and social media processes and worked with campaign optimisation and automation."}],
         "note": "Letter of recommendation available."},
        {"org": "Saronkyrkan Second Hand", "roles": [
            {"t": "Retail Associate", "d": "February 2026 \u2013 May 2026",
             "x": "Worked in a customer-facing retail environment, handling sales, cash register and payments, caf\u00e9 duties, and general shop operations. I also helped customers with furniture and technology and gained experience dealing with different customer needs."}]},
        {"org": "ISGR", "roles": [
            {"t": "Football Instructor", "d": "September 2026 \u2013 Present",
             "x": "Coach football for children, leading and structuring training sessions and giving clear instructions throughout activities. The role involves working with younger participants, keeping sessions organised and helping create a positive training environment."}]},
    ],
    "skills_h": "Skills",
    "skills": [
        ("Business & Marketing", ["Customer service", "Performance marketing", "Meta Ads", "E-commerce", "AI automation"]),
        ("Technology", ["Shopify", "Meta Ads Manager", "AI tools and automation", "Coding and programming"]),
        ("Professional", ["Leadership", "Communication", "Teamwork", "Problem-solving", "Organisation", "Teaching and coaching"]),
    ],
    "lang_h": "Languages",
    "langs": [("English", "Fluent"), ("Hindi", "Fluent"), ("Swedish", "Very high proficiency"), ("Spanish", "Working proficiency")],
    "cert_h": "Certifications",
    "certs": [
        ("Financial Literacy Course", "BrightCHAMPS", "Completed a financial literacy course.", "Certificate available upon request."),
        ("Foundational Debate and Public Speaking Course", "Taivas Debate Club",
         "Three-month programme, April\u2013June 2026. Completed a foundational course in debate and public speaking.", "Certificate available upon request."),
        ("Helium Internship Certificate", "Helium", "Certificate confirming completion of the internship.", "Certificate available upon request."),
    ],
    "int_h": "Interests",
    "interests": [("MMA & BJJ", "Training and coaching."),
                 ("Coding & Technology", "Coding, app development and building projects."),
                 ("AI & Automation", "Exploring practical applications of AI for automation and business."),
                 ("E-commerce", "Interested in building and operating online businesses."),
                 ("Finance & Investing", "Strong interest in financial markets, investing and financial literacy.")],
    "ref_h": "References",
    "refs": ["Helium reference available. A letter of recommendation from Helium is also available. The letter can be provided if needed."],
    "interactive_url": INT_EN_URL, "self_url": PDF_EN_URL, "other_url": PDF_SV_URL,
}

SV = {
    "location": "G\u00f6teborg, Sverige",
    "profile_h": "Profil",
    "profile": (
        "Jag g\u00e5r andra \u00e5ret p\u00e5 Ekonomiprogrammet p\u00e5 Kitas Gymnasium och har praktisk erfarenhet inom "
        "bland annat handel, kundservice, coaching, AI-automation och performance marketing. Jag har tidigt f\u00e5tt ta "
        "eget ansvar, bland annat genom att leda egna MMA-pass och arbeta med AI-drivna marknadsf\u00f6ringssystem samt "
        "kundservice i butik. Jag \u00e4r s\u00e4rskilt intresserad av f\u00f6retagande, teknik, ekonomi och entrepren\u00f6rskap "
        "och tycker om att l\u00e4ra mig genom att bygga saker och ta mig an praktiska utmaningar. Jag arbetar bra "
        "sj\u00e4lvst\u00e4ndigt, men trivs ocks\u00e5 med att vara en del av ett team och bidra d\u00e4r det beh\u00f6vs."
    ),
    "edu_h": "Utbildning",
    "edu_school": "Kitas Gymnasium, G\u00f6teborg",
    "edu_prog": "Ekonomiprogrammet, inriktning Ekonomi",
    "edu_years": "2025\u20132028",
    "edu_lines": ["\u00c5r 2", "Ber\u00e4knad examen: 2028"],
    "exp_h": "Arbetslivserfarenhet",
    "jobs": [
        {"org": "Fighter Centre, G\u00f6teborg", "roles": [
            {"t": "MMA-instrukt\u00f6r", "d": "Juni 2026 \u2013 nuvarande",
             "x": "Leder egna MMA-pass och ansvarar sj\u00e4lvst\u00e4ndigt f\u00f6r planering och genomf\u00f6rande. Jag instruerar deltagare med olika erfarenhetsniv\u00e5er och ansvarar f\u00f6r att skapa en strukturerad och effektiv tr\u00e4ningsmilj\u00f6."},
            {"t": "Assisterande MMA-instrukt\u00f6r", "d": "Januari 2026 \u2013 maj 2026",
             "x": "Assisterade under MMA-pass, st\u00f6ttade deltagare under \u00f6vningar och hj\u00e4lpte instrukt\u00f6rer att genomf\u00f6ra strukturerade tr\u00e4ningspass."}],
         "prog": "Assisterande instrukt\u00f6r \u2192 Instrukt\u00f6r"},
        {"org": "Helium", "roles": [
            {"t": "Praktikant inom AI-automation och performance marketing", "d": "Juni 2026 \u2013 augusti 2026",
             "x": "Arbetade med AI-automation och performance marketing, med s\u00e4rskilt fokus p\u00e5 att automatisera och optimera Meta Ads. Jag var med och utvecklade AI-drivna system f\u00f6r marknadsf\u00f6ring och sociala medier samt arbetade med kampanjoptimering och automatisering."}],
         "note": "Rekommendationsbrev finns tillg\u00e4ngligt."},
        {"org": "Saronkyrkan Second Hand", "roles": [
            {"t": "Butiksmedarbetare", "d": "Februari 2026 \u2013 maj 2026",
             "x": "Arbetade i en kundn\u00e4ra butiksmilj\u00f6 med f\u00f6rs\u00e4ljning, kassahantering och betalningar, caf\u00e9arbete och allm\u00e4nna butiksuppgifter. Jag hj\u00e4lpte \u00e4ven kunder med m\u00f6bler och teknik och fick erfarenhet av att hantera olika kundbehov."}]},
        {"org": "ISGR", "roles": [
            {"t": "Fotbollsinstrukt\u00f6r", "d": "September 2026 \u2013 nuvarande",
             "x": "Leder fotbollstr\u00e4ningar f\u00f6r barn, planerar och strukturerar tr\u00e4ningspassen samt ger tydliga instruktioner under aktiviteterna. Rollen inneb\u00e4r att arbeta med yngre deltagare, h\u00e5lla tr\u00e4ningarna organiserade och bidra till en positiv tr\u00e4ningsmilj\u00f6."}]},
    ],
    "skills_h": "Kompetenser",
    "skills": [
        ("Aff\u00e4r & marknadsf\u00f6ring", ["Kundservice", "Performance marketing", "Meta Ads", "E-handel", "AI-automation"]),
        ("Teknik", ["Shopify", "Meta Ads Manager", "AI-verktyg och automation", "Programmering"]),
        ("Personliga kompetenser", ["Ledarskap", "Kommunikation", "Teamarbete", "Probleml\u00f6sning", "Organisation", "Undervisning och coaching"]),
    ],
    "lang_h": "Spr\u00e5k",
    "langs": [("Engelska", "Flytande"), ("Hindi", "Flytande"), ("Svenska", "Mycket h\u00f6g niv\u00e5"), ("Spanska", "Yrkesm\u00e4ssig kommunikation")],
    "cert_h": "Certifieringar",
    "certs": [
        ("Kurs i finansiell f\u00f6rst\u00e5else", "BrightCHAMPS", "Genomf\u00f6rd kurs inom finansiell f\u00f6rst\u00e5else och privatekonomi.", "Certifikat finns tillg\u00e4ngligt vid behov."),
        ("Grundkurs i debatt och muntlig framst\u00e4llning", "Taivas Debate Club",
         "Tre m\u00e5naders program, april\u2013juni 2026. Genomf\u00f6rde en grundl\u00e4ggande kurs inom debatt och muntlig framst\u00e4llning.", "Certifikat finns tillg\u00e4ngligt vid behov."),
        ("Praktikcertifikat fr\u00e5n Helium", "Helium", "Certifikat som bekr\u00e4ftar genomf\u00f6rd praktik.", "Certifikat finns tillg\u00e4ngligt vid behov."),
    ],
    "int_h": "Intressen",
    "interests": [("MMA & BJJ", "Tr\u00e4ning och coaching."),
                 ("Kodning & teknik", "Programmering, apputveckling och att bygga egna projekt."),
                 ("AI & automation", "Praktiska till\u00e4mpningar av AI f\u00f6r automation och f\u00f6retagande."),
                 ("E-handel", "Intresse f\u00f6r att bygga och driva onlineverksamheter."),
                 ("Ekonomi & investeringar", "Stort intresse f\u00f6r finansmarknader, investeringar och finansiell f\u00f6rst\u00e5else.")],
    "ref_h": "Referenser",
    "refs": ["Referens fr\u00e5n Helium finns tillg\u00e4nglig. Ett rekommendationsbrev fr\u00e5n Helium finns ocks\u00e5 tillg\u00e4ngligt. Rekommendationsbrevet kan delas vid behov."],
    "interactive_url": INT_SV_URL, "self_url": PDF_SV_URL, "other_url": PDF_EN_URL,
}


def build_pdf(data, is_english, out_path):
    margin = 30
    doc = BaseDocTemplate(out_path, pagesize=A4,
                          leftMargin=margin, rightMargin=margin,
                          topMargin=26, bottomMargin=26,
                          title="Advaiya Bahl \u2014 CV (%s)" % ("English" if is_english else "Svenska"),
                          author="Advaiya Bahl")
    W = A4[0] - 2 * margin
    frame = Frame(margin, 26, W, A4[1] - 52, id="f")
    doc.addPageTemplates([PageTemplate(id="p", frames=[frame])])

    s_nav = ParagraphStyle("nav", fontName="Helvetica", fontSize=7, leading=9,
                           textColor=MUTED, alignment=2, spaceAfter=2)
    s_h1 = ParagraphStyle("h1", fontName="Helvetica-Bold", fontSize=20, leading=22,
                          textColor=INK, spaceAfter=1)
    s_loc = ParagraphStyle("loc", fontName="Helvetica", fontSize=8.2, leading=10.5,
                           textColor=MUTED, spaceAfter=1)
    s_contact = ParagraphStyle("contact", fontName="Helvetica", fontSize=8, leading=10.5,
                               textColor=SOFT, spaceAfter=0)
    s_h2 = ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=8.8, leading=10.5,
                          textColor=ACCENT, spaceBefore=0, spaceAfter=1)
    s_body = ParagraphStyle("body", fontName="Helvetica", fontSize=8.4, leading=11,
                            textColor=INK, spaceAfter=2.5)
    s_title = ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=8.6, leading=10.5,
                             textColor=INK, spaceAfter=1)
    s_date = ParagraphStyle("date", fontName="Helvetica", fontSize=7.5, leading=10.5,
                            textColor=MUTED, alignment=2)
    s_note = ParagraphStyle("note", fontName="Helvetica-Oblique", fontSize=8, leading=10,
                            textColor=SOFT, spaceAfter=1)
    s_prog = ParagraphStyle("prog", fontName="Helvetica-Bold", fontSize=8, leading=10.5,
                            textColor=ACCENT, alignment=1, spaceBefore=1, spaceAfter=1)
    s_small = ParagraphStyle("small", fontName="Helvetica", fontSize=8.3, leading=10.5,
                             textColor=INK, spaceAfter=1.5)
    s_skill_h = ParagraphStyle("skh", fontName="Helvetica-Bold", fontSize=8, leading=10,
                               textColor=SOFT, spaceAfter=1.5)
    s_skill = ParagraphStyle("sk", fontName="Helvetica", fontSize=8, leading=10,
                             textColor=INK, spaceAfter=0)
    s_foot = ParagraphStyle("foot", fontName="Helvetica", fontSize=6.8, leading=8.5,
                            textColor=MUTED, alignment=1, spaceBefore=0)
    s_iline = ParagraphStyle("iline", fontName="Helvetica", fontSize=8.2, leading=10.5,
                             textColor=SOFT, spaceAfter=0)

    def link(url, text):
        return '<a href="%s" color="#0e6b6b">%s</a>' % (url, text)

    story = []
    # Top language switch (clickable). The website is the interactive CV;
    # this PDF is the classic version.
    story.append(Paragraph(
        "%s &nbsp;|&nbsp; %s" % (
            link(data["self_url"], "<b>EN</b>" if is_english else "EN"),
            link(data["other_url"], "SV" if is_english else "<b>SV</b>"),
        ), s_nav))
    story.append(HRFlowable(width="100%", thickness=0.6, color=INK, spaceAfter=6))

    story.append(Paragraph("Advaiya Bahl", s_h1))
    story.append(Paragraph(data["location"], s_loc))
    story.append(Paragraph(
        '<a href="tel:+46769502461" color="#33415a">%s</a> &nbsp;&bull;&nbsp; '
        '<a href="mailto:%s" color="#0e6b6b">%s</a> &nbsp;&bull;&nbsp; '
        '<a href="%s" color="#0e6b6b">%s</a>' % (PHONE, EMAIL, EMAIL, LINKEDIN, LINKEDIN_SHORT),
        s_contact))
    # Interactive-version pointer with the URL printed in full so a
    # paper printout can be typed into a browser.
    if is_english:
        iline = ("There\u2019s also an interactive version of this CV that I built: %s"
                 % link(BASE_URL, "<b>" + DISPLAY_URL + "</b>"))
    else:
        iline = ("Det finns \u00e4ven en interaktiv version av detta CV som jag har byggt: %s"
                 % link(BASE_URL, "<b>" + DISPLAY_URL + "</b>"))
    story.append(Spacer(1, 4))
    ibox = Table([[Paragraph(iline, s_iline)]], colWidths=[W])
    ibox.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), WASH),
        ("BOX", (0, 0), (-1, -1), 0.6, ACCENT),
        ("INNERPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    story.append(ibox)
    story.append(Spacer(1, 6))

    def section(title, flowables):
        story.append(Paragraph(title.upper(), s_h2))
        story.append(HRFlowable(width="100%", thickness=0.5, color=LINE, spaceAfter=3))
        story.extend(flowables)
        story.append(Spacer(1, 4))

    section(data["profile_h"], [Paragraph(data["profile"], s_body)])

    edu = [Paragraph(
        '<b>%s</b> &nbsp;&mdash;&nbsp; %s &nbsp;&nbsp;<font color="#5b6b7f">%s</font>' % (
            data["edu_school"], data["edu_prog"], data["edu_years"]), s_small)]
    edu.append(Paragraph(" &nbsp;&bull;&nbsp; ".join(data["edu_lines"]), s_body))
    section(data["edu_h"], edu)

    exp = []
    for job in data["jobs"]:
        for i, r in enumerate(job["roles"]):
            head = [[Paragraph("<b>%s</b>%s" % (r["t"], "" if i else " \u2014 " + job["org"]), s_title),
                     Paragraph(r["d"], s_date)]]
            t = Table(head, colWidths=[W * 0.74, W * 0.26])
            t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"),
                                   ("LEFTPADDING", (0, 0), (-1, -1), 0),
                                   ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                                   ("TOPPADDING", (0, 0), (-1, -1), 1),
                                   ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
            exp.append(t)
            exp.append(Paragraph(r["x"], s_body))
        if job.get("prog"):
            p = Table([[Paragraph("<b>%s</b>" % job["prog"], s_prog)]], colWidths=[W])
            p.setStyle(TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), WASH),
                ("BOX", (0, 0), (-1, -1), 0.6, ACCENT),
                ("INNERPADDING", (0, 0), (-1, -1), 3),
                ("TOPPADDING", (0, 0), (-1, -1), 2),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
            ]))
            exp.append(p)
        if job.get("note"):
            exp.append(Paragraph(job["note"], s_note))
        exp.append(Spacer(1, 2))
    section(data["exp_h"], exp)

    cols = []
    for g, items in data["skills"]:
        cell = [Paragraph("<b>%s</b>" % g, s_skill_h)]
        cell.append(Paragraph("<br/>".join("\u2022&nbsp; " + it for it in items), s_skill))
        cols.append(cell)
    sk = Table([cols], colWidths=[W / 3.0] * 3)
    sk.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"),
                            ("BACKGROUND", (0, 0), (-1, -1), HexColor("#f4f6f9")),
                            ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                            ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
                            ("LEFTPADDING", (0, 0), (-1, -1), 5),
                            ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                            ("TOPPADDING", (0, 0), (-1, -1), 4),
                            ("BOTTOMPADDING", (0, 0), (-1, -1), 4)]))
    section(data["skills_h"], [sk])

    section(data["lang_h"], [Paragraph(
        " &nbsp;&bull;&nbsp; ".join("<b>%s</b> \u2014 %s" % l for l in data["langs"]), s_body)])

    certs = []
    for title, org, text, note in data["certs"]:
        certs.append(Paragraph("<b>%s</b> \u2014 %s: %s <i>%s</i>" % (title, org, text, note), s_body))
    section(data["cert_h"], certs)

    section(data["int_h"], [Paragraph(
        " &nbsp;&bull;&nbsp; ".join("<b>%s</b> \u2014 %s" % i for i in data["interests"]), s_body)])

    section(data["ref_h"], [Paragraph(" ".join(data["refs"]), s_body)])

    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE, spaceAfter=4))
    story.append(Paragraph(
        "%s &nbsp;|&nbsp; %s" % (
            link(data["self_url"], "EN"), link(data["other_url"], "SV"),
        ), s_foot))

    doc.build(story)
    print("wrote", out_path)


if __name__ == "__main__":
    import os
    os.makedirs("pdfs", exist_ok=True)
    build_pdf(EN, True, "pdfs/Advaiya-Bahl-CV-EN.pdf")
    build_pdf(SV, False, "pdfs/Advaiya-Bahl-CV-SV.pdf")

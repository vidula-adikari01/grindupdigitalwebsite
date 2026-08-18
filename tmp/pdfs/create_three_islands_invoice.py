from datetime import date, timedelta
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Image, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "output" / "pdf" / "GrindUp_Digital_Three_Islands_Motel_Quote.pdf"
LOGO = ROOT / "public" / "logo" / "digital-logo-purple.png"

PAGE_W, PAGE_H = A4
MARGIN_X = 0.62 * inch
MARGIN_TOP = 0.66 * inch
MARGIN_BOTTOM = 0.48 * inch

today = date(2026, 7, 29)
valid_until = today + timedelta(days=14)

INK = colors.HexColor("#303030")
MUTED = colors.HexColor("#727272")
DARK = colors.HexColor("#3D3F3A")
LINE = colors.HexColor("#A8A8A8")
BLUE = colors.HexColor("#3F7FEA")
PURPLE = colors.HexColor("#7244F4")


styles = getSampleStyleSheet()
styles.add(ParagraphStyle("Company", fontName="Helvetica-Bold", fontSize=12.5, leading=16, textColor=INK))
styles.add(ParagraphStyle("Body", fontName="Helvetica", fontSize=10.5, leading=15, textColor=INK))
styles.add(ParagraphStyle("BodyMuted", parent=styles["Body"], textColor=MUTED))
styles.add(ParagraphStyle("BillName", fontName="Helvetica-Bold", fontSize=10.5, leading=15, textColor=BLUE))
styles.add(ParagraphStyle("QuoteTitle", fontName="Helvetica", fontSize=34, leading=38, textColor=colors.black, alignment=TA_RIGHT))
styles.add(ParagraphStyle("QuoteNo", fontName="Helvetica-Bold", fontSize=11.2, leading=14, textColor=INK, alignment=TA_RIGHT))
styles.add(ParagraphStyle("HeaderCell", fontName="Helvetica-Bold", fontSize=9.6, leading=12, textColor=colors.white))
styles.add(ParagraphStyle("HeaderRight", parent=styles["HeaderCell"], alignment=TA_RIGHT))
styles.add(ParagraphStyle("Item", fontName="Helvetica", fontSize=9.8, leading=13, textColor=MUTED))
styles.add(ParagraphStyle("Cell", fontName="Helvetica", fontSize=9.8, leading=13, textColor=colors.black))
styles.add(ParagraphStyle("CellRight", parent=styles["Cell"], alignment=TA_RIGHT))
styles.add(ParagraphStyle("Section", fontName="Helvetica-Bold", fontSize=10.2, leading=13, textColor=colors.black, alignment=TA_CENTER))
styles.add(ParagraphStyle("TotalLabel", fontName="Helvetica-Bold", fontSize=9.8, leading=13, textColor=colors.black, alignment=TA_RIGHT))
styles.add(ParagraphStyle("TotalAmount", fontName="Helvetica-Bold", fontSize=9.8, leading=13, textColor=colors.black, alignment=TA_RIGHT))
styles.add(ParagraphStyle("Small", fontName="Helvetica", fontSize=8.1, leading=10.5, textColor=MUTED))


def p(text, style="Body"):
    return Paragraph(text, styles[style])


def amount(value):
    if isinstance(value, str):
        return value
    return f"{value:,.2f}"


def page_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#D0D0D0"))
    canvas.line(MARGIN_X, 0.34 * inch, PAGE_W - MARGIN_X, 0.34 * inch)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.4)
    canvas.drawString(MARGIN_X, 0.2 * inch, "GrindUp Digital - Quote")
    canvas.drawRightString(PAGE_W - MARGIN_X, 0.2 * inch, f"Page {doc.page}")
    canvas.restoreState()


def build_header():
    logo = Image(str(LOGO), width=2.5 * inch, height=0.6 * inch)
    left = [
        [logo],
        [p("GrindUp Digital", "Company")],
        [p("Sri Lanka<br/>grindupdigital@gmail.com<br/>+94 71 72 95 202", "Body")],
    ]
    right = [
        [p("QUOTE", "QuoteTitle")],
        [p("# QT-20260729", "QuoteNo")],
    ]
    table = Table(
        [[Table(left, colWidths=[3.2 * inch]), Table(right, colWidths=[3.1 * inch])]],
        colWidths=[3.35 * inch, 3.3 * inch],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def build_bill_block():
    bill = Table(
        [
            [
                p("Bill To<br/><font color='#3F7FEA'><b>Udeshika Gunathilaka</b></font><br/>Three Islands Motel<br/>Ontario, Canada", "Body"),
                p(f":&nbsp;&nbsp;&nbsp;&nbsp; {today.strftime('%d %b %Y')}<br/>Valid Until: {valid_until.strftime('%d %b %Y')}<br/>Currency: USD", "Body"),
            ]
        ],
        colWidths=[4.55 * inch, 2.1 * inch],
    )
    bill.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return bill


def section_divider(title):
    return Paragraph(f"-------------------- {title} --------------------", styles["Section"])


def build_items_table():
    professional = [
        ("Custom Hotel Website Design & Development", 1, 0),
        ("WordPress CMS Setup & Configuration", 1, 0),
        ("Theme & UI Development", 1, 0),
        ("Hotel Booking System Setup (Vik Booking)", 1, 0),
        ("OTA Channel Manager Integration", 1, 0),
        ("Payment Gateway Integration", 1, 0),
        ("Responsive Mobile & Tablet Optimization", 1, 0),
        ("Basic SEO Setup", 1, 0),
        ("Performance & Security Optimization", 1, 0),
        ("Contact Forms & Email Configuration", 1, 0),
        ("Google Analytics & Search Console Setup", 1, 0),
        ("Testing, QA & Website Launch", 1, 0),
    ]

    third_party = [
        ("Domain Registration (Annual)", 1, "TBD"),
        ("Cloudways Managed Cloud Hosting - DigitalOcean Micro Cloud Infrastructure", 1, "14.00 / mo"),
        ("Elementor Pro (Annual)", 1, "59.00"),
        ("Vik Booking Pro License (One-Time)", 1, "170.00"),
        ("Vik Channel Manager License (One-Time)", 1, "100.00"),
        ("e4jConnect Subscription (Annual)", 1, "TBD"),
    ]

    rows = [
        [p("#", "HeaderCell"), p("Item & Description", "HeaderCell"), p("Qty", "HeaderRight"), p("Amount", "HeaderRight")]
    ]

    index = 1
    for item, qty, price in professional:
        rows.append([p(str(index), "Cell"), p(item, "Item"), p(f"{qty:.2f}", "CellRight"), p(amount(price), "CellRight")])
        index += 1

    rows.append(["", p("PROFESSIONAL SERVICES TOTAL", "TotalLabel"), "", p("0.00", "TotalAmount")])
    rows.append(["", section_divider("THIRD-PARTY SERVICES (CLIENT OWNED)"), "", ""])

    for item, qty, price in third_party:
        rows.append([p(str(index), "Cell"), p(item, "Item"), p(f"{qty:.2f}", "CellRight"), p(amount(price), "CellRight")])
        index += 1

    rows.append(["", p("THIRD-PARTY SERVICES TOTAL", "TotalLabel"), "", p("329.00 + 14.00/mo + TBD", "TotalAmount")])
    rows.append(["", p("GRAND TOTAL", "TotalLabel"), "", p("329.00 + 14.00/mo + TBD", "TotalAmount")])

    table = Table(rows, colWidths=[0.48 * inch, 4.42 * inch, 0.78 * inch, 1.48 * inch], repeatRows=1)
    style = TableStyle(
        [
            ("BACKGROUND", (0, 0), (-1, 0), DARK),
            ("LINEBELOW", (0, 0), (-1, 0), 0, DARK),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (-1, -1), 7),
            ("RIGHTPADDING", (0, 0), (-1, -1), 7),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ("LINEBELOW", (0, 1), (-1, -1), 0.65, LINE),
            ("SPAN", (1, len(professional) + 2), (2, len(professional) + 2)),
            ("SPAN", (1, len(professional) + 3), (2, len(professional) + 3)),
            ("SPAN", (1, len(rows) - 2), (2, len(rows) - 2)),
            ("SPAN", (1, len(rows) - 1), (2, len(rows) - 1)),
            ("LINEABOVE", (0, len(professional) + 3), (-1, len(professional) + 3), 0.8, LINE),
            ("LINEBELOW", (0, len(professional) + 3), (-1, len(professional) + 3), 0.8, LINE),
            ("TOPPADDING", (0, len(professional) + 3), (-1, len(professional) + 3), 10),
            ("BOTTOMPADDING", (0, len(professional) + 3), (-1, len(professional) + 3), 10),
        ]
    )
    table.setStyle(style)
    return table


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=MARGIN_X,
        rightMargin=MARGIN_X,
        topMargin=MARGIN_TOP,
        bottomMargin=MARGIN_BOTTOM,
    )

    story = [
        build_header(),
        Spacer(1, 0.42 * inch),
        build_bill_block(),
        Spacer(1, 0.28 * inch),
        build_items_table(),
        Spacer(1, 0.12 * inch),
        p("Note: Professional service pricing can be updated once the agreed project fee is confirmed. Third-party services remain client-owned and may be billed directly by each provider.", "Small"),
    ]

    doc.build(story, onFirstPage=page_footer, onLaterPages=page_footer)
    print(OUTPUT)


if __name__ == "__main__":
    build()

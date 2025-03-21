"use client";
import { useEffect, useState, useCallback } from "react";
import Breadcrumbs from "../../components/Breadcrumb";
import Feedback from "../../components/Feedback";
import Sidebar from "../../components/sidebar";
import PageHeader from "../../components/PageHeader";
import TextLink from "../../components/textlink";

// Reusable Section component that either renders a list (if `data` is provided)
// or renders custom children.
const Section = ({ title, data, children, id }) => (
  <section className="mb-8" id={id}>
    <h2 className="my-[40px] text-[40.5px] font-[400] leading-[44.55px] tracking-[-0.9px]">
      {title}
    </h2>
    {data ? (
      <ul className="space-y-4">
        {data.map((item, index) => (
          <li key={index}>
            <p className="text-[18px] leading-[25.5px] font-[700]">
              {item.category}
            </p>
            <p className="my-[18px] leading-[25.5px] text-[18px]">
              {item.details}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <div>{children}</div>
    )}
  </section>
);

export default function Careers() {
  const sidebarLinks = [
    { title: "Overview", href: "#Overview" },
    { title: "Accountancy profession", href: "#Accountancyprofession" },
    { title: "Preparerslevy", href: "#Accountancyprofession" },
    { title: "Accountancy profession", href: "#Accountancyprofession" },
    { title: "Accountancy profession", href: "#Accountancyprofession" },
    { title: "Accountancy profession", href: "#Accountancyprofession" },
    { title: "Accountancy profession", href: "#Accountancyprofession" },
  ];

  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setShowBackToTop(window.scrollY > 1500);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About the FRC", href: "/about-us" },
  ];


  return (
    <div className="font-[18px] text-[#0b0c0c] px-6">
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title="Tribunals"
        published="Published: 13 September 2023"
        readTime="3 MINUTE READ"
      />

      {/* Pie_chart_showing_the_FRC_purpose_and_values_.webp */}
      <div className="mx-auto grid md:grid-cols-3 gap-5">
        {/* Main Content */}
        <main className="md:col-span-2">
          <Section title="Overview" id="Overview">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              On 17 June 2016, the FRC became the 'competent authority' for
              audit in the UK[1] . We now enforce Audit requirements under the{" "}
              <TextLink
                link={{
                  title: "Accountancy",
                  href: "/documents/7127/Financial_Reporting_Council_Plan_and_Budget_2024-25_QLMohMA.pdf",
                }}
              />{" "}
              and{" "}
              <TextLink
                link={{
                  title: "Actuarial Schemes",
                  href: "/documents/7127/Financial_Reporting_Council_Plan_and_Budget_2024-25_QLMohMA.pdf",
                }}
              />{" "}
              (Schemes).
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The AEP has an early administrative stage which provides
              opportunities to dispose of an enforcement matter without
              necessarily needing to go to a FRC Tribunal hearing – although
              that option is always available. The Schemes do not contain those
              initial (executive and committee) stages before a Tribunal hearing
              although settlement discussions can be entered into at any stage.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The FRC Tribunals which apply the AEP and the Schemes are composed
              of either three or five individuals drawn from a Panel of Tribunal
              members. Tribunals will always include a majority of
              non-accountants or actuaries. The Chair of every Tribunal will be
              a qualified lawyer of suitable experience. Every three person
              Tribunal will also include an accountant or actuary and a lay
              person. Every five person Tribunal will include at least one, but
              no more than two, accountants or actuaries, a lay person and a
              further lay or legally qualified person. To ensure their
              independence no member of a Tribunal may be an officer or employee
              of any of the professional bodies or of the FRC.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Tribunal hearings are normally be open to the public except in
              exceptional circumstances where the Tribunal decides that this
              would not be in the interests of justice. Normally, if the case is
              contested, the Tribunal will be presented with evidence in the
              case. Witnesses may be called and asked to give oral evidence.
              They may be cross-examined.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Tribunal hearings are similar to hearings in court but less formal
              and the Tribunal will not be subject to the same restrictions as a
              court might be in accepting evidence. The individual or firm
              against whom the complaint has been brought is entitled to attend
              and be legally represented at all hearings and will have the
              opportunity to defend any allegations made against them, to
              present evidence and to challenge evidence against them.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              If the Tribunal makes an adverse finding, it can impose a number
              of sanctions or combination of sanctions, depending on the
              applicable procedure. The available sanctions are listed in the
              AEP and in an Appendix at the back of the Schemes. It can also
              order the individual or firm to pay all or part of the costs of
              the investigation and hearing. If the Tribunal dismisses the
              matter, it can order the FRC to pay all or part of the legal costs
              of the individual or firm concerned if it is satisfied that the
              FRC behaved unreasonably in bringing or pursuing the matter.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              <i>
                {" "}
                FRC Tribunals cannot order compensation to be paid to victims of
                the misconduct.
              </i>
            </p>
          </Section>
          <Section title="Appeals" id="Appeals">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              A respondent can seek leave to appeal against an adverse finding
              and/or order imposed by the Tribunal on certain grounds. If leave
              to appeal is granted, the Convener will appoint an Appeal
              Tribunal. Appeal Tribunals are constituted in the same way and
              subject to the same restrictions as Tribunals. An appeal is a
              review and not a rehearing.
            </p>
          </Section>
          <Section
            title="Appointments to the Tribunal Panels"
            id="Preparerslevy"
          >
            <p className="mb-[18px] text-[18px] leading-[25.5px]">
              Appointments to the Tribunal Panels are made by the independent
              Appointments Committee.
            </p>
          </Section>
          <Section title="Tribunal Panel members" id="TribunalPanel">
            <p className="my-[48px] text-[31.5px] leading-[25.5px]">
              The Hon Lady Wolffe
            </p>
            <p className="mb-[18px] text-[18px] leading-[25.5px] font-[700]">
              Legal Chair
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Sarah P L Wolffe, KC (The Hon Lady Wolffe), is a Professor and
              Honorary Professor, respectively, of the Law Schools of
              Strathclyde University and Edinburgh University. Her areas of
              research and teaching include commercial and insolvency law, and
              civil justice.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Immediately prior to assuming these professorships (November
              2021), Sarah sat as a Commercial Judge in the Court of Session,
              the first woman to be so appointed; presiding in that capacity in
              2016 to 2017 and 2018 to 2021. She was appointed to the Court of
              Session, Scotland’s Supreme Courts, in 2014.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Other current appointments include: General Council Assessor on
              the Court of Edinburgh University; President of the Stair Society
              (promoting the study of Scottish legal history); Honorary Chair of
              the Edinburgh Centre for Commercial Law; Member of the Advisory
              Board for Women in Law (University of Edinburgh); and member of
              the Executive of the Conference on European Restructuring and
              Insolvency Law (CERIL).
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Sarah was called to the Scottish Bar in 1994; appointed a standing
              junior to the DTI (and successors) in 1996; took silk in 2008 and
              was a founding member of Axiom Advocates, practising principally
              in Commercial and Public law.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              She contributed to or was theScottish editor of several editions
              of{" "}
              <i>
                MacGillivray on Insurance Law (including the 15th ed) and of
                Director’s Disqualification.
              </i>{" "}
              She was one of the UK members on the Expert Group on professional
              indemnity insurance of the CCBE (Council of European Bars and Law
              Societies).Prior to judicial appointment, Sarah was Chancellor to
              the Bishops (of two dioceses) in the Scottish Episcopal Church.
              Sarah was born in the United States. Her first degree was from
              Dartmouth College (graduating Summa cum Laude and Phi Beta Kappa).
              Following post-graduate studies at Balliol College, Oxford, she
              graduated from Edinburgh University LLB with Distinction. She is a
              trained mediator.
            </p>
          </Section>
          <Section title="Sir Kenneth Parker" id="KennethParker">
            <p className="mb-[18px] text-[18px] leading-[25.5px] font-[700]">
              Legal Chair
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Sir Kenneth Parker is a retired High Court Judge, Queen's Bench
              Division. He was educated at Kettering Grammar School and Exeter
              College, Oxford (classical scholarship), where he obtained first
              class honours in Literae Humaniores and the BCL (Vinerian
              Scholar). In 1973 he became a Fellow of his College and University
              Lecturer in Law. He began practice at the bar in 1977 at Monckton
              Chambers, where he specialised in competition and regulatory law,
              increasingly with an EU dimension. Many of his cases involved
              complex issues of economics and accounting. He became a KC in
              1992, and developed a broader practice involving public law,
              including many appearances on behalf of the UK in the ECJ in
              Luxembourg. In 2002 he became joint head of Monckton Chambers. In
              1997 he became a Recorder and a Member of the Information Tribunal
              for national security appeals; and in 2006 a Law Commissioner
              (public law) and a deputy High Court Judge. In 2009 he was
              appointed to the High Court Bench and knighted. As a judge in the
              Administrative Court he frequently heard claims that raised
              important financial or regulatory issues. He retired from the High
              Court at the end of 2015. He is a Master of the Bench of Gray's
              Inn.
            </p>
          </Section>
          <Section title="Adrian Jack" id="AdrianJack">
            <p className="mb-[18px] text-[18px] leading-[25.5px] font-[700]">
              Legal Chair
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Adrian Jack was born and largely brought up in Australia, where he
              was an open scholar at the Sydney Grammar School. After studying
              law at Hertford College, Oxford, he was in 1986 called to the bar
              by the Middle Temple, where he was elected a bencher in 2016. He
              started his practice in common law chambers in the Temple where he
              did both criminal and civil cases. He developed a speciality in
              professional negligence and moved to Chancery/commercial chambers
              in Lincoln’s Inn in 1998. In 2000 he was admitted to the German
              bar and subsequently appeared in many cross-border commercial
              cases. He left the bar in 2014 for a full-time post as a justice
              of the Supreme Court of Gibraltar, where he had responsibility for
              the civil and commercial list, until the expiry of his contract in
              2017. In 2019 he was admitted to the bar of the Turks and Caicos
              Islands, where he practised briefly, before being appointed that
              year as a full-time justice of the Commercial Division of the
              Eastern Caribbean Supreme Court in the British Virgin Islands. His
              contract as a BVI Commercial Court judge ends this year. He will
              resume sitting in England and Wales in his capacity as a recorder
              of the Crown Court, with authorisation to sit as a High Court
              judge, and as a tribunal judge.
            </p>
          </Section>
          <Section title="Nicholas Stewart KC" id="Pensionlevy">
            <p className="mb-[18px] text-[18px] leading-[25.5px] font-[700]">
              Legal Chair
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Nicholas Stewart practised as a barrister at the Chancery Bar from
              1972 to 2022 and now works as an independent arbitrator,
              adjudicator and mediator in commercial and sports matters and on
              various disciplinary tribunals.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              He has been an arbitrator at the Court of Arbitration for Sport,
              Lausanne, since 2015, is a member of the World Rugby Anti-Doping
              Judicial Panel and is an Honorary Professor of Law at the
              University of Leicester.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Nicholas was appointed Queen’s Counsel in 1987 and was a Deputy
              High Court Judge in the Chancery Division from 1991 to 2022. He is
              a Fellow of the Chartered Institute of Arbitrators, a CEDR
              accredited mediator and has a Certified Diploma in Accounting and
              Finance from the Association of Certified Chartered Accountants.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              He won an open exhibition to Worcester College, Oxford, where he
              read Philosophy, Politics and Economics, and also has a BA (1st
              class honours) in German and Spanish awarded in 2015 by Birkbeck,
              University of London.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Nicholas is a bencher of the Honourable Society of the Inner
              Temple and was President of the Union Internationale des Avocats
              2001-2. He chaired the Bar Human Rights Committee of England and
              Wales 1994-98 and has been on trial observations and human rights
              missions in Colombia, Croatia, Guatemala, Mexico and Turkey. From
              2008 to 2016 he was chair of the Dialogue Advisory Group,
              Amsterdam, a leading international group facilitating dialogue in
              armed and other serious international conflicts; and from 2003 to
              2006 was on the President’s Advisory Panel at the International
              Criminal Tribunal for the former Yugoslavia in The Hague.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              His publications include Stewart, Campbell & Baughen: The Law of
              Unincorporated Associations (Oxford University Press, 2011) and a
              contribution of precedents to the leading German sports law book
              Beck’sches Formularbuch: Sportrecht (C.H. Beck, Munich, 2021).
            </p>
          </Section>
          <Section
            title="Third Country Auditors – Registration and renewal fees"
            id="Pensionlevy"
          >
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              A third country auditor seeking registration in the UK must pay to
              the FRC a fee upon application and an annual fee thereafter for
              renewal of its registration in accordance with the Third Country
              Auditors (Fees) Instrument 2021. This fee is based upon our
              anticipated costs to administer the regime. The amounts payable
              are determined by the anticipated cost of processing applications
              from each of the three categories of registration; Equivalent,
              Transitional or Full. Audit firms from countries which have not
              been assessed as having audit oversight, monitoring and discipline
              regimes equivalent to those of the UK or regimes which are moving
              in that direction involve the greatest amount of processing and
              therefore incur the highest fees.
            </p>
          </Section>
          <Section
            title="Peter Susman KC"
            id="Pensionlevy"
          >
            <p className="my-[18px] text-[18px] leading-[25.5px]">
            Peter Susman practises as a KC from Henderson Chambers, now specialising in IT, commercial and property litigation. He was educated at Dulwich College; Lincoln College, Oxford (where as Oldfield Law Scholar he read law); and the University of Chicago Law School (British Commonwealth Fellow and Fulbright Scholar). He was for 18 months an associate corporate lawyer with a leading New York City law firm. For over 25 years he was a Recorder, sitting in the County Court, Crown Court and the Technology and Construction Court; for 9 years sat as Vice-Chairman of the Appeal Committee of the Institute of Chartered Accountants of England & Wales; for 5 years chaired the Bar’s IT Panel; and in Ofcom’s initial 2 years was standing counsel to that regulator. He acts as arbitrator and mediator, particularly in IT disputes. He is a Bencher of Middle Temple, and was for 6 years Master of its Library.
            </p>
          </Section>
        </main>
        <Sidebar
          sidebarLinks={sidebarLinks}
          showBackToTop={showBackToTop}
          scrollToTop={scrollToTop}
        />
      </div>
      <Feedback />
    </div>
  );
}

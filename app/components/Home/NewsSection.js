import LinkWithIcon from "../LinkWithIcon";
import { Icon } from "@iconify/react";

const newsItems = [
  {
    title: "Investigation regarding an audit by Ernst & Young LLP",
    date: "13 March 2025",
    link: "#",
  },
  {
    title: "FRC launches public beta of digital tool to transform access to company data",
    date: "10 March 2025",
    link: "#",
  },
  {
    title: "Investigation regarding the conduct of two accountants",
    date: "13 February 2025",
    link: "#",
  },
  {
    title: "Roundtable Invitation: SME Market Study",
    date: "7 March 2025",
    link: "#",
  },
  {
    title: "FRC issues updated guidance to support going concern reporting",
    date: "25 February 2025",
    link: "#",
  },
  {
    title: "Investigation regarding the conduct of two individual accountants in relation to Woking Borough Council’s operations and investment activities",
    date: "3 February 2025",
    link: "#",
  },
  {
    title: "Local Audit Leadership transferred to MHCLG",
    date: "12 February 2025",
    link: "#",
  },
];

const consultations = [
  {
    title:
      "Consultation on Technical Actuarial Standard 300: Pensions (December 2024)",
    deadline: "10 March 2025",
    link: "#",
  },
];

export default function NewsSection() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Latest News Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-[31.5px] font-bold mb-4">Latest News</h2>
        <ul className="space-y-4">
          {newsItems.map((news, index) => (
            <li key={index} className="flex items-start ">
              <Icon
                icon="material-symbols:chat-outline"
                width="24"
                height="24"
                color="#034996"
              />
              <div>
                <div className="hover:text-[#1e60a1]">
                <LinkWithIcon
                  title={news.title}
                  href={news.link}
                  icon={false}
                />
                </div>
               

                <p className="leading-[25.2px] text-[18px]  ml-3">Published: {news.date}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="text-[20.25px] ml-9 mt-4 px-4 py-2 bg-[#034996;] text-white font-bold  hover:bg-[#1e60a1] cursor-pointer">
          View all news
        </button>
      </div>

      {/* Open Consultations Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-[31.5px] font-bold mb-4">Open Consultations</h2>
        <ul className="space-y-4">
          {consultations.map((consultation, index) => (
            <li key={index} className="flex items-start ">
            <Icon
              icon="material-symbols:chat-outline"
              width="24"
              height="24"
              color="#034996"
            />
            <div>
            <div className="hover:text-[#1e60a1]">
              <LinkWithIcon
                title={consultation.title}
                href={consultation.link}
                icon={false}
              />
            </div>
              <p className="leading-[25.2px] text-[18px] ml-3">Published: {consultation.deadline}</p>
            </div>
          </li>
          ))}
        </ul>
        <button  className="text-[20.25px]  ml-9 mt-4 px-5 py-2 bg-[#034996] text-white font-bold  hover:bg-[#1e60a1] cursor-pointer">
          View all consultations
        </button>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Hero() {
  const [searchText, setSearchText] = useState("");

  const contentData = [
    {
      title:
        "FRC welcomes Government legislation to modernise regulatory toolkit",
      text: "The King's Speech set out the Government's intention to create ARGA and strengthen audit, corporate governance, and financial reporting.",
    },
    {
      title: "FRC launches campaign to support SMEs",
      text: "Initiative to support access to audit services and reduce reporting burdens where possible.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#f2f2f2",
        backgroundImage:
          "url('https://media.frc.org.uk/images/London_at_Sunrise_zosXIoG.61f01749.fill-1440x750.png')",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
      }}
      className="relative w-full px-10 py-20 border-b-4 border-[#87b3f4]"
    >
      {/* Content Wrapper */}
      <div className="relative z-10  space-y-6 w-full">
        {contentData.map((item, index) => (
          <div key={index} className=" bg-white/90 px-[20px] py-[30px] shadow-lg max-w-[780px] flex flex-col space-y-5 w-full" >
            <h2 className="text-[26px] md:text-[31.5px] font-bold leading-[34.6px] tracking-[-0.9px]">{item.title}</h2>
            <a  href="#" className="flex items-center justify-center mt-2 text-black hover:underline text-[18px] md:text-[22.25px] font-[700]">
            {item.text} <Icon icon="uim:angle-right-b" width="24" height="24" />
              </a>
          </div>
        ))}

        {/* Search Bar */}
        <div className="flex justify-center items-center w-full">
          <div className="relative w-full">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search..."
              className="bg-white border-white text-[22.5px] border-solid p-[10px] w-full py-3 px-4 pr-2 border focus:ring-2 focus:ring-blue-500"
            />

            {searchText && (
              <button
                className="absolute right-[65px] top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
                onClick={() => setSearchText("")}
              >
                <Icon icon="ic:round-close" width="28" height="28" />
              </button>
            )}

            {/* Angle-right (search) icon */}
            <button className="absolute right-[1] top-1/2 transform -translate-y-1/2 bg-[#1d70b8] text-white h-[57px] w-[60px] flex items-center justify-center">
              <Icon icon="fontisto:angle-right" width="30" height="30" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

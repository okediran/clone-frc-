"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const Card = ({ title, description, link, imgsrc }) => {
  return (
    <div className={`relative border ${!imgsrc && "border-t-40 border-l-4"} border-[#3f7bac] w-95 bg-white min-h-[400px] mt-6 shadow-md`}>
      {/* <div className="bg-[#3f7bac] h-10"></div> */}
      {imgsrc && <Image src={imgsrc}  alt="image" width={500} height={50} className="object-cover"/>}
      <div className="p-6 pt-[10px]">
        <Link href={link} className="text-[27px] font-[700] tracking-[-0.9px] underline  hover:text-[#2a5f87]">
          {title}
        </Link>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>

      {/* Bottom Border Styling */}
     { imgsrc && <div className="absolute bottom-0 left-0 w-full flex">
        <div className="bg-[#3f7bac] h-[10px] w-2/3"></div>
        <div className="bg-[#87b3f4] h-[10px] w-1/5"></div>
        <div className="bg-[#4b68aa] h-[10px] w-1/5"></div>
      </div>}
    </div>
  );
};

export default Card;

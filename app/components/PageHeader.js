"use client";
// Reusable header for the page
import { Icon } from "@iconify/react";
const PageHeader = ({ title, published, readTime, text,children  }) => (
  <div className="mb-11 ">
    <h1 className="text-[54px] tracking-[-0.9px] leading-[59.4px] font-[400] mb-4 ">
      {title}
    </h1>
    <p className="text-[14.625px] leading-[21.9375px] font-[700] mb-1 tracking-[1.8px] uppercase">
      {published}
    </p>
    <p className="flex gap-2.5 text-[14.625px] leading-[21.9375px] tracking-[1.8px] uppercase">
     {readTime && <Icon
        icon="material-symbols-light:timer-outline"
        width="24"
        height="24"
      />}
      {readTime}
    </p>
    <p className="leading-[25.2px] text-[18px] w-[65%]">{text}</p>
   {children}
  </div>
);
export default PageHeader;

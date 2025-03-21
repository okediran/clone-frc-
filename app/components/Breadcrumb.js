"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-23">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center underline">
            {item.href ? (
              <Link href={item.href} >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#0b0c0c]">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <Icon className="ml-2.5" icon="pepicons-pencil:angle-right" width="20" height="20" color='#505a5f'/>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

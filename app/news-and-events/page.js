"use client";

import React from "react";
import Card from "../components/card";
import PageHeader from "../components/PageHeader";
import Feedback from "../components/Feedback";

// sampleDocuments.js
const data = [
  {
    description:
      "View a listing of press notices and announcements issued by the FRC.",
    title: "News",
    link:""
  },
  {
    description:
      "View the listing of podcasts and videos that we regularly produce.",
    title: "Videos and podcasts",
    link:""

  },
  {
    description: "View our upcoming events.",
    title: "Events",
    link:""

  },
];
export default function page() {
  return (
    <div className="font-[18px] text-[#0b0c0c] mt-5 px-6">
      <PageHeader title="News and events">
        <span>
          The FRC regular publish news, podcasts and videos. We hold regular
          webinars and events <br /> covering the FRC's work.
        </span>
      </PageHeader>
      <div className="flex justify-between items-center mb-30 ">
        {data.map((data, index) => (
          <Card title={data.title} description={data.description} key={index} link={data.link}/>
        ))}
      </div>
      <Feedback />
    </div>
  );
}

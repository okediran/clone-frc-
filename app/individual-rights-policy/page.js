"use client";

import PageHeader from "../components/PageHeader";
import React from 'react'
import DocumentCard from "../components/DocumentCard";
import Feedback from "../components/Feedback";

// sampleDocuments.js
const sampleDocuments = [
    {
      name: "Individual Rights (Data Privacy) Policy",
      link: "#",
      publication :"26 October 2017",
      type: "Policy and responsibility",
      format: "PDF, 67.7 KB",
    }
  ];
  
export default function consultations() {
  return (
    <div className="w-[65%] px-6">
      <PageHeader
        title="Individual Rights (Data Privacy) Policy"
        published="Published: 25 September 2023"
        readTime=" 1 minute read"
      />
      <DocumentCard title="Documents" documents={sampleDocuments} paginate={false} color="#007eb5"/>
      <Feedback />

    </div>
  )
}

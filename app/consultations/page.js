"use client";

import PageHeader from "../components/PageHeader";
import React from 'react'
import DocumentCard from "../components/DocumentCard";
import Feedback from "../components/Feedback";

// sampleDocuments.js
const sampleDocuments = [
    {
      name: "Small and medium-sized enterprises (SME) market study",
      link: "#",
      closingDate: "25 April 2025",
      published: "3 February 2025",
    },
    {
      name: "Consultation on Technical Actuarial Standard 300: Pensions (December 2024)",
      link: "#",
      closingDate: "10 March 2025",
      published: "9 December 2024",
    }
  ];
  
export default function consultations() {
  return (
    <div className="w-[65%] px-6">
      <PageHeader
        title="Consultations"
        text="This page lists the Consultations carried out by the FRC."
      />
      <DocumentCard title="Documents" documents={sampleDocuments} paginate={false} color="#007eb5"/>
      <DocumentCard title="Documents" documents={sampleDocuments}  color="#bbc6c3"/>
      <Feedback />

    </div>
  )
}

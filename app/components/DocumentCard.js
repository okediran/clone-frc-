"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

// Reusable component to render a single document
function DocumentRow({ doc, color }) {
  return (
    <div
      className="p-3 flex flex-col gap-5"
      style={{ borderBottom: `${color} solid 4px` }}
    >
      {doc.name && doc.link && (
        <div className="flex gap-44">
          <span className="font-bold">Title: </span>
          <a
            href={doc.link}
            className="underline text-[20.25px] text-[#034996]"
          >
            {doc.name}
          </a>
        </div>
      )}

      {doc.closingDate && (
        <div className="flex gap-23">
          <span className="text-[20.25px] font-bold">Closing date: </span>
          <span className="text-[20.25px]">{doc.closingDate}</span>
        </div>
      )}

      {doc.published && (
        <div className="flex gap-30">
          <span className="text-[20.25px] font-bold">Published: </span>
          <span className="text-[20.25px]">{doc.published}</span>
        </div>
      )}

      {doc.publication && (
        <div className="flex gap-12">
          <span className="text-[20.25px] font-bold">Publication date: </span>
          <span className="text-[20.25px]">{doc.publication}</span>
        </div>
      )}
      {doc.type && (
        <div className="flex gap-42">
          <span className="text-[20.25px] font-bold">Type: </span>
          <span className="text-[20.25px] font-[700] uppercase">{doc.type}</span>
        </div>
      )}
      {doc.format && (
        <div className="flex gap-35">
          <span className="text-[20.25px] font-bold">Format: </span>
          <span className="text-[20.25px]">{doc.format}</span>
        </div>
      )}
    </div>
  );
}

// Component to render documents with pagination controls
function PaginatedDocuments({
  documents,
  itemsPerPage,
  renderDocuments,
  color,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(documents.length / itemsPerPage);

  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDocuments = documents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <div
        className="mb-12"
        style={{
          borderTop: `4px solid ${color}`,
          borderLeft: `4px solid ${color}`,
          borderRight: `4px solid ${color}`,
          borderBottom: "none",
        }}
      >
        {renderDocuments(currentDocuments)}
      </div>

      <div className="flex justify-between items-center">
        <p
          onClick={handlePrev}
          className="text-[#034996] py-2 rounded cursor-pointer underline underline-offset-6 flex items-center"
        >
          {currentPage === 1 ? (
            ""
          ) : (
            <>
              <Icon icon="solar:arrow-left-linear" width="24" height="24" />{" "}
              Previous
            </>
          )}
        </p>
        <span className="text-[22.5px]">
          Page{" "}
          <span className="underline underline-offset-6 text-[#034996]">
            {currentPage}{" "}
          </span>
          of {totalPages}
        </span>
        <p
          onClick={handleNext}
          className="text-[#034996] py-2 rounded cursor-pointer underline underline-offset-6 flex items-center"
        >
          {currentPage === totalPages ? (
            ""
          ) : (
            <>
              Next{" "}
              <Icon
                className="underline underline-offset-6"
                icon="solar:arrow-right-linear"
                width="24"
                height="34"
              />
            </>
          )}
        </p>
      </div>
    </>
  );
}

export default function DocumentCardPagination({
  title,
  documents,
  paginate = true, // New prop to enable/disable pagination
  itemsPerPage = 3, // Optional prop to set items per page
  color,
}) {
  // Reusable function to render documents list
  const renderDocuments = (docs) => (
    <div className="">
      {docs.map((doc, index) => (
        <DocumentRow key={index} doc={doc} color={color} />
      ))}
    </div>
  );

  return (
    <div className="mb-10">
      <div
        style={{
          borderTop: `4px solid ${color}`,
          borderLeft: `4px solid ${color}`,
          borderRight: `4px solid ${color}`,
          borderBottom: "none",
        }}
      >
        {title && (
          <h3
            className="text-white font-bold p-2 "
            style={{ background: `${color}` }}
          >
            {title.toUpperCase()}
          </h3>
        )}
        {!paginate && renderDocuments(documents)}
      </div>
      {paginate && (
        <PaginatedDocuments
          documents={documents}
          itemsPerPage={itemsPerPage}
          renderDocuments={renderDocuments}
          color={color}
        />
      )}
    </div>
  );
}

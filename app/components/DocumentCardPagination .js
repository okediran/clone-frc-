import React, { useState } from "react";

export default function DocumentCardPagination({ title, documents }) {
  // Decide how many documents to show per page.
  // You could also pass this in as a prop if you want it to be dynamic.
  const [itemsPerPage] = useState(3);

  // Keep track of the current page number.
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages.
  const totalPages = Math.ceil(documents.length / itemsPerPage);

  // Handle going to the next page.
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Handle going to the previous page.
  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Calculate the slice indices for the current page.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDocuments = documents.slice(startIndex, endIndex);

  return (
    <div>
      <div className="border border-blue-500 rounded-lg shadow-md">
        {title && (
          <h3 className="bg-blue-500 text-white font-bold p-2 rounded-t-md">
            {title.toUpperCase()}
          </h3>
        )}

        {/* Render only the documents for the current page */}
        <div className="divide-y divide-blue-300">
          {currentDocuments.map((doc, index) => (
            <div key={index} className="p-4">
              <div>
                <span className="font-bold">Name: </span>
                <a href={doc.link} className="text-blue-600 hover:underline">
                  {doc.name}
                </a>
              </div>
              <div>
                <span className="font-bold">Publication date: </span>
                {doc.publicationDate}
              </div>
              {doc.type && (
                <div>
                  <span className="font-bold">Type: </span>
                  <span className="font-bold">{doc.type}</span>
                </div>
              )}
              <div>
                <span className="font-bold">Format: </span>
                {doc.format}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-between items-center p-4">
        {/* Hide "Previous" if on the first page */}
        <p
          onClick={handlePrev}
          // style={{ display: currentPage === 1 ? "none" : "block" }}
          className=" text-black px-4 py-2 rounded cursor-pointer"
        >
          {currentPage === 1 ? "" : "Previous"}
        </p>

        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>

        {/* Hide "Next" if on the last page */}
        <p
          onClick={handleNext}
          // style={{ display: currentPage === totalPages ? "none" : "" }}
          className=" text-black px-4 py-2 rounded cursor-pointer"
        >
          {currentPage === totalPages ? "" : "Next" }
          
        </p>
      </div>
    </div>
  );
}

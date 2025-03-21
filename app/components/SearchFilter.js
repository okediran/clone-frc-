"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function SearchFilter({ categories, items }) {
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [collapsedCategories, setCollapsedCategories] = useState(
    Object.keys(categories).reduce((acc, category) => {
      acc[category] = category !== "Topics"; // Expand only "Topics" initially
      return acc;
    }, {})
  );
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategoryCollapse = (category) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
    setActiveCategory(category); // Set active category
  };

  const toggleFilter = (category, option) => {
    setSelectedFilters((prev) => {
      const prevCategory = prev[category] || [];
      const updatedCategory = prevCategory.includes(option)
        ? prevCategory.filter((item) => item !== option)
        : [...prevCategory, option];

      return { ...prev, [category]: updatedCategory };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
    setActiveCategory(null);
  };

  const handleSearch = () => {
    setSearch(searchQuery);
  };

  // Filter logic
  const filteredItems = items.filter((item) => {
    const matchesSearch = search
      ? item.name.toLowerCase().includes(search.toLowerCase())
      : true;

    const matchesFilters = Object.entries(selectedFilters).every(
      ([category, filters]) =>
        filters.length > 0 ? filters.includes(item[category]) : true
    );

    return matchesSearch && matchesFilters;
  });

  // Show only items matching the active category
  const activeCategoryItems = activeCategory
    ? items.filter((item) => item[activeCategory])
    : filteredItems;

  return (
    <div className="max-w-6xl flex">
      {/* LEFT PANEL */}
      <div className="w-1/3 pr-4">
        <p className="font-[300] text-[24.75px] mb-[10px]">Search</p>
        <div className="mb-4 flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="px-3 py-2 w-full border-2"
          />
          <button
            className="bg-[#1d6fb7] text-white px-3 py-2"
            onClick={handleSearch}
          >
            <Icon icon="flowbite:angle-right-outline" width="24" height="24" />
          </button>
        </div>
        <p className="text-[24.75px] my-[40px] font-[300]">
          Filter search results
        </p>
        <button
          className="py-2 text-[14.625px] font=[700] mb-4 underline cursor-pointer flex items-center gap-1.5 text-[#034996]"
          onClick={clearFilters}
        >
          <Icon icon="material-symbols:cancel" width="14" height="14" />
          Clear All Filters
        </button>

        {Object.entries(categories).map(([category, options]) => {
          const isCollapsed = collapsedCategories[category] || false;
          return (
            <div key={category} className="mb-4">
              <div
                onClick={() => toggleCategoryCollapse(category)}
                className="flex items-center gap-1 cursor-pointer"
              >
                <h3 className="font-bold text-lg mb-2 text-[22.5px]">
                  {category}
                </h3>
                <motion.div
                  animate={{ rotate: isCollapsed ? 0 : 90 }} // Rotate icon
                  transition={{ duration: 0.3 }}
                >
                  <Icon icon="uil:angle-right-b" width="24" height="24" />
                </motion.div>
              </div>

              {!isCollapsed && (
                <>
                  {options.length === 0 ? (
                    <p className="text-gray-500">No matches found</p>
                  ) : (
                    options.map((option) => (
                      <label key={option} className="flex mb-2 items-center">
                        <div
                          className="h-[44px] w-[44px] border-2 border-black flex items-center justify-center cursor-pointer"
                          onClick={() => toggleFilter(category, option)}
                        >
                          {selectedFilters[category]?.includes(option) && (
                            <Icon
                              icon="mdi:check-bold"
                              width="34"
                              height="34"
                            />
                          )}
                        </div>
                        <span className="ml-2 font-[21.375px]">{option}</span>
                      </label>
                    ))
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* RIGHT PANEL - FILTERED RESULTS */}
      {/* RIGHT PANEL - FILTERED RESULTS */}
      <div className="w-2/3 pl-4">
        {search && (
          <p className="text-gray-600 text-[18px] mb-2">
            Search results for <span className="font-bold">“{search}”</span>
          </p>
        )}
        {/* Results Count */}
        {Object.values(selectedFilters).flat().length > 0 && (
          <p className="text-gray-600 text-[18px] mb-2">
            {activeCategoryItems.length} results found.
          </p>
        )}

        {/* Display selected filters */}
        {Object.entries(selectedFilters)
          .filter(([_, filters]) => filters.length > 0)
          .map(([category, filters]) => (
            <p key={category} className="text-[16px] font-medium mb-2">
              <strong>Selected {category}:</strong> {filters.join(", ")}
            </p>
          ))}

        {activeCategoryItems.length === 0 ? (
          <p className="text-gray-500">No results found</p>
        ) : (
          <ul className="list-disc pl-5">
            {activeCategoryItems.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.name}</strong> ({item.Topics}, {item.Types},{" "}
                {item["FRC Teams"]})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

import { Search } from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "Mughal",
  "Dravidian",
  "Colonial",
  "Kalinga",
];

const MonumentFilterBar = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <div className="bg-cream py-10 border-b border-gray-200">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-6">

        {/* Search Input */}
        <div className="relative w-full lg:w-[400px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

          <input
            type="text"
            placeholder="Search monuments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent bg-white"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all border
                ${
                  activeCategory === cat
                    ? "bg-accent text-primary border-accent shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MonumentFilterBar;
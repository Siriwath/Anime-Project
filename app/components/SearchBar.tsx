"use client";

import { useState } from "react";
import AnimeCard from "./AnimeCard";
import { Anime } from "../types/anime";

export default function SearchBar() {
  const [name, setName] = useState("");
  const [results, setResults] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);

  const searchFeature = async (animeName: string) => {
    if (!animeName.trim()) return;
    setLoading(true);

    try {
      const response = await fetch("/api/searchFeature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: animeName }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      const list: Anime[] = data?.data?.Page?.media || []; 
      setResults(list);
    } catch (error) {
      console.error("Failed to fetch:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row justify-between border border-black rounded-4xl px-5 py-2 w-[350px]">
        <input
          className="focus:outline-none w-[300px]"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search anime..."
        />
        <button
          onClick={() => searchFeature(name)}
          className="hover:cursor-pointer"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {results.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      ) : (
        !loading && <p>No results found.</p>
      )}
    </div>
  );
}






































// "use client";

// import { useState } from "react";

// interface SearchBarProps {
//   onSearch: (query: {
//     name?: string;
//     genre?: string;
//     averageScore?: number;
//     season?: string;
//     format?: string;
//   }) => void;
// }

// function SearchBar({ }) {
//     const [name, setName] = useState("");

//     return (
//         <div className="flex flex-row justify-between border-1 border-black rounded-4xl px-5 py-2 w-350">
//             <input
//                 className="focus:outline-none w-300"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Search anime..."
//             />

//             {/* <button onClick={() => onSearch({ name })}>Search</button> */}
//             <button className="hover:cursor-pointer">
//               Search
//             </button>
//         </div>
//     );
// }

// export default SearchBar;
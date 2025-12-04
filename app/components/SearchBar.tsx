"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: {
    name?: string;
    genre?: string;
    averageScore?: number;
    season?: string;
    format?: string;
  }) => void;
}

function SearchBar({ }) {
    const [name, setName] = useState("");

    return (
        <div className="flex flex-row justify-between border-1 border-black rounded-4xl px-5 py-2 w-350">
            <input
                className="focus:outline-none w-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Search anime..."
            />

            {/* <button onClick={() => onSearch({ name })}>Search</button> */}
            <button className="hover:cursor-pointer">
              Search
            </button>
        </div>
    );
}

export default SearchBar;
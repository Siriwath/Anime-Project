"use client";

import { useEffect, useState } from "react";
import AnimeCard from "./components/AnimeCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import AnimeSaved from "./components/AnimeSaved";

import { Anime } from "./types/anime";

export default function Explore() {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopAnime() {
      try {
        const res = await fetch("/api/randomizedCall", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "",
            genre: "",
            averageScore: "",
            season: "",
            format: "",
          }),
        });

        const data = await res.json();

        if (!Array.isArray(data)) {
          console.error("Unexpected API response:", data);
          setAnimeList([]);
        } else {
          setAnimeList(data);
        }

      } catch (err) {
        console.error("Error loading anime:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTopAnime();
  }, []);

  if (loading)
    return (
      <div className="bg-[#373E40] min-h-screen">
        <Navbar />
        <div className="my-25 mx-30">
          <h3 className="text-6xl font-semibold text-white">AniWatch</h3>
          <h4 className="text-lg font-normal text-white my-2">The comprehensive anime catalog</h4>
          <div className="flex flex-wrap flex-row gap-5 my-20">
            <p className="text-neutral-300 text-sm">loading anime..</p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-[#373E40] min-h-screen">
      <Navbar />
      <div className="my-25 mx-30">
        <h3 className="text-6xl font-semibold text-white">AniWatch</h3>
        <h4 className="text-lg font-normal text-white my-2">The comprehensive anime catalog</h4>
        <div className="flex flex-wrap flex-row gap-5 my-20">
          {animeList.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </div>
  );
}

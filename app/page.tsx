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

        const list: Anime[] = data?.data?.Page?.media || [];
        setAnimeList(list);
      } catch (err) {
        console.error("Error loading anime:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTopAnime();
  }, []);

  if (loading) return <h3>Loading top anime...</h3>;

  console.log(animeList);

  return (
    <div>
      <h3>Top 10 Anime</h3>

      <div className="anime-grid">
        {animeList.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>

  );
}

"use client";

import { useState } from "react";

import AnimeCard from "../components/AnimeCard"
import AnimeSaved from "../components/AnimeSaved"
import SearchBar from "../components/SearchBar"


export default function Explore() {
    const [animeList, setAnimeList] = useState([]);

    async function searchAnime() {
        const res = await fetch("/api/searchFeature",  {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: "",
                genre: "",
                averageScore: "",
                season: "",
                format: "",
            }),
        });

        const data = await res.json();

        setAnimeList(data?.data?.Page?.media || []);
    }

    return(
        <>
        {/* <SearchBar onSearch={searchAnime}></SearchBar> */}

        <div>
            <h3>Explore</h3>

            <div className="section">
                <h4>suggested genre</h4>
                <div>
                    {/* <AnimeCard></AnimeCard> */}
                </div>
            </div>

            <div className="section">
                <h4>suggested genre</h4>
                <div>
                    {/* <AnimeCard></AnimeCard> */}
                </div>
            </div>

            <div className="section">
                <h4>suggested genre</h4>
                <div>
                    {/* <AnimeCard></AnimeCard> */}
                </div>
            </div>
        </div>
        </>
    );
}
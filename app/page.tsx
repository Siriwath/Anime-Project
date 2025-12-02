import { StrictMode } from "react";
import Navbar from "./components/Navbar"
import AnimeCard from "./components/AnimeCard"
import AnimeSaved from "./components/AnimeSaved"
import SearchBar from "./components/SearchBar"


export default function Home() {
  return (
    <StrictMode>
        <Navbar></Navbar>
        <SearchBar></SearchBar>
        <div>
            <h2>website name</h2>
            <div>
                <AnimeCard></AnimeCard>
            </div>
        </div>
    </StrictMode>





        
  );
}

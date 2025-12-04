
import AnimeCard from "../components/AnimeCard"
import AnimeSaved from "../components/AnimeSaved"
import SearchBar from "../components/SearchBar"
import Navbar from "../components/Navbar";


export default function Watchlist() {
    return(
        <div className="bg-[#373E40]">
            <Navbar></Navbar>
            <div className="py-20">
                <SearchBar></SearchBar>
            </div>
        </div>
    );
}
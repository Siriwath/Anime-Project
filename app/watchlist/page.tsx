import AnimeCard from "../components/AnimeCard"
import AnimeSaved from "../components/AnimeSaved"
import SearchBar from "../components/SearchBar"
import Navbar from "../components/Navbar";


export default function Watchlist() {
    return(
        <>
        <Navbar></Navbar>
        <h3>My Watchlist</h3>
        <div>
            <AnimeSaved></AnimeSaved>
        </div>
        </>
    );
}
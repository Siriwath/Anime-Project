import AnimeCard from "../components/AnimeCard"
import AnimeSaved from "../components/AnimeSaved"
import SearchBar from "../components/SearchBar"


export default function Watchlist() {
    return(
        <>
        <h3>My Watchlist</h3>
        <div>
            <AnimeSaved></AnimeSaved>
        </div>
        </>
    );
}
import AnimeCard from "../components/AnimeCard"
import AnimeSaved from "../components/AnimeSaved"
import SearchBar from "../components/SearchBar"
import Navbar from "../components/Navbar";


export default function Watchlist() {
    return(
        <>
        <Navbar></Navbar>
        <div className="my-25 mx-50">
            <h3 className="text-4xl font-semibold">My Watchlist</h3>
            <div className="py-15">
                <AnimeSaved></AnimeSaved>
            </div>
        </div>
        </>
    );
}
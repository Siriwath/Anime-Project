import AnimeCard from "../components/AnimeCard"
import AnimeSaved from "../components/AnimeSaved"
import SearchBar from "../components/SearchBar"


export default function Search() {
    return(
        <>
        <SearchBar></SearchBar>

        <div>
            <h3>search query</h3>

            <div>
                <AnimeCard></AnimeCard>
            </div>
        </div>
        </>
    );
}
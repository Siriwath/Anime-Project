import AnimeCard from "../components/AnimeCard"
import AnimeSaved from "../components/AnimeSaved"
import SearchBar from "../components/SearchBar"


export default function Explore() {
    return(
        <>
        <SearchBar></SearchBar>
        <div>
            <h3>Explore</h3>

            <div className="section">
                <h4>suggested genre</h4>
                <div>
                    <AnimeCard></AnimeCard>
                </div>
            </div>

            <div className="section">
                <h4>suggested genre</h4>
                <div>
                    <AnimeCard></AnimeCard>
                </div>
            </div>

            <div className="section">
                <h4>suggested genre</h4>
                <div>
                    <AnimeCard></AnimeCard>
                </div>
            </div>
        </div>
        </>
    );
}
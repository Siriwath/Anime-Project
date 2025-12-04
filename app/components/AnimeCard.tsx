import { Anime } from "../types/anime";

interface Props {
  anime: Anime;
}


function AnimeCard({ anime }: Props) {
    return (
        <div>
            <div className="relative w-64 h-40 rounded-lg overflow-hidden cursor-pointer group">
                <img
                    src=""
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150 ease-out flex flex-col justify-end p-4">
                    <h2 className="text-white front-bold">{anime.title.english}</h2>

                    <h6>{anime.genres.join(", ")}</h6>
                    <button>add to watchlist</button>
                    <p>
                        {anime.description}
                    </p>
                </div>
            </div>
        </div>
    );
}


export default AnimeCard;
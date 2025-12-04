import { Anime } from "../types/anime";

interface Props {
  anime: Anime;
}

function AnimeCard({ anime }: Props) {
  return (
    <div className="relative w-100 overflow-visible"> {/* fixed width card */}

      {/* HOVER WRAPPER */}
      <div
        className="
          group 
          relative 
          transition-all 
          duration-300 
          ease-out 
          hover:-translate-y-4 
          hover:scale-[1.04]
          hover:z-30

          shadow-md
          hover:shadow-[0_12px_32px_rgba(0,0,0,0.55)]
        "
      >
        {/* IMAGE */}
        <div className="relative w-full h-60 rounded-lg overflow-hidden">
          <img
            src={anime.bannerImage ?? 'default.jpg'}
            className="
              w-full 
              h-full 
              object-cover 
              transition-transform 
              duration-300 
              brightness-75
              group-hover:scale-110
              group-hover:brightness-100
            "
          />
        </div>

        {/* FLOATING INFO PANEL */}
        <div
          className="
            absolute 
            left-0 
            right-0 
            top-full

            bg-neutral-900 
            text-white 
            rounded-lg 

            opacity-0 
            translate-y-2

            group-hover:opacity-100 
            group-hover:translate-y-0

            hover:opacity-100
            hover:translate-y-0

            transition-all 
            duration-300 

            max-h-40
            overflow-y-auto

            p-0
            z-40

            shadow-[0_8px_28px_rgba(0,0,0,0.45)]
          "
        >
          {/* Sticky Header */}
          <div className="sticky top-0 bg-neutral-900 p-4 z-10 shadow-md [mask-image:linear-gradient(to_bottom,black_65%,transparent)]">
            <h2 className="text-lg font-bold">{anime.title.english}</h2>
          </div>

          {/* Scrollable Content */}
          <div className="p-4 pt-2">
            <h6 className="text-sm text-gray-500 italic">
              {anime.genres.join(", ")}
            </h6>

            <p className="text-sm text-gray-300 whitespace-pre-line">
              {anime.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;

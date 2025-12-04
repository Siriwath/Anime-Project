import Link from "next/link";

function Navbar() {
    return (
        <nav className="sticky top-0 flex flex-row justify-between bg-[#305252] py-5 px-12 z-10">
            <Link href="/" className="text-white text-md font-semibold">AniWatch</Link>
            <Link href="/watchlist" className="text-white text-sm">Explore</Link>
        </nav>
    );
}

export default Navbar;
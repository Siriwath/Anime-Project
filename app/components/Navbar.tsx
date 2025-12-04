import Link from "next/link";

function Navbar() {
    return (
        <nav className="sticky top-0 flex flex-row justify-between py-5 px-10 m-2">
            <Link href="/">website name</Link>
            <div className="flex flex-row justify-between min-w-50 border-solid-black-1">
                <Link href="/explore">Explore</Link>
                <Link href="/watchlist">My Watchlist</Link>
            </div>
        </nav>
    );
}

export default Navbar;
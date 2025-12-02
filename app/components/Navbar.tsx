import Link from "next/link";

function Navbar() {
    return (
        <nav className="navbar">
            <Link href="/">website name</Link>
            <div className="links">
                <Link href="/explore">Explore</Link>
                <Link href="/watchlist">My Watchlist</Link>
            </div>
        </nav>
    );
}

export default Navbar;
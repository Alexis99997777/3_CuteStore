import Link from "next/link"
import "./globals.css" 

export default function NotFound() {
    return (
        <div className="page-container">
            <h2>Page not found:(</h2>
            <p className="text-large">404</p>
            <Link href={"/"}>
                <button>Home</button>
            </Link>
        </div>
    )
}
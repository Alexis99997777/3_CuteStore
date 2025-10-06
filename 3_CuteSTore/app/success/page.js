import Link from "next/link"
import "./globals.css" 

export default function NotFound() {
    return (
        <div className="page-container">
            <h2 className="text-large">Thank you for your purchase 🎉</h2>
            <Link href={"/"}>
                <button>Continue &rarr;</button>
            </Link>
        </div>
    )
}
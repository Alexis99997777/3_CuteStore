import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/Emailinput"
import ProductsProvider from "@/context/ProductContext"

export const Metadata = {
  title: "AleixsStore",
  description: "A super cool website for programmers and productivity friends,Welcome",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head />
        <body>
          <div id="portal"/>
          <div id="app">
            <header>
              <div className="header-content">
                <Link href={"/"}>
                  <h1>CuteStore</h1>
                </Link>
                <h5 className="mid-text">- Cool stuff for cool people -</h5>
                <Cart />
              </div>
            </header>

            <main>
              {children}
            </main>
            <div className="hr" /> 
            <footer>
              <div className="email-container">
                <h5>Get a sneak peek at new additions to the store, special offers, 
                  and so much more.
                </h5>
                <EmailInput />
              </div>

              <div className="links-container">
                <div>
                  <h3>AleixsStore</h3>
                  <Link target="_blank" href={'/'}>Alexis Hub</Link>
                  <Link target="_blank" href={'/'}>Roadmap</Link>
                </div>
                <div>
                  <h3>Storet</h3>
                  <Link href={'/'}>Home</Link>
                  <Link href={'/'}>Cart</Link>
                </div>
                <div>
                  <h3>Support</h3>
                  <Link href={'/contact'}>Contact</Link>
                  <Link href={'/faq'}>FAQs</Link>
                </div>
              </div>
              
              <div className="socials">
                <p>© <a href="https://www.linkedin.com/in/jia-wei-1014932b6/" target="_blank">AlexisLinkIn</a> 2025<br />Built with NextJS &
                <a target="_blank" href="https://github.com/jamezmca/fantacss">FantaCSS</a>🔥</p>
                <div className="social-links">
                  <Link href={'https://github.com/Alexis99997777?tab=overview&from=2025-08-01&to=2025-08-31'} target="_blank"><i className="fa-brands fa-github"></i></Link>
                  <Link href={'https://www.linkedin.com/in/jia-wei-1014932b6/'} target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
                </div>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ProductsProvider>
  );
}

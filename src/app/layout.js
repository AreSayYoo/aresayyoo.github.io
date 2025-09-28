import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className="site-nav">
          <ul className="site-nav__list">
            <li>
              <Link href="/" className="site-nav__link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="site-nav__link">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/resume" className="site-nav__link">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/contact" className="site-nav__link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="page-shell">{children}</div>
        <footer className="site-footer">&copy; 2025 Matthew Arceo. All rights reserved.</footer>
      </body>
    </html>
  );
}

'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import logo from "./images/Logo2.webp";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Stuff({ children }) {
  const aboutRef = useRef(null); // Reference for the "About Me" section
  const greenRef = useRef(null); // Reference for Shades of Green Intro
  const [isAboutActive, setIsAboutActive] = useState(false); // State for "About Me" section
// 🎨 Color-changing effect
  const colors = ["#4CAF50", "#2E7D32", "#81C784", "#1B5E20", "#A5D6A7"];
  const [colorIndex, setColorIndex] = useState(0);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current) {
            setIsAboutActive(entry.isIntersecting);
          }
        });
      },
      { threshold: 1.0 } // Trigger when 100% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let aboutInstance;

    if (isAboutActive && aboutRef.current) {
      aboutInstance = new Typed(aboutRef.current, {
        strings: [
          "Hi, I'm Matt Arceo, an aspiring UX Designer passionate about creating user-friendly and intuitive designs. Explore my work and get to know me better."
        ],
        typeSpeed: 5,
        backSpeed: 30,
        loop: false, // Only type once when scrolled into view
      });
    }

    return () => {
      if (aboutInstance) aboutInstance.destroy();
    };
  }, [isAboutActive]);


  // 🚀 Interval-based color change for About Me header
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1500); // Change color every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div id="home">
          {/* Floating Navigation Buttons */}
          <div className="floating-buttons">
            <a href="#top" className="floating-button">
              <span className="material-icons">home</span>
            </a>
            <a href="#about" className="floating-button">
              <span className="material-icons">info</span>
            </a>
            <a href="#projects" className="floating-button">
              <span className="material-icons">build</span>
            </a>
            <a href="#resume" className="floating-button">
              <span className="material-icons">work</span>
            </a>
            <a href="#contact" className="floating-button">
              <span className="material-icons">mail</span>
            </a>
          </div>

          <main className="container my-5 text-center">
            <div>
              <Image src={logo} alt="Logo" className="logo"/>
            </div>
            {/* About Me Section with Scroll-Triggered Typing Effect */}
            <section id="about" className="about-me">
              <h1>About Me</h1>
              <p className="typing-effect">
                <span ref={aboutRef}></span> {/* Typed.js effect target */}
              </p>
            </section>
            {/* Projects Section */}
            <section id="projects" className="mb-5">
              <h1>Projects</h1>
              <p>Here are some personal projects that I have designed:</p>
              <h2 
                style={{
                  color: colors[colorIndex], // green color change
                  transition: "color 0.8s ease-in-out",
                }}
              >Shades of Green</h2>
              <p className="typing-effect">
              Shades of Green is a project I designed for a small business owner who does landscaping for a living. Most of their clientele are senior citizens, so they requested a website that was simple and could be easily interacted with. They also wanted me to include a contact us page, where they could handle specific inquiries for existing and new customers.
              </p>

              <div className="figma-project">
                <iframe
                  title="Figma Project"
                  width="100%"
                  height="600"
                  src="https://embed.figma.com/proto/4b5dYOsD5TH2mSElVBxr0w/Shades-of-Green?page-id=0%3A1&node-id=4-2&viewport=1352%2C291%2C0.34&scaling=contain&content-scaling=responsive&starting-point-node-id=4%3A2&embed-host=share"
                  allowFullScreen
                  style={{
                    border: "none",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                ></iframe>
              </div>
            </section>

            {/* Resume Section */}
            <section id="resume" className="mb-5">
              <h1>Resume</h1>
              <p>
                <a
                  href="/public/Matt_Arceo_Resume.pdf"
                  download="Resume"
                  className="btn btn-primary"
                >
                  Download my Resume
                </a>
              </p>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-5">
              <h1>Contact Me</h1>
              <p>
                Email:{" "}
                <a
                  href="mailto:matt.p.arceo@gmail.com"
                  className="text-decoration-none"
                >
                  matt.p.arceo@gmail.com
                </a>
              </p>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-dark text-center py-3">
            &copy; 2025 Matthew Arceo. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
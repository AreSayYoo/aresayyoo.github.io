"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "./images/Logo2.webp";
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Home() {

  const aboutTextRef = useRef(null);
  
    useEffect(() => {
      if (!aboutTextRef.current) {
        return undefined;
      }
  
      const typedInstance = new Typed(aboutTextRef.current, {
        strings: [
          "Hi, I'm Matt Arceo, an aspiring UX Designer passionate about creating user-friendly and intuitive designs. Explore my work and get to know me better!",
        ],
        typeSpeed: 25,
        backSpeed: 30,
        loop: false,
      });
  
      return () => typedInstance.destroy();
    }, []);

  return (
    <main className="container my-5 text-center home-page">
      <div className="home-hero">
        <Image src={logo} alt="Logo" className="logo" />
        <h1 className="home-title">Matthew Arceo</h1>
        <p className="home-tagline">
          Full-Stack Developer || Tech Enthusiast || Lifelong Learner
        </p>
        <h1>About Me</h1>
        <p className="typing-effect" aria-live="polite">
          <span ref={aboutTextRef} />
        </p>
        <div className="home-links">
          <Link href="/projects" className="btn btn-primary">
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}

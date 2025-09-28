'use client';

import { useEffect, useState } from 'react';

const colors = ['#4CAF50', '#2E7D32', '#81C784', '#1B5E20', '#A5D6A7'];

export default function ProjectsPage() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="container my-5 text-center projects-page">
      <h1>Projects</h1>
      <p>Here are some personal projects that I have designed and developed:</p>
      <h2
        style={{
          color: colors[colorIndex],
          transition: 'color 0.8s ease-in-out',
        }}
      >
        Shades of Green
      </h2>
      <p className="typing-effect">
        <a href="https://www.shadesofgreen.nz/">Shades of Green</a> is a project I designed for a small business owner who does landscaping for a living. Most of their clientele are senior citizens, so they requested a website that was simple and could be easily interacted with. They also wanted me to include a contact us page, where they could handle specific inquiries for existing and new customers.
      </p>
      <div className="figma-project">
        <iframe
          title="Figma Project"
          width="100%"
          height="600"
          src="https://embed.figma.com/proto/4b5dYOsD5TH2mSElVBxr0w/Shades-of-Green?node-id=690-24&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=690%3A24&embed-host=share"
          allowFullScreen
          style={{
            border: 'none',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        />
      </div>
    </main>
  );
}

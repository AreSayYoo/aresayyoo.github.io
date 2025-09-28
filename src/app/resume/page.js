'use client';

const resumeUrl = '/public/Matthew-Arceo-Resume.pdf';

export default function ResumePage() {
  const handleOpen = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="container my-5 text-center resume-page">
      <h1>Resume</h1>
      <p>
        <button type="button" className="btn btn-primary" onClick={handleOpen}>
          View my Resume
        </button>
      </p>
    </main>
  );
}

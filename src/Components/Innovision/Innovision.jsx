import React from "react";

// Substitute real Cloudinary URLs and Unstop links for your events
const EVENTS = [
  {
    name: "Hack N Seek",
    description: "The Tech Treasure Hunt is an exciting, campus-wide competition that blends technology, logic, and adventure into one immersive experience. Designed to test participants’ problem-solving, analytical, and technical skills, this event transforms your campus into a playground of puzzles, clues, and challenges powered by QR codes.",
    image: "https://res.cloudinary.com/dbhr0e2qr/image/upload/e_upscale/hack_and_seek_website_banner_1_xy8vp2", 
    link: "https://blockseblock.com/hackathon_details/d5745e56-fdb6-4e4e-b986-1bb6206077db/dcd077b5-515f-41b7-8a92-91a9d11ee547" 
  },
  {
    name: "Pixel Pursuit",
    description: "Step into the world of AI-powered image restoration where you’ll build deep learning models to turn blurry, degraded faces into crystal-clear masterpieces — from surveillance footage to legacy archives. This is your shot to rebuild identities, one pixel at a time.",
    image: "https://res.cloudinary.com/dbhr0e2qr/image/upload/e_upscale/pixel_pursuit_jo0r08", 
    link: "https://blockseblock.com/hackathon_details/Pixel%20Persuit" 
  }
];

export default function InnovisionSection({ onSectionClick }) {
  return (
    <section
      id="innovision"
      style={{
        background: "#161f28",
        padding: "56px 0 32px 0",
        borderRadius: 20,
        margin: "36px auto 56px auto",
        maxWidth: 1160,
        boxShadow: "0 8px 32px rgba(23,40,56,0.19)"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#71c4fc",
          fontSize: "2.5rem",
          fontFamily: "Poppins, sans-serif",
          letterSpacing: "1px",
          fontWeight: 800,
          marginBottom: "48px",
          borderBottom: "1px solid #99a7d9",
          paddingBottom:"12px"  ,
        }}
      >
        Innovision 2025
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "48px",
          flexWrap: "wrap",
          
        }}
      >
        {EVENTS.map((event, idx) => (
          <div
            key={event.name}
            style={{
              background: "#222b35",
              borderRadius: 16,
              minWidth: 290,
              maxWidth: 410,
              width: "90vw",
              boxShadow: "0 4px 24px #21384f33",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "24px"
            }}
          >
            <img
              src={event.image}
              alt={event.name}
              style={{
                width: "100%",
                height: 300,
                objectFit: "cover-fill",
                borderRadius: "16px 16px 0 0",
                marginBottom: 0
              }}
            />
            <div style={{ padding: "24px 20px 22px 20px" }}>
              <h3
                style={{
                  marginBottom: 14,
                  marginTop: 0,
                  fontWeight: 700,
                  fontSize: "1.35rem",
                  color: "#4be3f7",
                  letterSpacing: "0.5px"
                }}
              >
                {event.name}
              </h3>
              <p
                style={{
                  color: "#cbe7fa",
                  fontSize: "1.05rem",
                  marginBottom: 24,
                  lineHeight: 1.65
                }}
              >
                {event.description}
              </p>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#71c4fc",
                  color: "#192233",
                  fontWeight: 700,
                  padding: "8px 26px",
                  borderRadius: 8,
                  fontSize: "1.04rem",
                  boxShadow: "0 2px 9px #18355422",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background .15s, color .15s"
                }}
                onMouseEnter={e => (e.target.style.background = "#4eb2e0")}
                onMouseLeave={e => (e.target.style.background = "#71c4fc")}
              >
                Register
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

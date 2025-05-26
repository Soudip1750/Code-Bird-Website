import React, { useCallback } from "react";
import OurTechTeam from "../Team/OurTechTeam";
import "../Team/OurTechTeam.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const DevMembersData = [
  {
    name: "@ImKKingshuk",
    position: "Frontend Developer(react)",
    batch: "CSE 2021-25",
    image: "Kingshuk.jpeg",
    github: "https://github.com/ImKKingshuk",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  {
    name: "Anuraj Kumar",
    position: "Full Stack Developer(MERN)",
    batch: "CSE 2020-24",
    image: "Anuraj.jpeg",
    github: "https://github.com/anurajkumar23",
    linkedin: "https://www.linkedin.com/in/anuraj-kumar-softwaredeveloper/",
    twitter: "https://twitter.com/anurajkumar23",
    instagram: "https://instagram.com/anurajkumar6294",
    facebook: "https://facebook.com/link",
  },
  {
    name: "Amrit Dhandharia",
    position: "Backend Developer",
    batch: "CSE 2020-24",
    image: "Amrit.jpeg",
    github: "https://github.com/link",
    linkedin: "https://linkedin.com/in/link",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/link",
    facebook: "https://facebook.com/link",
  },
  {
    name: "Puskar Roy",
    position: "Full Stack Developer(MERN)",
    batch: "CSE 2022-26",
    image: "Pushkar.jpeg",
    github: "https://github.com/link",
    linkedin: "https://linkedin.com/in/link",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/link",
    facebook: "https://facebook.com/link",
  },
];

const OtherMembersData = [
  {
    name: "Abhinaba Jash",
    position: "HTML",
    batch: "CSE 2022-2026",
    image: "Abhinaba.jpg",
    github: "https://github.com/link",
    linkedin: "https://linkedin.com/in/link",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/link",
    facebook: "https://facebook.com/link",
  },
  {
    name: "Sajjad Ansari",
    position: "HTML",
    batch: "CSE 2022-26",
    image: "Sajjad.jpg",
    github: "https://github.com/link",
    linkedin: "https://linkedin.com/in/link",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/link",
    facebook: "https://facebook.com/link",
  },
  {
    name: "Sanku Kumar",
    position: "Technical Support",
    batch: "CSE 2021-25",
    image: "Sanku.jpg",
    github: "https://github.com/link",
    linkedin: "https://linkedin.com/in/link",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/link",
    facebook: "https://facebook.com/link",
  },
];

function DevTeam() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="py-[10rem]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {},
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 3.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className=" space-y-[10rem]">
        <div>
          <h1 className="text-[3rem] text-center text-white py-[6rem]">
            Developers of <span className="thisWev">this Website</span>
          </h1>
          <OurTechTeam teamMembers={DevMembersData} />
        </div>
        <div>
          <h1 className="text-[2.5rem] text-center text-white py-[6rem]">
            Other support team
          </h1>
          <OurTechTeam teamMembers={OtherMembersData} />
        </div>
      </div>
    </div>
  );
}

export default DevTeam;

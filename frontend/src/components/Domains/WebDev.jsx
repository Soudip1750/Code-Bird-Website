import React , {useCallback} from "react";
import { FaReact, FaCss3, FaHtml5 } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



function WebDev() {

   const particlesInit = useCallback(async (engine) => {
     await loadFull(engine);
   }, []);

   const particlesLoaded = useCallback(async (container) => {
     await console.log(container);
   }, []);

  return (
    <div className="py-[10rem] mx-10 md:mx-[2rem] text-white">
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
      
      <h1 className="text-[2.7rem] text-white text-center">Web <span className="brand">Development</span></h1>
      <p className="text-lg mb-6 pt-16 text-justify">
        Welcome to the Web Development domain! This exciting field empowers you
        to craft visually stunning and interactive websites. Whether you're
        interested in front-end design or back-end functionality, this domain
        offers a plethora of tools and frameworks to explore. Unleash your
        creativity, build user-friendly interfaces, and make your mark in the
        digital world with the power of web development.
      </p>

      <h3 className="text-xl font-semibold mb-2">Tech Stacks</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <FaReact className="inline-block mr-2 text-blue-500" />
          React: A powerful JavaScript library for building user interfaces.
        </li>
        <li>
          <FaCss3 className="inline-block mr-2 text-blue-500" />
          CSS: CSS the styling language, the outfit/dress/makeupkit of any
          webpage.
        </li>
        <li>
          <FaHtml5 className="inline-block mr-2 text-blue-500" />
          HTML: The markup language, the backbone of any webpage .
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Learning Resources</h3>
      <p className="mb-6">
        Here are some recommended resources to enhance your web development
        skills:
      </p>
      {/* list of learning resources here */}
      <h3 className="text-xl font-semibold mb-2">Events and Workshops</h3>
      <p className="mb-6">
        Join us in exciting web development events and workshops:
      </p>
      {/* list of events and workshops here */}

      <h3 className="text-xl font-semibold mb-2">Featured Projects</h3>
      <p className="mb-6">
        Check out some amazing projects created by our members:
      </p>
      {/* list of featured projects here */}
    </div>
  );
}

export default WebDev;

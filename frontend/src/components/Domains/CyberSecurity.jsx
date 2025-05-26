import React,{useCallback} from "react";
import { SiGnubash, SiKalilinux, SiArchlinux } from "react-icons/si";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function CyberSecurity() {
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
      <h1 className="text-[3rem] text-white text-center">
        Cyber <span className="brand">Security</span>
      </h1>
      <p className="text-lg mb-6 pt-16 text-justify">
        Step into the realm of Cybersecurity, where you'll become a digital
        defender. This domain equips you with the skills to protect information
        systems, networks, and data from cyber threats. Learn about ethical
        hacking, cryptography, and secure coding practices. Discover how to
        identify vulnerabilities and implement robust security measures. Become
        a guardian of the digital realm and play a crucial role in safeguarding
        the cyberspace.
      </p>

      <h3 className="text-xl font-semibold mb-2">Tech Stacks</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <SiGnubash className="inline-block mr-2 text-blue-500" />
          Bash: It is the shell, or command language interpreter, for the GNU
          operating system. The name is an acronym for the 'Bourne-Again SHell',
          a pun on Stephen Bourne, the author of the direct ancestor of the
          current Unix shell sh , which appeared in the Seventh Edition Bell
          Labs Research version of Unix.
        </li>
        <li>
          <SiKalilinux className="inline-block mr-2 text-blue-500" />
          Kali Linux formerly known as BackTrack Linux, is an open-source
          Debian-based Linux distribution aimed at advanced Penetration Testing
          and Security Auditing.
        </li>
        <li>
          <SiArchlinux className="inline-block mr-2 text-blue-500" />
          It is a minimalist, lightweight, and bleeding edge distro targeting
          proficient GNU/Linux users over the idea of trying to be appealing to
          as many users as possible. Arch promotes the do-it-yourself attitude
          among its users and thus provides you with the freedom to tweak your
          system according to your needs.
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

export default CyberSecurity;

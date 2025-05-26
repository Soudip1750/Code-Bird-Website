import React, { useCallback, useEffect, useState } from "react";
import "./Registercb.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AlreadyMember = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://the-codebird-sever.vercel.app/api/user`, {
        withCredentials: true,
      })
      .then((response) => {
        setData(response.data.name);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError(true); // Set error to true if there's an error
        setLoading(false); // Set loading to false even if there's an error
        navigate('/login');
        console.log(error);
      });
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="registerContainerAl">
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
      <div className="headings">
        {loading && <p>Loading...</p>}
        {error && <p>An error occurred. Please try again later.</p>}
        {!loading && !error && (
          <>
            <h1>
              Thank you for being a member of
              <span className="brand"> The CodeBird</span>
            </h1>
            <h1>
              <span className="brand">{data}</span>
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default AlreadyMember;

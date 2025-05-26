import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./about.css";
import { StarsCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full h-[24rem] m-8 d ">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwipe = (dir) => {
    if (dir === "LEFT") {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? services.length - 1 : prevIndex - 1
      );
    } else if (dir === "RIGHT") {
      setActiveIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
  });

  const goToPreviousSlide = () => {
    const lastIndex = services.length - 1;
    const newIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const goToNextSlide = () => {
    const lastIndex = services.length - 1;
    const newIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const timeout = setTimeout(goToNextSlide, 2000);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Our Nests</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        All the Domains in CodeBird
      </motion.p>

      <div className="mt-20 relative" {...handlers}>
        <div className="card-slider-container">
          <div
            className="card-slider"
            style={{
              transform: `translateX(-${
                activeIndex * (100 / services.length)
              }%)`,
            }}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index}
                title={service.title}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
        <button className="slider-btn prev" onClick={goToPreviousSlide}>
          <FaChevronLeft />
        </button>
        <button className="slider-btn next" onClick={goToNextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <Link to="/login">
        <div className="text-center text-xl mx-auto  font-semibold w-fit  px-5 py-2 bg-white text-purple-500 hover:bg-purple-500 hover:text-white rounded-xl ">
          Join Our Community
        </div>
      </Link>

      <StarsCanvas />
    </>
  );
};

export default SectionWrapper(About, "about");

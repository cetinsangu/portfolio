import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiElIcon from "./LiElIcon";

const Details = ({ type, time, address, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiElIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/70">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Student"
            time="2022"
            address="Udemy"
            info="Enthusiastic and motivated individual with a passion for web development, backed by hands-on experience gained from Udemy courses and personal projects. Proficient in JavaScript and dedicated to creating dynamic and user-friendly web applications. Completed comprehensive JavaScript course by Jonas Schmedtmann, covering essential concepts and practical applications. Developed proficiency in writing clean, modular, and efficient JavaScript code, enhancing my ability to create interactive and dynamic web experiences."
          />
          <Details
            type="Bachelor of Law"
            place="Anadolu University"
            time="2017-2021"
            info="During my time at Anadolu University, I pursued a comprehensive four-year program focused on legal studies. This rigorous curriculum equipped me with a solid foundation in various aspects of law and jurisprudence. I gained a deep understanding of legal theories, principles, and practices that form the bedrock of the legal profession. "
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;

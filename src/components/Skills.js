import React from "react";
import { motion } from "framer-motion";

const SkillElements = ({ name, xPosition, yPosition }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{
        x: xPosition,
        y: yPosition,
        transition: { duration: 0.5 },
      }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-[85%] h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <SkillElements name="HTML" xPosition="-7vw" yPosition="-11vw" />
        <SkillElements name="CSS" xPosition="7vw" yPosition="-6vw" />
        <SkillElements name="JavaScript" xPosition="0vw" yPosition="12vw" />
        <SkillElements name="ReactJS" xPosition="-23vw" yPosition="-11vw" />
        <SkillElements name="NextJS" xPosition="3vw" yPosition="-20vw" />
        <SkillElements name="NodeJS" xPosition="27vw" yPosition="-5vw" />
        <SkillElements name="Express" xPosition="18vw" yPosition="2vw" />
        <SkillElements name="MySQL" xPosition="-12vw" yPosition="17vw" />
        <SkillElements name="MongoDB" xPosition="-15vw" yPosition="5vw" />
        <SkillElements name="PostgreSQL" xPosition="-25vw" yPosition="20vw" />
        <SkillElements name="Tailwind CSS" xPosition="20vw" yPosition="-12vw" />
        <SkillElements name="Figma" xPosition="19vw" yPosition="14vw" />
        <SkillElements name="Firebase" xPosition="-32vw" yPosition="6vw" />
        <SkillElements name="Supabase" xPosition="32vw" yPosition="6vw" />
        <SkillElements name="Prisma" xPosition="5vw" yPosition="20vw" />
      </div>
    </>
  );
};

export default Skills;

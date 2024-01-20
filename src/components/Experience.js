import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiElIcon from "./LiElIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiElIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-green-500"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/70 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Developer"
            companyLink="https://zirve-bilgisayar.com"
            company="Zirve Bilgisayar"
            time="2022-Present"
            address="İzmir Institute of Technology, Teknopark"
            work="As a Full Stack Web Developer at Zirve Bilgisayar, I dedicated 1.5 years to advancing the field of law technology. Specializing in the development of applications catering to legal professionals, I focused on creating cutting-edge solutions for enforcement, mediation, and litigation. In particular, I spearheaded the development of three pivotal apps—İcraPro, ArabulucuPro, and DavaPro—each designed to streamline and enhance the workflows of lawyers. My role involved leveraging a diverse skill set, encompassing JavaScript, VueJS, MySQL, and PHP, to engineer dynamic and user-centric web interfaces. Working collaboratively within cross-functional teams, I engaged with designers and back-end developers to ensure the seamless integration of interactive features and responsive functionalities. My contribution was instrumental in designing and implementing interactive screens, ultimately elevating user engagement and satisfaction. Adhering to best practices in web development, I championed initiatives such as responsive design, cross-browser compatibility, and adherence to accessibility standards. These efforts culminated in a consistent and user-friendly experience across a variety of platforms, underscoring my commitment to delivering high-quality front-end solutions. The impact of my work extended beyond the realm of development, significantly contributing to the company's success and aligning with overarching business objectives."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

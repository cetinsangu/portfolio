import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiElIcon from "./LiElIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-green-500"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/70">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Full Stack Developer"
            companyLink="https://zirve-bilgisayar.com"
            company="Zirve Bilgisayar"
            time="2022-Present"
            address="İzmir Institute of Technology, Teknopark"
            work="Worked as a Full Stack Web Developer at Zirve Bilgisayar for 1 year, contributing to the creation of interactive and user-friendly web interfaces. Utilized JavaScript, VueJS, MySQL, and PHP to develop engaging and responsive web applications. Collaborated with cross-functional teams, including designers and back-end developers, to implement seamless user experiences and efficient data management. Played a key role in designing and developing interactive screens, enhancing user engagement and satisfaction. Implemented best practices in web development, including responsive design, cross-browser compatibility, and accessibility standards, resulting in a consistent and user-friendly experience across various platforms. Contributed to the company's success by consistently delivering high-quality front-end solutions that positively impacted user engagement and overall business objectives."
          />
          <Details
            position="Full Stack Developer"
            companyLink="https://zirve-bilgisayar.com"
            company="Zirve Bilgisayar"
            time="2022-Present"
            address="İzmir Institute of Technology, Teknopark"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate neque qui inventore aspernatur natus delectus quos ullam ad, cum tempore molestiae magni. Nobis quam tempora voluptatem, amet rem quod unde obcaecati totam laboriosam! Perferendis nam minima maxime temporibus assumenda. Suscipit, ut accusamus doloribus magnam quos consectetur cum modi, architecto vel ab magni atque nobis reprehenderit delectus, eaque laborum labore minima? Blanditiis voluptate, commodi explicabo laboriosam nihil ea autem magnam. Ipsum molestiae itaque placeat accusamus reiciendis explicabo aperiam tenetur, aspernatur temporibus vitae nemo blanditiis, quia optio iusto recusandae ullam cumque quibusdam odio dolorem laboriosam. Ipsa soluta iusto autem? Cupiditate, eligendi ipsam!"
          />
          <Details
            position="Full Stack Developer"
            companyLink="https://zirve-bilgisayar.com"
            company="Zirve Bilgisayar"
            time="2022-Present"
            address="İzmir Institute of Technology, Teknopark"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo minus magnam itaque aliquam hic iusto, quos, perspiciatis expedita non earum, doloribus voluptates. Aperiam amet consequuntur laborum architecto, voluptate saepe vel et, iusto eum repudiandae consectetur recusandae ullam, obcaecati expedita sequi sed esse rerum quos!"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import articleOne from "../../public/images/blog/unveiling.png";
import articleTwo from "../../public/images/blog/craft.png";
import articleListOne from "../../public/images/blog/meteor.png";
import articleListTwo from "../../public/images/blog/kanban.png";
import articleListThree from "../../public/images/blog/remindme.png";

import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const mouseMove = (event) => {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };

  const mouseLeave = (event) => {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        ref={imgRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duraton: 0.2 } }}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const ArticleList = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-green-600 font-semibold pl-4">{date} </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light dark:text-light">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm">{summary}</p>
      <span className="text-green-600 font-semibold">{time}</span>
    </li>
  );
};

const blog = () => {
  return (
    <>
      <Head>
        <title>Çetin Sanğu | Blog</title>
        <meta name="description" content="blog"></meta>
      </Head>
      <main className="w-full flex flex-col items-center justify-center overflow-hidden ">
        <Layout className="pt-16">
          <AnimatedText
            text={"Exploring Ideas, Inspiring Minds..."}
            className="mb-12"
          />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title={
                "Unveiling the Magic of Full-Stack Development: From Code to Creativity"
              }
              summary={
                "Embark on a journey through the captivating realm of full-stack development, where innovation meets implementation. In this blog, we delve into the art of seamlessly integrating front-end finesse with back-end functionality. Explore the tools, techniques, and mindset that empower developers to craft immersive digital experiences from start to finish."
              }
              time={"7 mins"}
              img={articleOne}
              link="/"
            />
            <FeaturedArticle
              title={
                "Exploring the Symphony of Full-Stack Development: Crafting Digital Experiences from Frontend to Backend"
              }
              summary={
                "Embark on a journey through the dynamic world of full-stack development as we delve into the seamless integration of frontend and backend technologies. From conceptualizing user-centric interfaces to engineering resilient server architectures, accompany us in deciphering the intricate art of shaping impeccable web experiences. Whether you're a coding veteran or a newcomer to the programming scene, this blog serves as your compass in navigating the symphony of full-stack development."
              }
              time={"11 mins"}
              img={articleTwo}
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">
            All Articles
          </h2>
          <ul className="mb-16">
            <ArticleList
              title={"How to Create a Meteor Effect with React and TailwindCSS"}
              date={"August 28, 2023"}
              link={"/"}
              img={articleListOne}
            />
            <ArticleList
              title={
                "Build a drag and drop Kanban Board with React, Typescript, Tailwind, Dnd-Kit"
              }
              date={"August 29, 2023"}
              link={"/"}
              img={articleListTwo}
            />
            <ArticleList
              title={
                "Build a Full Stack ReminderApp with React, NextJs, Typescript, ServerAction, Zod, Hook-form, Prisma, and Tailwind"
              }
              date={"August 31, 2023"}
              link={"/"}
              img={articleListThree}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default blog;

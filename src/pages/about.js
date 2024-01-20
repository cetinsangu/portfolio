import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/home/cetinsangu_mock.png";
import Image from "next/image";
import { spring, useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Transition from "@/components/Transition";

const AnimNumber = ({ value }) => {
  const ref = useRef(null);

  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    }
  }, [isInView, value, motionVal]);

  useEffect(() => {
    springVal.on("change", (lastVal) => {
      if (ref.current && lastVal.toFixed(0) <= value) {
        ref.current.textContent = lastVal.toFixed(0);
      }
    });
  }, [springVal, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Çetin Sanğu | About Page</title>
        <meta
          name="description"
          content="Discover the story behind my journey as a passionate full-stack web developer. From the early days of coding to mastering the latest technologies, I bring a wealth of experience to the table. Learn about my skills, projects, and commitment to delivering innovative web solutions. Explore how my dedication to continuous learning drives success in every aspect of web development."
        ></meta>
      </Head>
      <Transition />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Transforming Ideas into Exceptional Digital Experiences"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          ></AnimatedText>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/50 dark:text-light">
                Biography
              </h2>
              <p className="font-medium">
                Hello, I&apos;m Çetin, a dedicated full stack web developer
                deeply passionate about crafting visually appealing, functional,
                and user-centric digital experiences. Over the past 2 years in
                the field, I&apos;ve immersed myself in the dynamic world of web
                development, gaining valuable insights into creating seamless
                and engaging online interfaces.
              </p>

              <p className="my-4 font-medium">
                {" "}
                My journey has been marked by a commitment to delivering
                high-quality work that not only meets technical standards but
                also addresses the unique needs of users. Embracing challenges
                as opportunities for growth, I&apos;ve honed my problem-solving
                skills and stayed updated on the latest trends and technologies
                in the ever-evolving landscape of web development.{" "}
              </p>

              <p className="font-medium">
                My enthusiasm for continuous learning and my ability to blend
                technical expertise with a user-focused approach define my
                professional ethos. I&apos;m excited about the prospect of
                contributing my skills to innovative projects and further
                expanding my horizons in this dynamic field.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="cetinsangu"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center text-dark dark:text-light xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimNumber value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimNumber value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimNumber value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
        <Skills />
        <Experience />
        <Education />
      </main>
    </>
  );
};

export default about;

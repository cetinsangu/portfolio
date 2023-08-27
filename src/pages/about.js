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
        <meta name="description" content="any desc"></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16"
          ></AnimatedText>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/50">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Çetin, a full stack web developer with a passion for
                creating beautiful, functional, and user-centered digital
                experiences. With 4 years of experience in the field. I am
                always looking for new and innovative ways to bring my clients'
                visions to life.
              </p>

              <p className="my-4 font-medium">
                {" "}
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.{" "}
              </p>

              <p className="font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="cetinsangu"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimNumber value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimNumber value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimNumber value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark">
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

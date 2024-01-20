import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import githubsearcher from "../../public/images/projects/githubsearcher.png";
import triviapp from "../../public/images/projects/triviapp.png";
import vuetodo from "../../public/images/projects/vuetodo.png";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-2xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem] dark:bg-light " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-green-600 font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 dark:text-light">
            <GithubIcon />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const OrdinaryProject = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg dark:text-light"
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
      <div className="w-full flex flex-col justify-between mt-4">
        <span className="text-green-600 font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            className="text-lg font-semibold underline dark:text-light md:text-base"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link
            href={github}
            target="_blank"
            className="w-10 dark:text-light md:w-6"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Çetin Sanğu | Projects</title>
        <meta
          name="description"
          content="Browse through a showcase of my latest projects as a full-stack web developer. From interactive web applications to elegant website designs, explore a diverse collection that demonstrates my technical proficiency and creativity. Each project is a testament to my commitment to delivering high-quality, tailored solutions. Discover how my skills in front-end and back-end development come together to create engaging and impactful online experiences."
        />
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Çetin's Web Alchemy: Crafting Digital Elegance in Ones and Zeros"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type={"Featured Project"}
                img={githubsearcher}
                title={"Github Searcher"}
                summary={
                  "Developed an engaging web application using ReactJS, React Router, and Tailwind CSS, integrated with Firebase for authentication. The project showcases a visually stunning user interface with smooth animations powered by Framer Motion, and features a night mode for enhanced user experience. Leveraged ChartJS to visualize GitHub data, allowing users to seamlessly search and explore both their own and other users' accounts. Implemented real-time interactivity with Toastify notifications. This project demonstrates strong front-end development skills, UI/UX design, authentication systems, and data visualization."
                }
                link="https://www.githubsearcher.cetinsangu.com"
                github={"https://github.com/cetinsangu/githubsearcher"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <OrdinaryProject
                type={"Project"}
                img={triviapp}
                title={"TriviApp"}
                github={"https://github.com/cetinsangu/triviapp"}
                link="https://triviapp.cetinsangu.com/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <OrdinaryProject
                type={"Project"}
                img={vuetodo}
                title={"VueToDo"}
                github={"https://github.com/cetinsangu/vuetodo"}
                link="https://www.vuetodo.cetinsangu.com/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};
//"I developed a dynamic web application utilizing ReactJS, Axios, Tailwind CSS, and the OpenTDB API. The project encompasses a vast collection of over 4000 questions, organized into selectable categories and varying difficulty levels. Users have the freedom to choose the number of questions they want to tackle. The application not only presents questions but also tracks user performance, showcasing success rates, correct answers, and incorrect answers. Through this project, I successfully integrated multiple technologies to create an interactive and informative platform for users to engage with a wide array of questions and assess their progress."

//"Developed a dynamic ToDo application utilizing VueJS framework along with Vue-router, Vuetify, and Vuex for state management. The project empowered users to seamlessly add, edit, and remove tasks, adjust task deadlines, and employ drag-and-drop functionality for sorting. Implemented a robust search feature for efficient task retrieval. Leveraged localBase to ensure persistent data storage, allowing users to seamlessly resume tasks even after browser closure or page refresh. Effectively managed application state using Vuex. Notably, the project boasts an aesthetically pleasing user interface, enhancing user experience."

export default projects;

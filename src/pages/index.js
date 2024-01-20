import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePicture from "../../public/home/cetinsangu_mock.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import Transition from "@/components/Transition";
export default function Home() {
  return (
    <>
      <Head>
        <title>Çetin Sanğu | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Welcome to my portfolio! I am a skilled full-stack web developer with a passion for crafting seamless digital experiences. Explore my diverse range of projects, from dynamic web applications to responsive designs. Discover how my expertise in front-end and back-end technologies can elevate your online presence. Let's bring your ideas to life through innovative and user-centric web solutions."
        />
      </Head>
      <Transition />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePicture}
                alt="CetinSangu"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                className="!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-2xl"
                text="Architect of Digital Elegance: Unveiling a Full-Stack Odyssey"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Welcome to my portfolio! I am Çetin, a skilled full-stack web
                developer with a passion for crafting seamless digital
                experiences. Explore my diverse range of projects, from dynamic
                web applications to responsive designs. Discover how my
                expertise in front-end and back-end technologies, combined with
                innovative and user-centric approaches, can elevate your online
                presence. Let's bring your ideas to life through cutting-edge
                web solutions.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:transition-all dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  href="#"
                  target="_blank"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  href="mailto:sangucetin@gmail.com"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}

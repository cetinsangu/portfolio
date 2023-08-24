import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, XIcon } from "./Icons";
import { motion } from "framer-motion";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  console.log(href);
  return (
    <Link className={`${className} relative group`} href={href}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          isActive ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Article" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://x.com/littledevone_"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-8 mx-2"
          whileTap={{ scale: 0.9 }}
        >
          <XIcon />
        </motion.a>
        <motion.a
          href="https://github.com/cetinsangu"
          target={"_blank"}
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          className="w-6 ml-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;

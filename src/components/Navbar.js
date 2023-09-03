import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, XIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitch from "./hooks/useThemeSwitch";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link className={`${className} relative group`} href={href}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          isActive ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/blog" title="Blog" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-between flex-wrap">
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
        <button
          className={`ml-12 w-12 flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;

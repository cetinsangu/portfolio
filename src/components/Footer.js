import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With{" "}
          <span className="text-primary text-2xl px-1">&hearts;</span>by&nbsp;
          <Link className="underline underline-offset-[5px]" href="/">
            Çetin Sanğu
          </Link>
        </div>
        <Link className="underline underline-offset-[5px]" href="/">
          Say Hello!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;

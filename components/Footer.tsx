import React from "react";
import { FacebookIcon, InstagramIcon } from "./Icons";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-linear-to-r from-zinc-500 to-slate-800"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-8 sm:px-6 lg:px-8 lg:pt-8 grid sm:grid-cols-2">
        <p className="mt-4 text-base text-gray-200 md:order-0 md:mt-0">
          &copy; 2023 Renee Thompson Photography. All rights reserved.
        </p>
        <p className="mt-4 text-base text-gray-200 md:order-0 md:mt-0 items-end flex flex-row">
          <a
            href="https://www.facebook.com/ReneeThompsonPhotos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="h-6 w-6 shrink-0 text-gray-200" />
          </a>
          <a
            href="https://www.instagram.com/ReneeThompsonPhotos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="h-6 w-6 shrink-0 text-gray-200 sm:ml-8" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

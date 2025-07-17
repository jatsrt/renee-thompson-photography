import React, { PropsWithChildren } from "react";
import Image from "next/image";
import Notification from "./Notification";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface Props extends PropsWithChildren {
  image?: any;
  title?: React.ReactElement;
  summary?: React.ReactElement;
  noheader?: boolean;
}

const Layout: React.FC<Props> = ({
  children,
  image,
  title,
  summary,
  noheader,
}) => {
  return (
    <Notification>
      <header>
        <div className="relative overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
              <svg
                className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <Navigation />

              {!noheader && (
                <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    {title}
                    {summary}
                  </div>
                </main>
              )}
            </div>
          </div>
          {!noheader && (
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <Image
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full object-top-right"
                src={image}
                alt="Banner Image"
                placeholder="blur"
              />
            </div>
          )}
        </div>
      </header>
      <main>{children}</main>

      <Footer />
    </Notification>
  );
};

export default Layout;

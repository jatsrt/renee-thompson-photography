import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  FaceFrownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import logo from "../public/logo.svg";
import Notification from "./Notification";

import bannerPic from "../public/photos/314336153_810713513237695_5687237389817958517_n.jpg";
import { FacebookIcon, InstagramIcon } from "./Icons";

interface Props extends PropsWithChildren {
  image: any;
  title: React.ReactElement;
  summary: React.ReactElement;
}

const Layout: React.FC<Props> = ({ children, image, title, summary }) => {
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

              <Popover>
                <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                      <div className="flex w-full items-center justify-between md:w-auto">
                        <Link href="/">
                          <span className="sr-only">
                            Renee Thompson Photography
                          </span>
                          <Image
                            alt="Renee Thompson Photography"
                            className="h-8 w-auto sm:h-10"
                            src={logo}
                          />
                        </Link>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                      <Link
                        href="/"
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        Home
                      </Link>
                      <Link
                        href="/contact"
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        Contact
                      </Link>
                      <Link
                        href="/studio"
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        Studio
                      </Link>
                      <Link
                        href="/about"
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        About
                      </Link>
                    </div>
                  </nav>
                </div>

                <Transition
                  as={React.Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                  >
                    <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                      <div className="flex items-center justify-between px-5 pt-4">
                        <div>
                          <Image className="h-8 w-auto" src={logo} alt="logo" />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close main menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="space-y-1 px-2 pt-2 pb-3">
                        <Link
                          href="/"
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          Home
                        </Link>
                        <Link
                          href="/contact"
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          Contact
                        </Link>
                        <Link
                          href="/studio"
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          Studio
                        </Link>
                        <Link
                          href="/about"
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          About
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

              <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  {title}
                  {summary}
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full object-right-top"
              src={image}
              alt="Banner Image"
            />
          </div>
        </div>
      </header>
      <main>{children}</main>

      <footer className="bg-stone-500" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 pt-4 pb-8 sm:px-6 lg:px-8 lg:pt-8 grid sm:grid-cols-2">
          <p className="mt-4 text-base text-gray-200 md:order-0 md:mt-0">
            &copy; 2023 Renee Thompson Photography. All rights reserved.
          </p>
          <p className="mt-4 text-base text-gray-200 md:order-0 md:mt-0 items-end flex flex-row">
            <a href="https://www.facebook.com/ReneeThompsonPhotos">
              <FacebookIcon className="h-6 w-6 flex-shrink-0 text-gray-200" />
            </a>
            <a href="https://www.instagram.com/ReneeThompsonPhotos">
              <InstagramIcon className="h-6 w-6 flex-shrink-0 text-gray-200 sm:ml-8" />
            </a>
          </p>
        </div>
      </footer>
    </Notification>
  );
};

export default Layout;

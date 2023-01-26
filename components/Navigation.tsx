import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.jpg";

const Navigation: React.FC = () => {
  return (
    <Popover>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link href="/">
                <span className="sr-only">Renee Thompson Photography</span>
                <Image
                  alt="Renee Thompson Photography"
                  className="h-10 w-auto sm:h-14 rounded-md"
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
            <Link
              href="/galleries/Public"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              Galleries
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
              <Link
                href="/galleries/Public"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Galleries
              </Link>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navigation;

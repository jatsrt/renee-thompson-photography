import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";

import bannerPic from "../../public/photos/events/Banner.jpg";

const gallery = [
  { source: require("../../public/photos/events/DSC00693.jpg") },
  { source: require("../../public/photos/events/DSC03137.jpg") },
  { source: require("../../public/photos/events/DSC03312.jpg") },
  { source: require("../../public/photos/events/DSC03569.jpg") },
  { source: require("../../public/photos/events/DSC03696.jpg") },
  { source: require("../../public/photos/events/DSC04400-Edit.jpg") },
  { source: require("../../public/photos/events/DSC09662-Edit.jpg") },
  { source: require("../../public/photos/events/DSC09828-2-Edit.jpg") },
];

const SpecialEvents: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Special Events</title>
        <meta
          name="description"
          content="Photographer and photgraphy studio in the Westborough, MA area."
        />
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <div
          className="bg-gradient-to-r from-stone-500 to-neutral-800"
          id="services"
        >
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-10 sm:pb-12 lg:max-w-7xl lg:px-8 lg:pt-12">
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8"
            >
              {gallery.map((item, index) => (
                <li className="relative" key={index}>
                  <div className="group aspect-w-7 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <Image
                      className="pointer-events-none object-cover"
                      src={item.source}
                      alt="Seniors and Grads"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    </>
  );
};

SpecialEvents.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      image={bannerPic}
      title={
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          <span className="block xl:inline">Special Events</span>
        </h1>
      }
      summary={
        <>
          <p className="mt-4 text-sm tracking-tight text-gray-500 sm:text-md md:text-lg md:mr-16 lg:mt-8">
            This time in your life is monumental. I am here to help you shine!
          </p>
        </>
      }
    >
      {page}
    </Layout>
  );
};

export default SpecialEvents;

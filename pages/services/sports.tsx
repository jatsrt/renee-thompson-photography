import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";

import bannerPic from "../../public/photos/sports/Banner.jpg";
import image1 from "../../public/photos/sports/DSC00971.jpg";
import image2 from "../../public/photos/sports/DSC01042.jpg";
import image3 from "../../public/photos/sports/DSC01717.jpg";
import image4 from "../../public/photos/sports/DSC03955.jpg";
import image5 from "../../public/photos/sports/DSC06964.jpg";
import image6 from "../../public/photos/sports/DSC08185.jpg";

const gallery = [
  { source: image1 },
  { source: image2 },
  { source: image3 },
  { source: image4 },
  { source: image5 },
  { source: image6 },
];

const Sports: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Sports</title>
        <meta
          name="description"
          content="Photographer and photgraphy studio in the Westborough, MA area."
        />
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <div
          className="bg-gradient-to-r from-zinc-500 to-slate-800"
          id="services"
        >
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-10 sm:pb-12 lg:max-w-7xl lg:px-8 lg:pt-12">
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8"
            >
              {gallery.map((item, index) => (
                <li className="relative" key={index}>
                  <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <Image
                      className="pointer-events-none object-cover"
                      src={item.source}
                      alt="Sports"
                      placeholder="blur"
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

Sports.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      image={bannerPic}
      title={
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          <span className="block xl:inline">Sports</span>
        </h1>
      }
      summary={
        <>
          <p className="mt-4 text-sm tracking-tight text-gray-500 sm:text-md md:text-lg md:mr-16 lg:mt-8">
            Determination, grit, and team spirit. Let&apos;s GO!
          </p>
        </>
      }
    >
      {page}
    </Layout>
  );
};

export default Sports;

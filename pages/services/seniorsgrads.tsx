import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";

import bannerPic from "../../public/photos/seniorsgrads/Banner.jpg";
import image1 from "../../public/photos/seniorsgrads/DSC02146-Edit.jpg";
import image2 from "../../public/photos/seniorsgrads/DSC09870-Edit.jpg";
import image3 from "../../public/photos/seniorsgrads/DSC05820.jpg";
import image4 from "../../public/photos/seniorsgrads/DSC08542-Edit-2.jpg";
import image5 from "../../public/photos/seniorsgrads/DSC01176.jpg";
import image6 from "../../public/photos/seniorsgrads/DSC01317.jpg";
import image7 from "../../public/photos/seniorsgrads/DSC01158.jpg";
import image8 from "../../public/photos/seniorsgrads/DSC07807.jpg";

const gallery = [
  { source: image1 },
  { source: image2 },
  { source: image3 },
  { source: image4 },
  { source: image5 },
  { source: image6 },
  { source: image7 },
  { source: image8 },
];

const SeniorsGrads: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Seniors and Grads</title>
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
                  <div className="group aspect-w-7 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <Image
                      className="pointer-events-none object-cover"
                      src={item.source}
                      alt="Seniors and Grads"
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

SeniorsGrads.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      image={bannerPic}
      title={
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          <span className="block xl:inline">Seniors and Grads</span>
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

export default SeniorsGrads;

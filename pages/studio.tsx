import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

import bannerPic from "../public/photos/home/Review1.jpg";
import { NextPageWithLayout } from "./_app";

const Studio: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Studio Sessions and Rentals</title>
        <meta
          name="description"
          content="Photographer and photgraphy studio in the Westborough, MA area."
        />
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <></>
    </>
  );
};

Studio.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      image={bannerPic}
      title={
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          <span className="block xl:inline">Studio Space</span>{" "}
          <span className="block xl:inline text-lg sm:text-xl md:text-2xl text-gray-700">
            Westborough, MA
          </span>
        </h1>
      }
      summary={
        <>
          <p className="mt-4 text-sm tracking-tight text-gray-500 sm:text-md md:text-lg md:mr-16 lg:mt-8">
            Holiday minis, head shots and more now available in our private
            studio located in Westborough, MA.
          </p>
        </>
      }
    >
      {page}
    </Layout>
  );
};

export default Studio;

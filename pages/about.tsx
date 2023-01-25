import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

import bannerPic from "../public/photos/home/Banner.jpg";
import { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About Renee</title>
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

About.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      image={bannerPic}
      title={
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          <span className="block xl:inline">About Renee</span>
        </h1>
      }
      summary={
        <>
          <p className="mt-4 text-sm tracking-tight text-gray-500 sm:text-md md:text-lg md:mr-16 lg:mt-8">
            It&apos;s a long sotry, we will get to writing it down soon!
          </p>
        </>
      }
    >
      {page}
    </Layout>
  );
};

export default About;

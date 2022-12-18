import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

import bannerPic from "../public/photos/312938463_803624820613231_8719073102551821640_n.jpg";
import { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Renee Thompsonn Photography: About</title>
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
      summary={<></>}
    >
      {page}
    </Layout>
  );
};

export default About;

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

import bannerPic from "../photos/312938463_803624820613231_8719073102551821640_n.jpg";

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Renee Thompsonn Photography: About</title>
        <meta
          name="description"
          content="Photographer and photgraphy studio in the Westborough, MA area."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout image={bannerPic}></Layout>
    </>
  );
};

export default About;

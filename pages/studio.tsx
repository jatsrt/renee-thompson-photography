import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

import bannerPic from "../photos/313425939_805546290421084_3205085087773398883_n.jpg";

const Studio: React.FC = () => {
  return (
    <>
      <Head>
        <title>Renee Thompsonn Photography: Studio</title>
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

export default Studio;

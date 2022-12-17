import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

import bannerPic from "../public/photos/313425939_805546290421084_3205085087773398883_n.jpg";
import { NextPageWithLayout } from "./_app";

const Studio: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Renee Thompsonn Photography: Studio</title>
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
  return <Layout image={bannerPic}>{page}</Layout>;
};

export default Studio;

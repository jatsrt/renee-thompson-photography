import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

import bannerPic from "../public/photos/316303021_820005485641831_2421918661459659589_n.jpg";
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
        </h1>
      }
      summary={<></>}
    >
      {page}
    </Layout>
  );
};

export default Studio;

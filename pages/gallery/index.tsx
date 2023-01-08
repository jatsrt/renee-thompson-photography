import { useUser } from "@auth0/nextjs-auth0/client";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import { useFetcherFolder } from "../../fetchers/useFetcherFolder";

import bannerPic from "../../public/photos/home/Review1.jpg";
import { NextPageWithLayout } from "../_app";

const GalleryIndex: NextPageWithLayout = () => {
  const { user, error, isLoading } = useUser();
  const { data } = useFetcherFolder();

  // const { data } = useFetcherFolder();
  // console.log("Data: ", data);
  return (
    <>
      <Head>
        <title>Photo Galleries</title>
        <meta
          name="description"
          content="Photographer and photgraphy studio in the Westborough, MA area."
        />
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        {data?.subFolders.map((folder, i) => (
          <Link href={`/gallery/${folder}`} key={i}>
            {folder}
          </Link>
        ))}
      </section>
    </>
  );
};

GalleryIndex.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      image={bannerPic}
      title={
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          <span className="block xl:inline">Photo Galleries</span>{" "}
          <span className="block xl:inline text-lg sm:text-xl md:text-2xl text-gray-700">
            Coming Soon
          </span>
        </h1>
      }
      summary={
        <>
          <p className="mt-4 text-sm tracking-tight text-gray-500 sm:text-md md:text-lg md:mr-16 lg:mt-8">
            Stuff
          </p>
        </>
      }
    >
      {page}
    </Layout>
  );
};

export default GalleryIndex;

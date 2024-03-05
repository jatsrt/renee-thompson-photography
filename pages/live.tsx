import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { registerIVSTech } from "amazon-ivs-player";
import { registerIVSQualityPlugin } from "amazon-ivs-player";

import bannerPic from "../public/photos/sports/_DSC0364.jpg";
import { NextPageWithLayout } from "./_app";
import Script from "next/script";

const Studio: NextPageWithLayout = () => {
  const setupPlayer = React.useCallback(() => {
    registerIVSTech(videojs, {
      wasmBinary: "/aws/amazon-ivs-wasmworker.min.wasm",
      wasmWorker: "/aws/amazon-ivs-wasmworker.min.js",
    });

    const player = videojs("amazon-ivs-videojs", {
      techOrder: ["AmazonIVS"],
    });
    player.src(
      "https://321e00d74d93.us-west-2.playback.live-video.net/api/video/v1/us-west-2.258832659541.channel.r8u4B4cevNgk.m3u8"
    );

    registerIVSQualityPlugin(videojs);
    (player as any).enableIVSQualityPlugin();
  }, []);

  return (
    <>
      <Head>
        <title>Live Broadcast</title>
        <meta
          name="description"
          content="Photographer and photgraphy studio in the Westborough, MA area."
        />
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className="bg-gradient-to-r from-zinc-500 to-slate-800  "
        id="services"
      >
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-10 sm:pb-12 lg:max-w-7xl lg:px-8 lg:pt-12">
          <Script
            src="https://player.live-video.net/1.25.0/amazon-ivs-videojs-tech.min.js"
            onLoad={setupPlayer}
          />

          <video
            id="amazon-ivs-videojs"
            className="video-js vjs-4-3 vjs-big-play-centered"
            controls
          ></video>
        </div>
      </div>
    </>
  );
};

Studio.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      image={bannerPic}
      title={
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          <span className="block xl:inline">Live Broadcast</span>{" "}
          <span className="block xl:inline text-lg sm:text-xl md:text-2xl text-gray-700">
            ECSU Softball 2024
          </span>
        </h1>
      }
    >
      {page}
    </Layout>
  );
};

export default Studio;

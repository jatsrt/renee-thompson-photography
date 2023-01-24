import { Dialog, Transition } from "@headlessui/react";
import { ArrowDownOnSquareIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Carousel } from "flowbite-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { HTMLAttributeAnchorTarget } from "react";
import Layout from "../../components/Layout";
import { useFetcherFolder } from "../../fetchers/useFetcherFolder";
import { NextPageWithLayout } from "../_app";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Gallery: NextPageWithLayout = () => {
  const router = useRouter();

  const gallery = router.query.gallery
    ? (router.query.gallery as string[])
    : undefined;
  const prefix = gallery ? gallery.join("/") + "/" : undefined;

  const { data, isLoading } = useFetcherFolder(prefix);

  return (
    <>
      <Head>
        <title>Photo Gallery</title>
        <meta
          name="description"
          content="Photographer and photgraphy studio in the Westborough, MA area."
        />
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:pt-10 sm:pb-8 lg:max-w-7xl lg:px-8 lg:pt-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div>
                <Link
                  href="/galleries"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Galleries
                </Link>
              </div>
            </li>
            {gallery?.map((slug, i) => (
              <li key={i}>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <Link
                    href={`/galleries/${gallery.slice(0, i + 1).join("/")}`}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    {slug}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-10 sm:pb-12 lg:max-w-7xl lg:px-8 lg:pt-12 h-2/3">
        <Carousel>
          {data?.items.map((item, index) => (
            <img src={item.preview} key={index} />
          ))}
        </Carousel>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-10 sm:pb-12 lg:max-w-7xl lg:px-8 lg:pt-12">
        {data?.subFolders.map((sf, i) => (
          <div key={i}>
            <Link href={`/galleries/${sf}`}>{sf.split("/").slice(-2, -1)}</Link>
          </div>
        ))}

        <ul
          role="list"
          className="grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-6 grid-flow-dense"
        >
          {data?.items.map((item, index) => (
            <li
              key={item.name}
              className={classNames(
                item.orientation == "landscape" ? "col-span-2" : "",
                "relative"
              )}
            >
              <div
                className={classNames(
                  item.orientation == "landscape"
                    ? "aspect-w-10 aspect-h-7"
                    : "aspect-w-7 aspect-h-10",
                  "group block w-full overflow-hidden rounded-lg bg-gray-100"
                )}
              >
                <Image
                  src={item.preview}
                  alt={item.name}
                  width="1000"
                  height="700"
                  className="pointer-events-none object-cover group-hover:opacity-75"
                  unoptimized
                />
              </div>
              <Link href={item.source} download target="_blank">
                <ArrowDownOnSquareIcon className="w-8 h-8 pointer-events-none block text-sm font-medium text-gray-500" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Gallery.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout noheader>{page}</Layout>;
};

export default Gallery;

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import { useFetcherFolder } from "../../fetchers/useFetcherFolder";
import { NextPageWithLayout } from "../_app";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Gallery: NextPageWithLayout = () => {
  const router = useRouter();
  const { slug } = router.query;
  const sslug: string[] = (slug as string[]) ?? [];
  const { data } = useFetcherFolder((sslug ?? []).join("/") + "/");

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
      </Head>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-10 sm:pb-12 lg:max-w-7xl lg:px-8 lg:pt-12">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div>
                <Link
                  href="/gallery"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  // className="text-gray-400 hover:text-gray-500"
                >
                  Galleries
                </Link>
              </div>
            </li>
            {sslug.map((slug, i) => (
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
                    href={`/gallery/${sslug.slice(0, i + 1).join("/")}`}
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

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-10 sm:pb-12 lg:max-w-7xl lg:px-8 lg:pt-12">
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-4 sm:gap-x-2 lg:grid-cols-8 xl:gap-x-2 grid-flow-dense"
        >
          {data?.items.map((item) => (
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
                  "group block w-full overflow-hidden bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
                )}
              >
                <Image
                  src={item.preview}
                  alt={item.name}
                  width="1000"
                  height="700"
                  className="pointer-events-none object-cover group-hover:opacity-75"
                />
                <Link
                  type="button"
                  href={item.source}
                  className="absolute inset-0 focus:outline-none"
                  download
                >
                  <span className="sr-only">View details for {item.name}</span>
                </Link>
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                {item.name.split("/").slice(-1)}
              </p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500">
                Download
              </p>
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

// const { user, error } = useUser();
// const { data } = useFetcherFolder();
// console.log("Data: ", data);

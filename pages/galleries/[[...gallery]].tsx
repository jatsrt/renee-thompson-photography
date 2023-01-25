/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowDownTrayIcon,
  CheckCircleIcon,
  FolderIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useFetcherFolder } from "../../fetchers/useFetcherFolder";
import { NextPageWithLayout } from "../_app";
import produce from "immer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Virtual } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LayoutNoHead from "../../components/LayoutNoHead";
import Image from "next/image";
import { Tooltip } from "flowbite-react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Gallery: NextPageWithLayout = () => {
  const router = useRouter();

  const [dls, setDls] = React.useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dls") ?? "";
      const initialValue: { [key: string]: number } = JSON.parse(saved);
      return initialValue || {};
    }

    return {};
  });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dls", JSON.stringify(dls));
    }
  }, [dls]);

  const [open, setOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const gallery = router.query.gallery
    ? (router.query.gallery as string[])
    : undefined;
  const prefix = gallery ? gallery.join("/") + "/" : undefined;

  const { data } = useFetcherFolder(prefix);

  const handleDl = React.useCallback(
    (id: string) => {
      const updatedDls = produce(dls, (draft) => {
        draft[id] = draft[id] ? draft[id] + 1 : 1;
      });
      setDls(updatedDls);
    },
    [dls]
  );

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

      <div className="mx-auto max-w-4xl px-4 py-2 sm:px-4 sm:pt-2 sm:pb-4 lg:max-w-7xl lg:px-8 lg:pt-2">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div>
                <Link
                  href="/galleries"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
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

      {data?.subFolders && data?.subFolders.length > 0 && (
        <div className="mx-auto max-w-4xl px-4 py-2 sm:px-6 sm:pt-2 sm:pb-2 lg:max-w-7xl lg:px-8 lg:pt-2">
          <ul role="list" className="divide-y divide-gray-200">
            {data?.subFolders.map((sf, i) => (
              <li key={sf} className="flex py-4">
                <FolderIcon className="h-5 w-5 rounded-full text-gray-600" />
                <Link href={`/galleries/${sf}`}>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-600">
                      {sf.slice(0, -1).replaceAll("/", "  /  ")}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mx-auto max-w-4xl px-4 py-2 sm:px-6 sm:pt-2 sm:pb-2 lg:max-w-7xl lg:px-8 lg:pt-2">
        <ul
          role="list"
          className="grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-6 grid-flow-dense"
        >
          {data?.items.map((item, index) => (
            <li
              key={item.name}
              className={classNames(
                item.orientation == "landscape" ? "col-span-2" : "",
                "relative bg-gray-100 rounded-lg flex"
              )}
            >
              <div
                className={classNames(
                  item.orientation == "landscape"
                    ? "aspect-w-10 aspect-h-7"
                    : "aspect-w-7 aspect-h-10",
                  "group block w-full overflow-hidden rounded-lg"
                )}
              >
                <img
                  src={item.preview}
                  alt={item.name}
                  className="pointer-events-none object-fit group-hover:opacity-75"
                />

                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                  onClick={() => {
                    setCurrentSlide(index);
                    setOpen(true);
                  }}
                >
                  <span className="sr-only">View details for</span>
                </button>
              </div>

              <Link
                href={item.source}
                download
                target="_blank"
                onClick={() => handleDl(item.name)}
              >
                {item.name in dls ? (
                  <button
                    type="button"
                    className="absolute bottom-2 right-2 inline-flex items-center rounded-full border border-transparent bg-green-600 p-1 text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    <Tooltip content="Downloaded" style="light">
                      <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </Tooltip>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="absolute bottom-2 right-2 inline-flex items-center rounded-full border border-transparent bg-stone-600 p-1 text-white shadow-sm hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
                  >
                    <Tooltip content="Download" style="light">
                      <ArrowDownTrayIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </Tooltip>
                  </button>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Transition.Root show={open} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-white transition-all w-full max-w-screen sm:p-4 h-screen">
                  <Swiper
                    modules={[Virtual, Navigation, A11y]}
                    navigation
                    slidesPerView={1}
                    className="h-full w-full"
                    initialSlide={currentSlide}
                    lazy
                    loop
                  >
                    {data?.items.map((item, index) => (
                      <SwiperSlide key={item.name} virtualIndex={index}>
                        <div className="flex h-full items-center justify-center bg-black dark:bg-gray-700 dark:text-white">
                          <img
                            src={item.preview}
                            alt={item.name}
                            className="object-fit"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <button
                    type="button"
                    className="absolute top-6 right-6 inline-flex items-center text-white z-20"
                  >
                    <XMarkIcon
                      className="w-5 sm:w-10 h-5 sm:h-10 "
                      onClick={() => setOpen(false)}
                    />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

Gallery.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutNoHead>{page}</LayoutNoHead>;
};

export default Gallery;

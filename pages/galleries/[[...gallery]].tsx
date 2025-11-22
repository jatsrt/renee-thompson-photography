/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
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
import { produce } from "immer";
import LayoutNoHead from "../../components/LayoutNoHead";
import { Spinner, Tooltip } from "flowbite-react";
import MediaPlayer from "../../components/MediaPlayer";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Virtual } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Gallery: NextPageWithLayout = () => {
  const router = useRouter();

  const [dls, setDls] = React.useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dls");
      return saved ? (JSON.parse(saved) as { [key: string]: number }) : {};
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

  const { data, isLoading } = useFetcherFolder(prefix);

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
          {/* <ol role="list" className="flex items-center space-x-4">
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
            {gallery?.slice(-1).map((slug, i) => (
              <li key={i}>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-300"
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
          </ol> */}
        </nav>
        {data?.subFolders && data?.subFolders.length == 0 && (
          <div className="mt-2 md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {gallery?.slice(-1)}
              </h2>
            </div>
          </div>
        )}
      </div>

      {isLoading && (
        <div className="flex h-full items-center justify-center my-4 sm-my-8 lg-my-12">
          <Spinner
            color="purple"
            aria-label="Extra large spinner example"
            size="xl"
          />
        </div>
      )}

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

      <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:pt-4 sm:pb-8 lg:max-w-7xl lg:px-8 lg:pt-8">
        <ul
          role="list"
          className="grid grid-cols-4 gap-1 sm:grid-cols-4 lg:grid-cols-6 grid-flow-dense"
        >
          {data?.medias.map((media, index) => (
            <li
              key={media.name}
              className="relative bg-gray-100 flex col-span-2"
            >
              <MediaPlayer media={media} />

              <Link
                href={media.source.replace("m3u8", "mp4")}
                download
                target="_blank"
                onClick={() => handleDl(media.name)}
              >
                {media.name in dls ? (
                  <button
                    type="button"
                    className="absolute bottom-2 right-2 inline-flex items-center rounded-full border border-transparent bg-green-600 p-1 text-white shadow-xs hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    <Tooltip content="Downloaded" style="light">
                      <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </Tooltip>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="absolute bottom-2 right-2 inline-flex items-center rounded-full border border-transparent bg-stone-600 p-1 text-white shadow-xs hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
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
          {data?.items.map((item, index) => (
            <li
              key={item.name}
              className={classNames(
                item.orientation == "landscape" ? "col-span-2" : "",
                "relative bg-gray-100 flex"
              )}
            >
              <div
                className={classNames(
                  item.orientation == "landscape"
                    ? "aspect-[10/7]"
                    : "aspect-[7/10]",
                  "group block w-full overflow-hidden"
                )}
              >
                <img
                  src={item.preview}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
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
                    className="absolute bottom-2 right-2 inline-flex items-center rounded-full border border-transparent bg-green-600 p-1 text-white shadow-xs hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    <Tooltip content="Downloaded" style="light">
                      <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </Tooltip>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="absolute bottom-2 right-2 inline-flex items-center rounded-full border border-transparent bg-stone-600 p-1 text-white shadow-xs hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
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

      <Transition show={open} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <TransitionChild
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center p-0 text-center">
              <TransitionChild
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative overflow-hidden bg-black transition-all w-screen h-screen">
                  <Swiper
                    modules={[Navigation, A11y, Virtual]}
                    navigation
                    slidesPerView={1}
                    className="h-screen w-screen"
                    initialSlide={currentSlide}
                    virtual={{
                      enabled: true,
                      addSlidesBefore: 1,
                      addSlidesAfter: 1,
                    }}
                    watchSlidesProgress={true}
                    touchRatio={1}
                    touchAngle={45}
                    threshold={5}
                    longSwipesRatio={0.5}
                    speed={300}
                  >
                    {data?.items.map((item, index) => (
                      <SwiperSlide key={item.name} virtualIndex={index}>
                        <div className="flex h-screen items-center justify-center bg-black">
                          <img
                            src={item.preview}
                            alt={item.name}
                            className="max-h-screen max-w-full object-contain swiper-lazy"
                            data-src={item.preview}
                          />
                          <div className="swiper-lazy-preloader"></div>
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
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

Gallery.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutNoHead>{page}</LayoutNoHead>;
};

export default Gallery;

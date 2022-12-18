import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

import bannerPic from "../public/photos/home/Banner.jpg";
import seniorsGradsPic from "../public/photos/seniorsgrads/Banner.jpg";
import eventsPic from "../public/photos/events/Banner.jpg";
import familiesPic from "../public/photos/families/Banner.jpg";
import specialRequestsPic from "../public/photos/specialrequests/Banner.jpg";
import sportsPic from "../public/photos/sports/Banner.jpg";
import review1 from "../public/photos/home/Review1.jpg";
import review2 from "../public/photos/home/Review2.jpg";
import Link from "next/link";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Renee Thompsonn Photography</title>
        <meta
          name="description"
          content="Photographer and photgraphy studio in the Westborough, MA area."
        />
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <div
          className="bg-gradient-to-r from-stone-500 to-neutral-800"
          id="services"
        >
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-10 sm:pb-12 lg:max-w-7xl lg:px-8 lg:pt-12">
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8"
            >
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={seniorsGradsPic}
                    alt="Seniors and Grads"
                    placeholder="blur"
                  />
                  <Link
                    className="absolute inset-0 focus:outline-none"
                    href="/services/seniorsgrads"
                  >
                    <span className="sr-only">
                      View details for seniors and grads
                    </span>
                  </Link>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">
                  Seniors and Grads
                </p>
              </li>
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={eventsPic}
                    alt="Events"
                    placeholder="blur"
                  />
                  <Link
                    className="absolute inset-0 focus:outline-none"
                    href="/services/events"
                  >
                    <span className="sr-only">View details for events</span>
                  </Link>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">
                  Events
                </p>
              </li>
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={familiesPic}
                    alt="Children and Families"
                    placeholder="blur"
                  />
                  <Link
                    className="absolute inset-0 focus:outline-none"
                    href="/services/childrenfamilies"
                  >
                    <span className="sr-only">
                      View details for children and families
                    </span>
                  </Link>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">
                  Children and Families
                </p>
              </li>
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={specialRequestsPic}
                    alt="Speial Requests"
                    placeholder="blur"
                  />
                  <Link
                    className="absolute inset-0 focus:outline-none"
                    href="/services/specialrequests"
                  >
                    <span className="sr-only">
                      View details for special requests
                    </span>
                  </Link>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">
                  Special Requests
                </p>
              </li>
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={sportsPic}
                    alt="Sports"
                    placeholder="blur"
                  />
                  <Link
                    className="absolute inset-0 focus:outline-none"
                    href="/services/sports"
                  >
                    <span className="sr-only">View details for sports</span>
                  </Link>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">
                  Sports
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white pt-16 lg:py-24">
          <div className="bg-stone-600 pb-16 lg:relative lg:z-10 lg:pb-0">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
              <div className="relative lg:-my-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                  <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-10 lg:aspect-none lg:h-full">
                    <Image
                      className="object-cover lg:h-full lg:w-full object-top"
                      src={review1}
                      alt="Danna Garcia"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                  <blockquote>
                    <div>
                      <svg
                        className="h-12 w-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="mt-6 text-xl font-medium text-white">
                        Renee is a fantastic photographer! She made me feel so
                        comfortable and got some really awesome pictures. I 100%
                        recommend Renee if you are looking for any kind of
                        photography, she did my senior pictures and they turned
                        out stunning.
                      </p>
                    </div>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-white">
                        Danna Garcia - Student
                      </p>
                      <p className="text-base font-medium text-indigo-100">
                        Westborough High Class of &apos;23
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white pt-16 lg:py-24">
          <div className="bg-stone-600 pb-16 lg:relative lg:z-10 lg:pb-0">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
              <div className="visible lg:hidden relative lg:-my-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                  <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-10 lg:aspect-none lg:h-full">
                    <Image
                      className="object-cover lg:h-full lg:w-full object-top"
                      src={review2}
                      alt="Kadish"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                  <blockquote>
                    <div>
                      <svg
                        className="h-12 w-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="mt-6 text-2xl font-medium text-white">
                        Renee is truly a gifted photographer of people. She has
                        taken pictures of both my daughters and somehow
                        magically brings each of their personalities into the
                        pictures. Some of my all time favorite photos of the
                        girls are from Renee. She is an amazing photographer,
                        and I couldn&apos;t be happier with the pictures. I
                        would book her again in a heartbeat!
                      </p>
                    </div>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-white">
                        Stacey Kadish - Mom
                      </p>
                      <p className="text-base font-medium text-indigo-100">
                        Westborough High Class of &apos;22
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="invisible lg:visible relative lg:-my-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                  <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-10 lg:aspect-none lg:h-full">
                    <Image
                      className="object-cover lg:h-full lg:w-full object-top"
                      src={review2}
                      alt="Kadish"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      image={bannerPic}
      title={
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          <span className="block xl:inline">Hi, I&apos;m Renee</span>{" "}
          <span className="block xl:inline text-gray-500 text-md sm:text-lg md:text-xl">
            (she/her)
          </span>
        </h1>
      }
      summary={
        <>
          <p className="mt-4 text-sm tracking-tight text-gray-500 sm:text-md md:text-lg md:mr-16 lg:mt-8">
            Your enthusiastic face behind the camera.{" "}
          </p>
          <p className="text-sm tracking-tight text-gray-500 sm:text-md md:text-lg md:mr-16">
            Ready to capture your special moment and make you feel fabulous.
          </p>
          <p className="text-sm tracking-tight text-gray-500 sm:text-md md:text-lg md:mr-16 mt-4 italic">
            It&apos;s nice to meet you!
          </p>
        </>
      }
    >
      {page}
    </Layout>
  );
};

export default Home;

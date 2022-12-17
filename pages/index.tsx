import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FacebookIcon, InstagramIcon } from "../components/Icons";
import Layout from "../components/Layout";

import bannerPic from "../photos/314336153_810713513237695_5687237389817958517_n.jpg";
import hsSeniorsPic from "../photos/315222280_814690526173327_3196118921171264871_n.jpg";
import weddingsPic from "../photos/302703504_616655996702896_2787140847235190438_n.jpg";
import babyShowersPic from "../photos/306660878_624438829257946_8123035310907024595_n.jpg";
import infantsPic from "../photos/313425939_805546290421084_3205085087773398883_n.jpg";
import specialRequestsPic from "../photos/313871455_808183926823987_7868618937927618177_n.jpg";
import locationsPic from "../photos/313943713_806537123655334_7795609401173884935_n.jpg";
import sportsPic from "../photos/317368540_827891218186591_4687860874442681310_n.jpg";
import headshotsPic from "../photos/315327595_815422346100145_4054141741932922377_n.jpg";
import dannaPic from "../photos/316303021_820005485641831_2421918661459659589_n.jpg";
import kadishPic from "../photos/279437970_532064315162065_56799331566712561_n.jpg";
import ContactForm from "../components/ContactForm";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Renee Thompsonn Photography</title>
        <meta
          name="description"
          content="Photographer and photgraphy studio in the Westborough, MA area."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout image={bannerPic}>
        <div
          className="bg-gradient-to-r from-stone-500 to-neutral-800"
          id="services"
        >
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-10 sm:pb-12 lg:max-w-7xl lg:px-8 lg:pt-12">
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8"
            >
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={hsSeniorsPic}
                    alt="High School Seniors"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for High School Seniors
                    </span>
                  </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">
                  High School Seniors
                </p>
              </li>
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={weddingsPic}
                    alt="Weddings"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for Weddings and Events
                    </span>
                  </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">
                  Weddings and Events
                </p>
              </li>
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={babyShowersPic}
                    alt="Baby Showers"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for Baby Showers
                    </span>
                  </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">
                  Baby Showers
                </p>
              </li>
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={infantsPic}
                    alt="Infants, Toddlers and Children"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for Infant, Toddlers and Children
                    </span>
                  </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">
                  Infants, Toddlers, and Children
                </p>
              </li>
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={specialRequestsPic}
                    alt="Speial Requests"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for Special Requests
                    </span>
                  </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">
                  Special Requests
                </p>
              </li>
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={locationsPic}
                    alt="Location Shoots"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">View details for Weddings</span>
                  </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">
                  Location Portraits
                </p>
              </li>
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={sportsPic}
                    alt="Sports Action"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">View details for Sports</span>
                  </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">
                  Sports Action
                </p>
              </li>
              <li className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={headshotsPic}
                    alt="Headshots"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">View details for Headshots</span>
                  </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">
                  Professional Headshots
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
                      src={dannaPic}
                      alt="Danna Garcia"
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
                      src={kadishPic}
                      alt="Kadish"
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
                      src={kadishPic}
                      alt="Kadish"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mb-4 bg-stone-100 border-t border-b border-stone-100 sm:mb-8 lg:mb-12"
          id="contact"
        >
          <div className="relative bg-white">
            <div className="absolute inset-0">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
              <div className="bg-stone-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                <div className="mx-auto max-w-lg">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Get in touch
                  </h2>
                  <p className="mt-3 text-lg leading-6 text-gray-500">
                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                    volutpat massa dictumst amet. Sapien tortor lacus arcu.
                  </p>
                  <dl className="mt-8 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Postal address</dt>
                      <dd>
                        <p className="font-bold">Studio Location:</p>
                        <p>18 Lyman St, Suite 221</p>
                        <p>Westborough, MA 01581</p>
                      </dd>
                    </div>
                    <div className="mt-6">
                      <dt className="sr-only">Phone number</dt>
                      <dd className="flex">
                        <PhoneIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">
                          <a href="tel:15086853895">1 (508) 685-3895</a>
                        </span>
                      </dd>
                    </div>
                    <div className="mt-3">
                      <dt className="sr-only">Email</dt>
                      <dd className="flex">
                        <EnvelopeIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">
                          <a href="mailto:renee@reneethomnpson.photos">
                            renee@reneethompson.photos
                          </a>
                        </span>
                      </dd>
                    </div>
                    <div className="mt-3">
                      <dt className="sr-only">Facebook</dt>
                      <dd className="flex">
                        <FacebookIcon className="h-6 w-6 flex-shrink-0 text-gray-400" />
                        <span className="ml-3">
                          <a href="https://www.facebook.com/ReneeThompsonPhotos">
                            See us on Facebook
                          </a>
                        </span>
                      </dd>
                    </div>
                    <div className="mt-3">
                      <dt className="sr-only">Instagram</dt>
                      <dd className="flex">
                        <InstagramIcon className="h-6 w-6 flex-shrink-0 text-gray-400" />
                        <span className="ml-3">
                          <a href="https://www.instagram.com/ReneeThompsonPhotos">
                            See us on Instagram
                          </a>
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                <div className="mx-auto max-w-lg lg:max-w-none">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;

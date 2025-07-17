import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";
import ContactForm from "../components/ContactForm";
import { FacebookIcon, InstagramIcon } from "../components/Icons";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

import bannerPic from "../public/photos/contact/Banner.jpg";
import Head from "next/head";

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Photographer and photgraphy studio in the Westborough, MA area."
        />
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className="bg-slate-100 border-t border-b border-slate-100"
        id="contact"
      >
        <div className="relative bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
          </div>
          <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
            <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="mx-auto max-w-lg">
                <dl className="mt-8 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Postal address</dt>
                    <dd>
                      <p className="font-bold">Renee Thompson Photography</p>
                      <p>24 Nash St</p>
                      <p>Westborough, MA 01581</p>
                    </dd>
                  </div>
                  <div className="mt-6">
                    <dt className="sr-only">Get Directions</dt>
                    <dd className="flex">
                      <MapIcon
                        className="h-6 w-6 shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">
                        <a href="https://goo.gl/maps/FVCyciHyEk3qNGJP6">
                          Get Directions
                        </a>
                      </span>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="flex">
                      <PhoneIcon
                        className="h-6 w-6 shrink-0 text-gray-400"
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
                        className="h-6 w-6 shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">
                        <a href="mailto:renee@reneethompson.photos">
                          renee@reneethompson.photos
                        </a>
                      </span>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">Facebook</dt>
                    <dd className="flex">
                      <FacebookIcon className="h-6 w-6 shrink-0 text-gray-400" />
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
                      <InstagramIcon className="h-6 w-6 shrink-0 text-gray-400" />
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
    </>
  );
};

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      image={bannerPic}
      title={
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          <span className="block xl:inline">Get in touch</span>
        </h1>
      }
      summary={
        <>
          <p className="mt-4 text-sm tracking-tight text-gray-500 sm:text-md md:text-lg md:mr-16 lg:mt-8">
            Any questions or comments, please contact me through the form below,
            email, or calling me.
          </p>
        </>
      }
    >
      {page}
    </Layout>
  );
};

export default Contact;

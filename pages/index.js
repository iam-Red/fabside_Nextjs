import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { BiRupee } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiTShirt } from "react-icons/pi";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isHoveredsticker, setHoversticker] = useState(false);
  const [isHoveredmugs, setHovermugs] = useState(false);
  const [isHoveredtshirts, setHovertshirts] = useState(false);
  const [isHoveredhoodies, setHoverhoodies] = useState(false);

  return (
    <div>
      <Head>
        <title>FabSide.com - Become Fab</title>
        <meta name="description" content="Codewear.com - Wear the code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{/* <img src="/" alt="" /> */}</div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Become Fab today with FabSide.com
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever you want you can get it here. Become Fab today on
              fabside.com!
            </p>
          </div>

          {/* <div class=" h-100 overflow-hidden py-3">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x500"
            />
          </div> */}
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://www.codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fbanner%2F2.webp&w=1920&q=75"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fbanner%2F6.webp&w=1920&q=75"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fbanner%2F1.webp&w=1920&q=75"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="lg:w-2/3 mx-auto">
              <div
                class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 "
                onMouseOver={() => setHovermugs(true)}
                onMouseLeave={() => setHovermugs(false)}
              >
                {isHoveredmugs && (
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="https://images.unsplash.com/photo-1474667689933-0ff72b3d16e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  />
                )}
                {!isHoveredmugs && (
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block  absolute inset-0"
                    src="https://images.unsplash.com/photo-1474667689933-0ff72b3d16e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  />
                )}

                <div
                  class="text-center relative z-10 w-full"
                  onMouseOver={() => setHovermugs(true)}
                  onMouseLeave={() => setHovermugs(false)}
                >
                  {isHoveredmugs && (
                    <div class="text-center relative z-10 w-full">
                      <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">
                        Mugs
                      </h2>
                      <p class="leading-relaxed">
                        Checkout our latest collection of Mugs.
                      </p>
                      <Link legacyBehavior href={"/mugs"}>
                        <a class="mt-3 text-indigo-500 inline-flex items-center">
                          Explore More
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/2">
                  <div
                    class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative"
                    onMouseOver={() => setHovertshirts(true)}
                    onMouseLeave={() => setHovertshirts(false)}
                  >
                    {isHoveredtshirts && (
                      <img
                        alt="gallery"
                        class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                        src="https://images.unsplash.com/photo-1416339698674-4f118dd3388b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"
                      />
                    )}
                    {!isHoveredtshirts && (
                      <img
                        alt="gallery"
                        class="w-full object-cover h-full object-center block absolute inset-0"
                        src="https://images.unsplash.com/photo-1416339698674-4f118dd3388b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"
                      />
                    )}
                    <div
                      class="text-center relative z-10 w-full"
                      onMouseOver={() => setHovertshirts(true)}
                      onMouseLeave={() => setHovertshirts(false)}
                    >
                      {isHoveredtshirts && (
                        <div class="text-center relative z-10 w-full">
                          <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                            Tshirts
                          </h2>
                          <p class="leading-relaxed">
                            Checkout our latest collection of Tshirts.
                          </p>
                          <Link legacyBehavior href={"/tshirts"}>
                            <a class="mt-3 text-indigo-500 inline-flex items-center">
                              Explore More
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div class="px-2 w-1/2">
                  <div
                    class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative"
                    onMouseOver={() => setHoverhoodies(true)}
                    onMouseLeave={() => setHoverhoodies(false)}
                  >
                    {isHoveredhoodies && (
                      <img
                        alt="gallery"
                        class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                        src="https://images.unsplash.com/photo-1573742262768-2693bc5b65e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                      />
                    )}
                    {!isHoveredhoodies && (
                      <img
                        alt="gallery"
                        class="w-full object-cover h-full object-center block absolute inset-0"
                        src="https://images.unsplash.com/photo-1573742262768-2693bc5b65e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                      />
                    )}
                    <div
                      class="text-center relative z-10 w-full"
                      onMouseOver={() => setHoverhoodies(true)}
                      onMouseLeave={() => setHoverhoodies(false)}
                    >
                      {isHoveredhoodies && (
                        <div class="text-center relative z-10 w-full">
                          <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                            Hoodies
                          </h2>
                          <p class="leading-relaxed">
                            Checkout our latest collection of Hoodies.
                          </p>
                          <Link legacyBehavior href={"/hoodies"}>
                            <a class="mt-3 text-indigo-500 inline-flex items-center">
                              Explore More
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-5 ">
                <div
                  class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4"
                  onMouseOver={() => setHoversticker(true)}
                  onMouseLeave={() => setHoversticker(false)}
                >
                  {isHoveredsticker && (
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center  opacity-25  block absolute inset-0"
                      src="https://images.unsplash.com/photo-1540651810471-5699df74834f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                    />
                  )}
                  {!isHoveredsticker && (
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center  block absolute inset-0"
                      src="https://images.unsplash.com/photo-1540651810471-5699df74834f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                    />
                  )}

                  <div
                    class="text-center relative w-full "
                    onMouseOver={() => setHoversticker(true)}
                    onMouseLeave={() => setHoversticker(false)}
                  >
                    {isHoveredsticker && (
                      <div class="text-center relative w-full z-10">
                        <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">
                          Stickers
                        </h2>
                        <p class="leading-relaxed">
                          Checkout our latest collection of Stickers.
                        </p>
                        <Link legacyBehavior href={"/stickers"}>
                          <a class="mt-3 text-indigo-500 inline-flex items-center">
                            Explore More
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                  <PiTShirt />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Premium Tshirts
                </h2>
                <p class="leading-relaxed text-base">
                  Our T-Shirts are 100% made of cotton.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                  <LiaShippingFastSolid />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Free Shipping
                </h2>
                <p class="leading-relaxed text-base">
                  We ship all over India for FREE.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                  <BiRupee />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Exciting Offers
                </h2>
                <p class="leading-relaxed text-base">
                  We provide amazing offers & discounts on our products.
                </p>
              </div>
            </div>
          </div>
          {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
    </div>
  );
}

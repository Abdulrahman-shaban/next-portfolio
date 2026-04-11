"use client";
//list of projects
import projectList from "../_data/projectsList";
import Image from "next/image";
// import Swiper JS
// import Swiper styles
import "swiper/css";

import Link from "next/link";
import { useEffect } from "react";
//import font
import { Play } from "next/font/google";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiNuxtdotjs } from "react-icons/si";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { MdOutlineClearAll } from "react-icons/md";
const mainFont = Play({
  subsets: ["latin"],
  weight: "700",
});

export default function Projects({ params }) {
  const [tab, setTab] = useState("all");
  const [projects, setProjects] = useState(projectList);
  //change images according to width of window

  const [windowWidth, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    if (tab === "all") {
      setProjects(projectList);
    } else {
      setProjects(
        projectList.filter((i) => {
          return i.lang == tab;
        })
      );
    }
  }, [windowWidth, tab]);
  return (
    <>
      <div
        id="Projects"
        className={`flex  container text-[18px] border-y-2 border-y-bgThird  ${mainFont.className} flex-wrap `}
      >
        <div
          className={`flex gap-2 items-center cursor-pointer min-w-[100px] grow border-y border-bgThird py-5 justify-center  hover:bg-bgThird px-1 ${
            tab == "all" && "bg-bgThird"
          }`}
          onClick={() => setTab("all")}
        >
          <MdOutlineClearAll />
          <p>All</p>
        </div>
        <div
          className={`flex gap-2 items-center cursor-pointer min-w-[100px] grow border-y border-bgThird py-5 justify-center  hover:bg-bgThird px-1  ${
            tab == "js" && "bg-bgThird"
          }`}
          onClick={() => setTab("js")}
        >
          <IoLogoJavascript />
          <p>java script</p>
        </div>
        <div
          className={`flex gap-2 items-center cursor-pointer min-w-[100px] grow border-y border-bgThird py-5 justify-center  hover:bg-bgThird px-1 ${
            tab == "react" && "bg-bgThird"
          }`}
          onClick={() => setTab("react")}
        >
          <FaReact />
          <p>React</p>
        </div>
        <div
          className={`flex gap-2 items-center cursor-pointer min-w-[100px] grow border-y border-bgThird py-5 justify-center  hover:bg-bgThird px-1 ${
            tab == "next" && "bg-bgThird"
          }`}
          onClick={() => setTab("next")}
        >
          <SiNextdotjs />
          <p>Next</p>
        </div>
        <div
          className={`flex gap-2 items-center cursor-pointer min-w-[100px] grow border-y border-bgThird py-5 justify-center  hover:bg-bgThird px-1  ${
            tab == "vue" && "bg-bgThird"
          }`}
          onClick={() => setTab("vue")}
        >
          <FaVuejs />
          <p>Vue js</p>
        </div>
        <div
          className={`flex gap-2 items-center cursor-pointer min-w-[100px] grow border-y border-bgThird py-5 justify-center  hover:bg-bgThird px-1 ${
            tab == "nuxt" && "bg-bgThird"
          }`}
          onClick={() => setTab("nuxt")}
        >
          <SiNuxtdotjs />
          <p>Nuxt js</p>
        </div>
      </div>

      <Swiper
        effect={"coverflow"}
        slidesPerView={projects.length >= 3 ? 3 : projects.length == 2 ? 2 : 1}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper my-20"
      >
        {projects.map((p) => (
          <SwiperSlide>
            <Link
              key={p.title}
              href={`${params.locale}/project/${p.id}`}
              className="group relative inline-block  bg-overlay w-full h-80 flex-grow "
            >
              <Image
                alt={p.title}
                src={
                  windowWidth && windowWidth > 1055
                    ? p.img
                    : p.img_small || p.img
                }
                loading="lazy"
                className="absolute  h-full w-full object-cover object-top opacity-75 transition-opacity group-hover:opacity-25 top-0 "
              />
              <div
                className={`w-full  p-4 sm:p-6 lg:p-8 absolute bottom-0 bg-bgThird/75`}
              >
                <p className="text-xl font-bold text-white sm:text-2xl border-b-2 mb-2">
                  {params.locale === "en" ? p.title : p.title_ar}
                </p>
                <p
                  className={`text-sm font-medium  tracking-widest  line-clamp-1 ${mainFont.className}`}
                >
                  {params.locale === "en" ? p.aboutTheSite : p.aboutTheSite_ar}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
//project list
import projectsList from "../../../_data/projectsList";
import Image from "next/image";
//import icons
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
//import font
import { Josefin_Sans, Play } from "next/font/google";
const mainFont = Play({
  subsets: ["latin"],
  weight: "700",
});
const TypographyFont = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});
export default function page({ params }) {
  const t = useTranslations('Index');
  let choosenProject = projectsList.find((e) => {
    return e.id == params.id;
  });
  const aboutProject = useRef();
  const imgArr = choosenProject.images;
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState(imgArr[index]);
  useEffect(() => {
    setImg(imgArr[index]);
    aboutProject.current.innerHTML =params.locale==="en"? choosenProject.aboutTheSite:choosenProject.aboutTheSite_ar;
  }, [choosenProject.aboutTheSite, imgArr, index]);
  return (
    <div className="bg-bgPrimary ">
      <div className="w-full h-[100vh]">
        <Image
          priority
          className="h-full w-full"
          width={1200}
          height={500}
          src={choosenProject.imgAllPages}
          alt="developer"
        />
      </div>
      <div className="flex container gap-3 pt-2">
        <Link
          target="_blank"
          href={choosenProject.liveMode}
          className="p-3 bg-bgThird hover:bg-bgThird/50"
        >
        {t('LiveDemo')} <FaExternalLinkAlt className="inline-block"/>
        </Link>
        <Link
          target="_blank"
          href={choosenProject.code}
          className="p-3 bg-bgThird hover:bg-bgThird/50"
        >
           {t('Code')}<FaCode className="inline-block"/>
        </Link>
      </div>
      <div className="py-8 container ">
        <div className=" flex-col gap-12 flex ">
          <div className="relative before:absolute before:bg-border before:w-3/12 before:h-1 before:-bottom-2 before:top-auto ">
            <h1 className={`${mainFont.className} text-base`}> {t('PROJECT')}</h1>
            <h2 className={`${mainFont.className} text-4xl `}>
              {params.locale==="en"? choosenProject.title:choosenProject.title_ar}
            </h2>
          </div>
          <p
            className={` ${TypographyFont.className} text-txtSecondary text-xl`}
            ref={aboutProject}
          ></p>
          <h3>
            <span className="flex items-center">
              <span className="h-px flex-1 bg-txtSecondary"></span>
              <span className={`${mainFont.className} text-2xl shrink-0 px-6 `}>
                {t('TOOLS')}
              </span>
              <span className="h-px flex-1 bg-txtSecondary"></span>
            </span>
          </h3>
          <div className="flex gap-3 flex-wrap justify-center">
            {choosenProject.tools.map((p) => (
              <div
                key={p}
                className=" group relative rounded-3xl  overflow-hidden border border-border px-8 py-3 focus:outline-none focus:ring w-fit"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-border transition-all group-hover:w-full group-active:bg-bgSecondary"></span>
                <span className="text-base relative font-medium text-border transition-colors group-hover:text-txtPrimary">
                  {p}
                </span>
              </div>
            ))}
          </div>
          <span className="flex items-center">
            <span className="h-px flex-1 bg-txtSecondary"></span>
            <span className={`${mainFont.className} text-2xl shrink-0 px-6 `}>
              {t('SITE')}
            </span>
            <span className="h-px flex-1 bg-txtSecondary"></span>
          </span>
          <div className="container">
            <div className="info">
              <div className="slider">
                <Image
                  src={img}
                  width={"100%"}
                  height={"100%"}
                  alt={choosenProject.title}
                ></Image>
              </div>
              <div className={`control flex justify-between mt-3 ${params.locale==="ar"&&"flex-row-reverse"}`}>
                <span
                  className="p-3 bg-bgThird/75 cursor-pointer"
                  onClick={() => {
                    index == 0 ? setIndex(imgArr.length - 1) : setIndex(index - 1)

                  }}
                >
                 <MdOutlineKeyboardDoubleArrowLeft/>
                </span>
                <span
                  className="p-3 bg-bgThird/75 cursor-pointer"
                  onClick={() => {
                    index == imgArr.length - 1 ? setIndex(0) : setIndex(index + 1);

                  }}
                >
                  <MdKeyboardDoubleArrowRight/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

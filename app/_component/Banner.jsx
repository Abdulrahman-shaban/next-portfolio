"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
//import images
import bg from "../_assets/_animation/bg.gif";
import bg2 from "../_assets/bg1.webp";
import bg2SmallScreen from "../_assets/bg1SmallScreen.webp";
import bg2Phone from "../_assets/bg1Phone.webp";
//import font
import { Saira_Extra_Condensed } from "next/font/google";
import { useEffect, useState } from "react";
const mainFont = Saira_Extra_Condensed({
  subsets: ["latin"],
  weight: ["700", "400"],
});

export default function Banner() {
    //change images according to width of window
  const [windowWidth, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  },[windowWidth]);
  const t = useTranslations("Index");
  return (
    <section id="Home" className="relative ">
      {windowWidth && windowWidth > 786 && (
        <Image
          src={bg2}
          className="absolute w-full top-0 left-0 h-full -z-10"
          alt="background"
          width={1200}
          height={700}
          priority
        />
      )}
      {windowWidth && (windowWidth <= 786 && windowWidth > 415 )&&(
        <Image
          src={bg2SmallScreen}
          className="absolute w-full top-0 left-0 h-full -z-10"
          alt="background"
          width={786}
          height={500}
          priority
        />
      )}
        {windowWidth && windowWidth <= 415&& (
        <Image
          src={bg2Phone}
          className="absolute w-full top-0 left-0 h-full -z-10"
          alt="background"
          width={412}
          height={483}
          priority
        />
      )}
      <div className="absolute inset-0 bg-overlay/70 "></div>
      <div className="mx-auto max-w-screen-xl px-9 py-32 md:flex  justify-around md:h-screen md:items-center z-10 relative container text-center sm:text-left">
        <div className="min-w-[700px] flex flex-col items-center	md:items-start">
          <h1
            className={`text-4xl  xs:text-5xl sm:text-6xl text-txtPrimary ${mainFont.className} font-bold mb-5 tracking-wider`}
          >
            {t("I Am")}
          </h1>
          <div className="relative h-24 w-full -z-10">
            <h1
              className={`text-4xl xs:text-5xl w-full text-center md:text-start sm:text-6xl  text-txtPrimary ${mainFont.className} font-bold mb-5 absolute top-0 left-0 txt-transform1 `}
            >
              {t("Front-End")}
            </h1>
            <h1
              className={`text-4xl xs:text-5xl  text-center md:text-start sm:text-6xl w-full text-txtPrimary ${mainFont.className} font-bold mb-5 absolute top-0 left-0 txt-transform2 `}
            >
              {t("Coder")}
            </h1>
            <h1
              className={`text-4xl xs:text-5xl text-center md:text-start sm:text-6xl w-full text-txtPrimary ${mainFont.className} font-bold mb-5 absolute top-0 left-0 txt-transform3 `}
            >
              {t("React")}
            </h1>
          </div>
          <Link
            href="https://drive.google.com/file/d/16KzpIFCXksz49B4yxYWHqW1Mw2nWvYBa/view?usp=sharing"
            target="_blanck"
            className="group relative inline-block focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-bgPrimary transition-transform group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-border"></span>
            <span className="relative text-txtPrimary inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
              {t("CV")}
            </span>
          </Link>
        </div>
        <div
          className=" max-w-4xl  h-full   mt-6 -ml-5 -z-1 flex-1 lg:flex-none"
          style={{ width: "50%" }}
        >
          {windowWidth && windowWidth > 768 && (
            <Image
              priority
              className="h-1/2full w-full hidden md:inline-block"
              width={100}
              height={100}
              src={bg}
              alt="developer"
            />
          )}
        </div>
      </div>
    </section>
  );
}

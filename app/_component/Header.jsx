"use client";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
//import icons
import { FaGithub } from "react-icons/fa";
//import font
import { Play } from "next/font/google";
const mainFont = Play({
  subsets: ["latin"],
  weight: "400",
});
export default function HeaderComponent() {
  //state to detect active link
  const [activeLink, setActiveLink] = useState("");
  const t = useTranslations("Index");
  //active language
  const localActive = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <header className=" fixed w-full bg-bgPrimary shadow-md shadow-bgSecondary  text-txtPrimary z-50">
      <div
        className={`flex flex-1 items-center  justify-between h-16 ${mainFont.className} px-4 sm:px-6 lg:px-8`}
      >
        <nav aria-label="Global">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                className={`transition hover:text-border ${
                  activeLink === t("Home") &&
                  "text-border border-b-2 border-border"
                }`}
                href="/#Home"
                onClick={(e) => {
                  setActiveLink(e.target.innerText);
                }}
              >
                {" "}
                {t("Home")}{" "}
              </Link>
            </li>
            <li>
              <Link
                className={`transition hover:text-border ${
                  activeLink === t("About") &&
                  "text-border border-b-2 border-border"
                }`}
                href="/#About"
                onClick={(e) => {
                  setActiveLink(e.target.innerText);
                }}
              >
                {" "}
                {t("About")}{" "}
              </Link>
            </li>
            <li>
              <Link
                className={`transition hover:text-border ${
                  activeLink === t("Projects") &&
                  "text-border border-b-2 border-border"
                }`}
                href="/#Projects"
                onClick={(e) => {
                  setActiveLink(e.target.innerText);
                }}
              >
                {" "}
                {t("Projects")}{" "}
              </Link>
            </li>
            <li>
              <Link
                className={`transition hover:text-border ${
                  activeLink === t("Contect") &&
                  "text-border border-b-2 border-border"
                }`}
                href="/#Contect"
                onClick={(e) => {
                  setActiveLink(e.target.innerText);
                }}
              >
                {" "}
                {t("Contect")}{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4 ">
          <Link
            className="  text-center rounded-full bg-bgThird w-9 h-9 leading-9	"
            href="https://github.com/Abdulrahman-shaban"
            target="_blank"
            aria-label="github"
          >
            <FaGithub className="h-full w-full" />
          </Link>
          <span
            className="  text-center rounded-full bg-bgThird w-9 h-9 leading-9	cursor-pointer"
            aria-label="language"
            onClick={(e) => {
              const nextLocale = e.target.innerText.toLowerCase().includes("ar")
                ? window.location.pathname.replace("/en", "/ar")
                : window.location.pathname.replace("/ar", "/en");
              startTransition(() => {
                router.push(`../../${nextLocale}`);
              });
              console.log(nextLocale);
            }}
          >
            {localActive === "ar" ? "EN" : "AR"}
          </span>
        </div>
      </div>
    </header>
  );
}

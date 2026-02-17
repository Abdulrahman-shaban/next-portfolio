import html from "../_assets/html.webp";
import css from "../_assets/css.webp";
import js from "../_assets/js.webp";
import typescript from "../_assets/typescript.webp";
import bootstrap from "../_assets/bootstrap.webp";
import mui from "../_assets/mui.webp";
import react from "../_assets/react.webp";
import vue from "../_assets/vue.webp";
import nuxt from "../_assets/nuxt.webp";
import firebase from "../_assets/firebase.webp";
import primevue from "../_assets/primevue.webp";
import next from "../_assets/next.webp";
import sass from "../_assets/sass.webp";
import github from "../_assets/github.webp";
import tailwind from "../_assets/tailwind.webp";
import Image from "next/image";
export default function Skills({ params }) {
  return (
    <div
      className={` bg-bgPrimary whitespace-nowrap overflow-hidden ${
        params.locale === "ar" && "flex flex-row-reverse"
      }`}
    >
      <div className={`scroll-smooth py-11 scrollSkills inline-block w-fit `}>
        {[
          html,
          css,
          js,
          typescript,
          sass,
          bootstrap,
          tailwind,
          primevue,
          mui,
          react,
          next,
          vue,
          nuxt,
          github,
          firebase,
        ].map((e, index) => (
          <div className="h-20 w-20 inline-block mx-4" key={index}>
            <Image
              loading="lazy"
              className="h-full w-full"
              width={100}
              height={100}
              src={e}
              alt={e}
            />
          </div>
        ))}
      </div>
      <div className="scroll-smooth py-11 scrollSkills inline-block w-fit">
        {[
          html,
          css,
          js,
          typescript,
          sass,
          bootstrap,
          tailwind,
          primevue,
          mui,
          react,
          next,
          vue,
          nuxt,
          github,
          firebase,
        ].map((e, index) => (
          <div className="h-20 w-20 inline-block mx-4" key={index}>
            <Image
              loading="lazy"
              className="h-full w-full"
              width={100}
              height={100}
              src={e}
              alt={e}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

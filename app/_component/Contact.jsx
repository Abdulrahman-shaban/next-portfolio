"use client";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { LuMessageCircle } from "react-icons/lu";
import { Play } from "next/font/google";

const mainFont = Play({
  subsets: ["latin"],
  weight: "700",
});

export default function Contact() {
  const t = useTranslations("Index");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qld202w",
        "template_l39leuc", // ⚠️ make sure this is correct (you had ttemplate before)
        form.current,
        "g1E92xwcXD9KselDD"
      )
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            iconColor: "#100028",
            title: t("Thanks"),
            text: t("msg"),
            showConfirmButton: false,
            timer: 1500,
          });

          form.current.reset(); // optional: clear form after send
        },
        (error) => {
          console.log(error); // helpful for debugging
          Swal.fire({
            position: "center",
            icon: "error",
            iconColor: "#100028",
            title: t("Error"),
            text: t("errorMsg"),
            showConfirmButton: false,
            timer: 3000,
          });
        }
      );
  };

  return (
    <div className="bg-bgPrimary py-12" id="Contect">
      <div className="flex flex-wrap gap-10 container">
        <div className="w-96 flex-col gap-12 flex">
          <div className="relative before:absolute before:bg-border before:w-3/12 before:h-1 before:-bottom-2 before:top-auto">
            <h2 className={`${mainFont.className} text-4xl`}>
              {t("contactTitle")}
            </h2>
          </div>
          <p className="text-txtSecondary">
            {t("contactTypography")}
          </p>
        </div>

        <div className="w-96 flex-1 flex flex-wrap gap-8">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5 w-full"
          >
            {/* NAME */}
            <div className="flex flex-col w-full">
              <label htmlFor="name">{t("YourName")}</label>
              <input
                name="name"   // ✅ changed
                type="text"
                id="name"
                required
                className="w-full border p-3 bg-txtPrimary/0"
                placeholder={t("YourName")}
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col w-full">
              <label htmlFor="email">{t("YourEmail")}</label>
              <input
                name="email"  // ✅ changed
                type="email"
                id="email"
                required
                className="w-full border p-3 bg-txtPrimary/0"
                placeholder={t("YourEmail")}
              />
            </div>

            {/* SUBJECT */}
            <div className="flex flex-col w-full">
              <label htmlFor="Subject">{t("Subject")}</label>
              <input
                name="title"  // ✅ changed
                type="text"
                id="Subject"
                className="w-full border p-3 bg-txtPrimary/0"
                placeholder={t("Subject")}
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col w-full">
              <label htmlFor="msg">{t("YourMessage")}</label>
              <textarea
                name="message"
                id="msg"
                required
                className="w-full border p-3 bg-txtPrimary/0"
                placeholder={t("YourMessage")}
              />
            </div>

            <div>
              <button
                type="submit"
                className="group relative inline-block focus:outline-none focus:ring"
              >
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-bgPrimary transition-transform group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-border"></span>
                <span className="relative flex text-txtPrimary border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                  {t("SendMessage")} &nbsp;&nbsp;
                  <LuMessageCircle className="w-6 h-6" />
                </span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

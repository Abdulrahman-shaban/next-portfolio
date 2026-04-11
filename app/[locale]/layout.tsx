import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "../globals.css";
import HeaderComponent from "../_component/Header";
import Footer from "../_component/Footer";
//import font
import { Josefin_Sans } from "next/font/google";
const TypographyFont = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "Abdulrahman Mohamed Portfolio",
  description:
    "Welcome to Abdulrahman Mohamed Portfolio's portfolio, where creativity meets functionality. Explore a showcase of meticulously crafted front-end projects, highlighting a passion for elegant design and seamless user experiences.",
  keywords: "react , next js , html , css , responsive website , bootstrap ",
};
export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html dir={locale === "en" ? "ltr" : "rtl"} lang={locale}>
      <body
        className={`text-txtPrimary ${TypographyFont.className} overflow-x-hidden bg-bgPrimary`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <HeaderComponent />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

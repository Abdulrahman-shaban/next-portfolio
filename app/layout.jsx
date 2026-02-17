import { Josefin_Sans } from 'next/font/google';
import React from 'react'
const TypographyFont = Josefin_Sans({
    subsets: ["latin"],
    weight: "400",
  });
export default function Layout({
    children,
    params: {locale}
  
  })  {

  return (
    <html >
      <body
        className={`text-txtPrimary ${TypographyFont.className} overflow-x-hidden bg-bgPrimary`}
      >

        {children}
      </body>
    </html>
  )
}

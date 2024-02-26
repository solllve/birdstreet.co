import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Birdstreet.co LLC, A premier web design company in Orange County",
  description:
    "A premier web design company based in Orange County. Birdstreet.co specializes in frontend development, ux design and web hosting. Email us at hi@birdstreet.co",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/iqa0jhk.css" />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dbrkk86kt/image/upload/v1708626316/birdstreet-logo_wto8qg.svg"
        />
        <meta name="title" content="Premier web design in Orange County" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dbrkk86kt/image/upload/v1708971115/birdstreet-og_sqh2fd.png"
        />
        <meta
          name="description"
          content="A premier web design company based in Orange County. Birdstreet.co specializes in frontend development, ux design and web hosting. Email us at hi@birdstreet.co"
        />
        <meta
          name="keywords"
          content="web design in orange county, web design, website design in orange county, web design in mission viejo ca, web design in mission viejo, web design in costa mesa, web design in san clemente, web design in irvine, web design in irvine ca, website design, ux design in orange county, ux design in mission viejo, ux design in costa mesa, ux design in san clemente, ux design in irvine, ux design in irvine ca, ux design, web hosting, web hosting in orange county, web hosting in mission viejo, web hosting in costa mesa, web hosting in san clemente, web hosting in irvine, web hosting in irvine ca, web hosting, web development, web developer, web development in orange county, web development in mission viejo, web development in costa mesa, web development in san clemente, web development in irvine, web development in irvine ca"
        />
        <link rel="author" href="https://plus.google.com/{{googlePlusId}}" />
      </head>
      <body>{children}</body>
    </html>
  );
}

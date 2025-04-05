import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const urban = Urbanist({
  weight: ['200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
})

export const metadata = {
  title: {
    default: "Arun zeds: Bikes, cars, EV's All About Automobiles -arun zeds",
    // template: "%s - Mother Motors"
  },
  // other: {
  //   "google-adsense-account": "ca-pub-8984092184352457",
  // },
  description: "Arun zeds - Bikes, cars, and upcoming automobiles - Specification, pricing, mileage, topspeed, modifications, features  and maintainence cost - arun zeds",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: [
    "AZ SPECS","az specs","Latest car models","Best motorcycles 2025","Upcoming bikes 2025","New car releases","Motorcycle reviews 2025",
    "Automobile news","Bike modifications","Electric cars 2025","Best motorcycles for beginners","Top cars for families",
    "Best car accessories","Luxury car models","Car maintenance tips","Motorcycle news","Motorcycle upgrades","Car customization ideas",
    "Best electric motorcycles","Vehicle performance upgrades","Future car technology","Car buying guide","Best bikes for commuting","New bike launches"
  ],
  authors: [{ name: "Arun Zed", url: "https://www.arunzeds.com/" }],
  creator: "Arun Zed",
  publisher: "Arun Zed",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "/",
    publisherTime: "",
    authors: 'arun zed',
    title: `Arun zeds - Bikes, cars, EV's and All About Automobiles`,
    description: "Arun zeds - Bikes, cars, and upcoming automobiles - Specification, pricing, mileage, topspeed, modifications, features  and maintainence cost",
    siteName: "azspecs.com",
    images: [{
      url: "/icon.png",
      width: 1200,
      height: 720,
      alt: "Arun zeds - Bikes, cars, EV's and All About Automobiles",
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Arun_zed_',
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "https://www.arunzeds.com/site.webmanifest",
  alternates: {
    canonical: `/`,
    languages: { "en-US": "/en-US", },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urban.className} antialiased`} cz-shortcut-listen="false"
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

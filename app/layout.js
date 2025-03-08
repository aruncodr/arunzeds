import localFont from "next/font/local";
import "./globals.css";
import { Poppins,Raleway } from 'next/font/google'
const inter = Raleway({ subsets: ['latin']})

export const metadata = {
  title: {
    default: "Arun Zeds | AZ Portfolio",
    template: "%s - Arunzed"
  },
  description: "Hi, I'm Arun Zeds - Full Stack Web Developer, specialized in Next js, Tailwind, Appwrite focused on creating efficient and user friendly web solution. Arun zeds - AZ : I'm involved in every step of the process: from discovery and design to development, testing, and deployment. AZ - Arun zeds : Let's connect ! AZ Portfolio | AZ Resume |",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: [
    "Arun zeds","Arun zed","ARUN ZEDS","ARUN ZED","arunzeds","arunzed","aruncodr","arun codr","arunkumar","Arun kumar"
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
    title: `Arun Zeds | AZ Portfolio`,
    description: "Hi, I'm Arun Zeds - Full Stack Web Developer, specialized in Next js, Tailwind, Appwrite focused on creating efficient and user friendly web solution. Arun zeds - AZ : I'm involved in every step of the process: from discovery and design to development, testing, and deployment. AZ - Arun zeds : Let's connect ! AZ Portfolio | AZ Resume |",
    siteName: "arunzeds.com",
    images: [{
      url: "/icon.png",
      width: 1200,
      height: 720,
      alt: "Arun Zeds | AZ Portfolio",
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

      <body className={inter.className}>
       {children}
      </body>
    </html>
  )
}

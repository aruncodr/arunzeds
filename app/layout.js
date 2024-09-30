import localFont from "next/font/local";
import "./globals.css";
import { Poppins,Raleway } from 'next/font/google'
import './globals.css'

const inter = Raleway({ subsets: ['latin']})

export const metadata = {
  title: 'Portfolio | arun zeds ',
  description: "Hi,I'm Arun Zeds I'm a 25 year-old passionate fullstack web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences. I'm involved in every step of the process: from discovery and design to development, testing, and deployment. I focus on delivering high-quality, scalable results that drive positive user experiences. Let’s connect!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>

       {children}
      </body>
    </html>
  )
}

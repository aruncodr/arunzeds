import localFont from "next/font/local";
import "./globals.css";
import { Poppins,Raleway } from 'next/font/google'
import './globals.css'

const inter = Raleway({ subsets: ['latin']})

export const metadata = {
  title: 'Portfolio | arun zeds ',
  description: "Hi, I’m Arun Zeds  a web developer with a passion for crafting innovative website with great create user experience. Outside of coding, I love photography and exploring men's lifestyles. Let’s connect!",
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

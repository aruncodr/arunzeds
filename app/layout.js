import localFont from "next/font/local";
import "./globals.css";
import { Poppins,Raleway } from 'next/font/google'
import './globals.css'

const inter = Raleway({ subsets: ['latin']})

export const metadata = {
  title: 'Arun Zeds',
  description: 'Arun Zeds',
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

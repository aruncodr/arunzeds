import localFont from "next/font/local";
import "@/app/globals.css";
import { Poppins,Raleway } from 'next/font/google'
const inter = Raleway({ subsets: ['latin']})

export const metadata = {
  title: "Arun's Resume - CV",
  description: "Hi,I'm Arun Zeds - Full Stack Web Developer, specialized in Next js, Tailwind, Appwrite focused on creating efficient and user friendly web solution. Arun zeds - AZ : I'm involved in every step of the process: from discovery and design to development, testing, and deployment. AZ - Arun zeds : Let's connect ! AZ Portfolio | AZ Resume |",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className} cz-shortcut-listen="false">
       {children}
      </body>
    </html>
  )
}

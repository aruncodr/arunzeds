import localFont from "next/font/local";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Poppins,Raleway } from 'next/font/google'
import { Suspense } from "react";
const inter = Raleway({ subsets: ['latin']})

export const metadata = {
  title: 'Arun Zeds | AZ Portfolio',
  description: "Hi, I'm Arun Zeds - Full Stack Web Developer, specialized in Next js, Tailwind, Appwrite focused on creating efficient and user friendly web solution. Arun zeds - AZ : I'm involved in every step of the process: from discovery and design to development, testing, and deployment. AZ - Arun zeds : Let's connect ! AZ Portfolio | AZ Resume |",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Suspense>

      <NuqsAdapter>
       {children}
       </NuqsAdapter>
        </Suspense>
      </body>
    </html>
  )
}

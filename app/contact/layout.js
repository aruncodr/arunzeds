import { Urbanist } from "next/font/google";

const urban = Urbanist({
  weight: ['200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
})
export async function generateMetadata() {
  return {
    title: "Contact Us | ArunZeds",
    description: "Contact Us | ArunZeds by Arun zed, Stay updated with the latest bikes, cars, upcoming vehicles, new models, modifications, and everything about automobiles!",
  }
}


export default function RootLayout({ children }) {
  return (
      <div
        className={`${urban.variable} antialiased`}
      >        
        {children} 
      </div>
  );
}

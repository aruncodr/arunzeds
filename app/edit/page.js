import Form from 'next/form'
import Link from 'next/link'
 
export default async function Search({ searchParams }) {
    const { a, b,
        id, route, name, name2, ads, type, ev, metatitle, metadesc, keywords, publishedAt, modifiedAt, h1, img, subh1, desc, 
        headingone
    } = await searchParams
return (
<div>
        <div className='flex justify-between px-28'>
           <div className="mt-12 w-fit bg-teal-700 text-white px-24 py-4 rounded-lg"><Link  href="/edit" >Refresh</Link></div>
           <div className="mt-12 w-fit bg-teal-700 text-white px-24 py-4 rounded-lg"><Link  href="/edit" >Refresh</Link></div>
        </div>
    <Form className='px-16 mx-auto w-fit mt-12 space-y-6 text-xl' action="/edit">
      <div className='flex gap-4 justify-between'><div className='text-center'>id</div>         <textarea className="border rounded py-2 px-2 w-[600px] h-[50px] outline-none mx-1" name="a" defaultValue={a} /></div>
      <div className='flex gap-4 justify-between'><div className='text-center'>kedssdfs</div>   <textarea className="border rounded py-2 px-2 w-[600px] h-[140px] outline-none mx-1" name="b" defaultValue={b}/></div>
      <button className="bg-teal-700 text-white px-4 py-2 rounded-lg" type="submit">Create code</button>
    </Form>

      <div className='flex px-40 mt-20 gap-4 justify-between'><div className='text-center'>kedssdfs</div>   <textarea className="border rounded py-2 px-2 w-[600px] h-[140px] outline-none mx-1" name="b" defaultValue={b}/></div>

    <div className='m-8 bg-gray-100 p-4'>

<pre>&#123;</pre>
<pre>id: {a},</pre>
<pre>route: "{b}",</pre>
<pre>name: "{name}",</pre>
<pre>name2: "{name2}",</pre>
<pre>ads: "{ads}",</pre>
<pre>type: "{type}",</pre>
<pre>ev: "{ev}",</pre>
<pre>metatitle: "{metatitle}", </pre>
<pre>metadesc: "{metadesc}", </pre>
<pre>keywords: [{keywords}],</pre>
<pre>publishedAt: "{publishedAt}",</pre>
<pre>modifiedAt: "{modifiedAt}",</pre>
<pre>h1 : "{h1}",</pre>
<pre>img: "{img}",</pre>
<pre>subh1 : "{subh1}",</pre>
<pre>desc: "{desc}",</pre>
<pre>headingone : "{headingone}",</pre>
<pre>tableonehead: ["Specification","Details"],</pre>
<pre>tableone : [</pre>
<pre>            &#123; id: 1,feature: "Range", col1: "102 km/charge"&#125;,</pre>
<pre>            &#123; id: 2,feature: "Motor Power", col1: "6 kW"&#125;,</pre>
<pre>            &#123; id: 3,feature: "Top Speed", col1: "80 km/hr"&#125;,</pre>
<pre>            &#123; id: 4,feature: "Front Brake", col1: "Disc"&#125;,</pre>
<pre>            &#123; id: 5,feature: "Rear Brake", col1: "Drum"&#125;,</pre>
<pre>            &#123; id: 5,feature: "Water Proof", col1: "IP65"&#125;,</pre>
<pre>          ],</pre>
<pre>headingtwo : "Why Choose Honda Activa Electric 2025 Scooter ?",</pre>
<pre>paratwo1: "Brand Lagacy and Reliable, With the launch of the Honda Activa E, the brand that brought us ",</pre>
<pre>paratwo2: "the legendary Activa series",</pre>
<pre>paratwo3: "is stepping into the future of electric vehicle EV market. As cities worldwide move toward cleaner transportation solutions, electric scooters have become a option go-to.",</pre>
<pre>headingthree : "Battery: Power, Efficiency, and Sustainability",</pre>
<pre>tablethreehead: ["Specification","Details"],</pre>
<pre>tablethree : [</pre>
<pre>              &#123; id: 1, feature: "Battery Capacity", col1: "3 kWh"&#125;,</pre>
<pre>              &#123; id: 2, feature: "Claimed Range", col1: "102 km/charge"&#125;,</pre>
<pre>              &#123; id: 3, feature: "No of Battery", col1: "2"&#125;,</pre>
<pre>              &#123; id: 4, feature: "Swappable Battery", col1: "yes"&#125;,</pre>
<pre>              &#123; id: 5, feature: "Battery Weight", col1: "10.2 kg"&#125;,</pre>
<pre>              &#123; id: 6, feature: "Battery Warranty", col1: "3 Years or 50,000 Km"&#125;,</pre>
<pre>              &#123; id: 7, feature: "Low battery alert", col1: "Yes"&#125;,</pre>
<pre>            ],</pre>
<pre>parathree1: "The Honda Activa Electric Scooter is equipped with an",</pre>
<pre>parathree2: "advanced lithium-ion battery,",</pre>
<pre>parathree3: "which is known for its high efficiency, longer lifespan, and faster charging capabilities compared to traditional lead-acid batteries",</pre>
<pre>headingfour : "Honda Activa E for Everyday Riders & Long trip riders",</pre>
<pre>parafour1: "The Honda Activa has long been a trusted companion for daily commuters across India. Known for its reliable performance and smooth ride, it offers an exceptional of comfort, convenience, and durability. With an ergonomic design and easy handling, the Activa is perfect for navigating both busy city streets and more open roads. The scooter's efficient fuel economy, low maintenance costs, and versatile features make it an ideal choice for a wide range of",</pre>
<pre>parafour2: "riders, from students to working professionals.",</pre>
<pre>headingfive : "Top Features of Honda Activa Electric Scooter 2025",</pre>
<pre>listfivetype : "list-disc",</pre>
<pre>nolistheadfive: "hidden",</pre>
<pre>listfive: [</pre>
<pre>  &#123; id: 1, head: "", para: "Advanced lithium-ion battery"&#125;,</pre>
<pre>  &#123; id: 2, head: "", para: "Zero-emission, eco-friendly ride"&#125;,</pre>
<pre>  &#123; id: 3, head: "", para: "Spacious storage compartment"&#125;,</pre>
<pre>  &#123; id: 4, head: "", para: "Smart digital display for real-time monitoring"&#125;,</pre>
<pre>  &#123; id: 5, head: "", para: "Fast charging capabilities"&#125;,</pre>
<pre>],</pre>
<pre>headingsix : "Top Reasons Why Honda Activa Remains the Most Popular Scooter in India",</pre>
<pre>parasix1: "Honda Activa's E unmatched popularity in India can be attributed to several key factors. First, its consistent performance over the years has",</pre>
<pre>parasix2: "built a loyal customer base. The scooter's powerful engine delivers a smooth and efficient ride,",</pre>
<pre>parasix3: "ensuring both ease of use and reliability. Additionally, its affordability in terms of both purchase price and maintenance makes it accessible to a wide audience. The Activa also stands out for its versatility—whether it’s a daily work commute or weekend outings, it offers both comfort and practicality. With its sleek design, strong after-sales service, and a vast network of dealerships, the Honda Activa continues to be a top choice for scooter enthusiasts in India.",</pre>
<pre>headingseven : "Why the Honda Activa E Is Perfect for Urban Riders",</pre>
<pre>listseventype : "list-disc",</pre>
<pre>listseven: [</pre>
<pre>  &#123; id: 1, head: "Compact Design", para: "Maneuver through traffic effortlessly."&#125;,</pre>
<pre>  &#123; id: 2, head: "Low Running Costs", para: "Save on fuel and maintenance."&#125;,</pre>
<pre>  &#123; id: 3, head: "Smart Features", para: "Stay connected on the go."&#125;,</pre>
<pre>],</pre>
<pre>headingeight : "Honda Activa Electric (Activa e): The Future of Eco-Friendly Scooters",</pre>
<pre>listeighttype : "list-no",</pre>
<pre>listeight: [</pre>
<pre>  &#123; id: 1, head: "How Honda Activa Electric impact", para: "Honda has long been known for its reliable scooters, and now, with the Honda Activa Electric (also called the Activa e), they're stepping into the world of electric vehicles to offer an eco-friendly solution for urban commuters. The Activa e blends the trusted performance of the iconic Activa with the future of clean, green transportation, offering a smart choice for those looking to reduce their carbon footprint."&#125;,</pre>
<pre>  &#123; id: 2, head: "What Makes the Honda Activa Electric Special", para: "Honda Activa e retains the same familiar design and feel as its petrol-powered counterpart. It's sleek, modern, and easy to handle, perfect for city commutes. The scooter features a digital instrument cluster, LED lighting, and even smart connectivity for tracking battery status and other useful information, making it a great mix of style and tech."&#125;,</pre>
<pre>  &#123; id: 3, head: "Affordable and Efficient: A Smart Choice", para: "One of the most appealing aspects of the Honda Activa Electric is that it's expected to be both affordable and practical. While the final price has yet to be confirmed, it's likely to be priced competitively, making it a great option for people looking for an economical electric vehicle. You'll save on fuel costs, and with fewer moving parts, maintenance is minimal, making it both a budget-friendly and hassle-free option for daily use."&#125;,</pre>
<pre>  &#123; id: 4, head: "Why Choose the Honda Activa e", para: "Choosing an electric scooter like the Activa e means you're investing in more than just a mode of transportation—it's about making a positive impact on the planet. With the rising demand for sustainable transport solutions, the Activa Electric plays a crucial role in offering a cleaner alternative to petrol vehicles. It's ideal for those who want to contribute to a greener future while enjoying the reliability and comfort Honda is known for."&#125;,</pre>
<pre>],</pre>
<pre>headingnine : "Why the Honda Activa Electric is Perfect for Indian Consumers?",</pre>
<pre>paranine1: "The Honda Activa Electric is a cost-effective electric scooter offering zero-emission commuting for Indian consumers. With low maintenance and eco-friendly features, it's perfect for daily urban commutes. Save on fuel costs while contributing to a cleaner environment. The Activa Electric combines reliability, affordability, and sustainability in one powerful ride.",</pre>
<pre>headingten : "About Honda Service Quality",</pre>
<pre>nolistheadten : "hidden",</pre>
<pre>listtentype : "list-disc",</pre>
<pre>listten: [</pre>
<pre>  &#123; id: 1, head: "", para: "Honda is committed to providing excellent service for its electric vehicles (EVs), including the upcoming Honda Activa Electric. With a vast network of authorized service centers across India, Honda ensures easy access to maintenance and repair services for all its EV customers."&#125;,</pre>
<pre>  &#123; id: 2, head: "", para: "The service includes routine checkups, battery health checks, software updates, and efficient troubleshooting for electrical components."&#125;,</pre>
<pre>  &#123; id: 3, head: "", para: "Honda's experienced technicians are trained to handle the specific needs of electric vehicles, ensuring quality care and longevity for your Honda EV. Additionally, Honda offers warranty support on the battery and other key parts, making it a reliable choice for EV owners."&#125;,</pre>
<pre>],</pre>
<pre>headingtwelve : "Conclusion",</pre>
<pre>paratwelve1: "Honda Activa Electric is a forward-thinking solution for Indian consumers, combining affordability, eco-friendliness, and reliable performance.",</pre>
<pre>paratwelve2: "With Honda's trusted service network and commitment to sustainability,",</pre>
<pre>paratwelve3: "the Activa Electric offers a seamless and low-maintenance alternative to traditional petrol scooters. As India embraces the future of electric mobility, the Honda Activa Electric stands as a smart choice for daily commutes, providing both cost savings and a cleaner environment.",</pre>
<pre>keysearch : ["Honda Activa e, Honda Activa Electric, Honda Activa e India, Honda Activa e price, Honda Activa e features, Electric Activa scooter, Honda Activa e review, Honda Activa e mileage, Honda Activa e specifications, Buy Honda Activa e, Honda Activa e battery, Honda Activa e launch, Affordable electric scooter, Zero-emission Honda Activa, Best electric scooter India."],</pre>
<pre>full: "",</pre>
<pre>&#125;,</pre>












    {/* <pre>
    <pre>&#123;</pre> 
        id: 3,
        route: "honda-activa-e-2025-2101",
        name: "Honda Acitva E",
        name2: "",
        ads: "naked",
        type: "scooters",
        ev: "yes",
        metatitle: "Honda Activa E: Honda's First Electric Scooter in India 2025", 
        metadesc: "Honda Activa E 2025, Honda's first electric scooter in India. Learn about its features, performance, prices, specification best electric scooter option for your need", 
        keywords: [
          "Honda Activa Electric Scooter",
          "Honda Activa e-scooter",
          "eco-friendly electric scooter",
          "best electric scooter in India",
          "affordable electric scooter",
          "Honda Activa e-scooter review",
          "electric scooter for daily commute",
          "Honda Activa electric scooter range",
          "zero-emission scooter",
          "Honda Activa e-scooter price"
        ],
        publishedAt: "2025-01-22T01:20:00+05:30",
        modifiedAt: "2025-01-22T01:20:00+05:30",

        h1 : "Honda Activa E: Honda's First Electric Scooter in India 2025",
        img: "/scooters/honda-activa-e.jpg",
        subh1 : "Honda Activa Electric Scooter: The Future of Eco-Friendly Commuting",
        desc: "The Honda Activa Electric Scooter is realiable, style and innovation, designed to redefine electric scooter segment. Its sleek design, impressive range, and affordable pricing make it an ideal choice for daily commutes. If you're looking for a sustain-able, cost-effective, and reliable ride, Buy Honda Activa Electric Scooter - Stylish, eco-friendly, and affordable",
        
        
        headingone : "Honda Activa E Specifications",
        tableonehead: &#91;Specification","Details&#93;,
        tableone : [
                    &#123; id: 1,feature: "Range", col1: "102 km/charge",  &#125;,
                    &#123; id: 2,feature: "Motor Power", col1: "6 kW", &#125;,
                    &#123; id: 3,feature: "Top Speed", col1: "80 km/hr", &#125;,
                    &#123; id: 4,feature: "Front Brake", col1: "Disc", &#125;,
                    &#123; id: 5,feature: "Rear Brake", col1: "Drum", &#125;,
                    &#123; id: 5,feature: "Water Proof", col1: "IP65", &#125;,
                  ],
        headingtwo : "Why Choose Honda Activa Electric 2025 Scooter ?",
        paratwo1: "Brand Lagacy and Reliable, With the launch of the Honda Activa E, the brand that brought us ",
        paratwo2: "the legendary Activa series",
        paratwo3: "is stepping into the future of electric vehicle EV market. As cities worldwide move toward cleaner transportation solutions, electric scooters have become a option go-to.",
        headingthree : "Battery: Power, Efficiency, and Sustainability",
        tablethreehead: &#91;Specification","Details&#93;,
        tablethree : [
                      &#123; id: 1, feature: "Battery Capacity", col1: "3 kWh" &#125;,
                      &#123; id: 2, feature: "Claimed Range", col1: "102 km/charge" &#125;,
                      &#123; id: 3, feature: "No of Battery", col1: "2" &#125;,
                      &#123; id: 4, feature: "Swappable Battery", col1: "yes" &#125;,
                      &#123; id: 5, feature: "Battery Weight", col1: "10.2 kg" &#125;,
                      &#123; id: 6, feature: "Battery Warranty", col1: "3 Years or 50,000 Km" &#125;,
                      &#123; id: 7, feature: "Low battery alert", col1: "Yes" &#125;,
                    ],
        parathree1: "The Honda Activa Electric Scooter is equipped with an",
        parathree2: "advanced lithium-ion battery,",
        parathree3: "which is known for its high efficiency, longer lifespan, and faster charging capabilities compared to traditional lead-acid batteries",
        headingfour : "Honda Activa E for Everyday Riders & Long trip riders",
        parafour1: "The Honda Activa has long been a trusted companion for daily commuters across India. Known for its reliable performance and smooth ride, it offers an exceptional of comfort, convenience, and durability. With an ergonomic design and easy handling, the Activa is perfect for navigating both busy city streets and more open roads. The scooter's efficient fuel economy, low maintenance costs, and versatile features make it an ideal choice for a wide range of",
        parafour2: "riders, from students to working professionals.",
        headingfive : "Top Features of Honda Activa Electric Scooter 2025",
        listfivetype : "list-disc",
        nolistheadfive: "hidden",
        listfive: [
          &#123;id: 1, head: "", para: "Advanced lithium-ion battery"&#125;,
          &#123;id: 2, head: "", para: "Zero-emission, eco-friendly ride"&#125;,
          &#123;id: 3, head: "", para: "Spacious storage compartment"&#125;,
          &#123;id: 4, head: "", para: "Smart digital display for real-time monitoring"&#125;,
          &#123;id: 5, head: "", para: "Fast charging capabilities"&#125;,
        ],
        headingsix : "Top Reasons Why Honda Activa Remains the Most Popular Scooter in India",
        parasix1: "Honda Activa's E unmatched popularity in India can be attributed to several key factors. First, its consistent performance over the years has",
        parasix2: "built a loyal customer base. The scooter's powerful engine delivers a smooth and efficient ride,",
        parasix3: "ensuring both ease of use and reliability. Additionally, its affordability in terms of both purchase price and maintenance makes it accessible to a wide audience. The Activa also stands out for its versatility—whether it’s a daily work commute or weekend outings, it offers both comfort and practicality. With its sleek design, strong after-sales service, and a vast network of dealerships, the Honda Activa continues to be a top choice for scooter enthusiasts in India.",
        headingseven : "Why the Honda Activa E Is Perfect for Urban Riders",
        listseventype : "list-disc",
        listseven: [
          &#123;id 1, head: "Compact Design", para: "Maneuver through traffic effortlessly."&#125;,
          &#123;id: 2, head: "Low Running Costs", para: "Save on fuel and maintenance."&#125;,
          &#123;id: 3, head: "Smart Features", para: "Stay connected on the go."&#125;,
        ],
        headingeight : "Honda Activa Electric (Activa e): The Future of Eco-Friendly Scooters",
        listeighttype : "list-no",
        listeight: [
          &#123;id: 1, head: "How Honda Activa Electric impact", para: "Honda has long been known for its reliable scooters, and now, with the Honda Activa Electric (also called the Activa e), they're stepping into the world of electric vehicles to offer an eco-friendly solution for urban commuters. The Activa e blends the trusted performance of the iconic Activa with the future of clean, green transportation, offering a smart choice for those looking to reduce their carbon footprint."&#125;,
          &#123;id: 2, head: "What Makes the Honda Activa Electric Special", para: "Honda Activa e retains the same familiar design and feel as its petrol-powered counterpart. It's sleek, modern, and easy to handle, perfect for city commutes. The scooter features a digital instrument cluster, LED lighting, and even smart connectivity for tracking battery status and other useful information, making it a great mix of style and tech."&#125;,
          &#123;id: 3, head: "Affordable and Efficient: A Smart Choice", para: "One of the most appealing aspects of the Honda Activa Electric is that it's expected to be both affordable and practical. While the final price has yet to be confirmed, it's likely to be priced competitively, making it a great option for people looking for an economical electric vehicle. You'll save on fuel costs, and with fewer moving parts, maintenance is minimal, making it both a budget-friendly and hassle-free option for daily use."&#125;,
          &#123;id: 4, head: "Why Choose the Honda Activa e", para: "Choosing an electric scooter like the Activa e means you're investing in more than just a mode of transportation—it's about making a positive impact on the planet. With the rising demand for sustainable transport solutions, the Activa Electric plays a crucial role in offering a cleaner alternative to petrol vehicles. It's ideal for those who want to contribute to a greener future while enjoying the reliability and comfort Honda is known for."&#125;,
        ],
        headingnine : "Why the Honda Activa Electric is Perfect for Indian Consumers?",
        paranine1: "The Honda Activa Electric is a cost-effective electric scooter offering zero-emission commuting for Indian consumers. With low maintenance and eco-friendly features, it's perfect for daily urban commutes. Save on fuel costs while contributing to a cleaner environment. The Activa Electric combines reliability, affordability, and sustainability in one powerful ride.",
        headingten : "About Honda Service Quality",
        nolistheadten : "hidden",
        listtentype : "list-disc",
        listten: [
          &#123;id: 1, head: "", para: "Honda is committed to providing excellent service for its electric vehicles (EVs), including the upcoming Honda Activa Electric. With a vast network of authorized service centers across India, Honda ensures easy access to maintenance and repair services for all its EV customers."&#125;,
          &#123;id: 2, head: "", para: "The service includes routine checkups, battery health checks, software updates, and efficient troubleshooting for electrical components."&#125;,
          &#123;id: 3, head: "", para: "Honda's experienced technicians are trained to handle the specific needs of electric vehicles, ensuring quality care and longevity for your Honda EV. Additionally, Honda offers warranty support on the battery and other key parts, making it a reliable choice for EV owners."&#125;,
        ],
        headingtwelve : "Conclusion",
        paratwelve1: "Honda Activa Electric is a forward-thinking solution for Indian consumers, combining affordability, eco-friendliness, and reliable performance.",
        paratwelve2: "With Honda's trusted service network and commitment to sustainability,",
        paratwelve3: "the Activa Electric offers a seamless and low-maintenance alternative to traditional petrol scooters. As India embraces the future of electric mobility, the Honda Activa Electric stands as a smart choice for daily commutes, providing both cost savings and a cleaner environment.",
        keysearch : &#91;Honda Activa e, Honda Activa Electric, Honda Activa e India, Honda Activa e price, Honda Activa e features, Electric Activa scooter, Honda Activa e review, Honda Activa e mileage, Honda Activa e specifications, Buy Honda Activa e, Honda Activa e battery, Honda Activa e launch, Affordable electric scooter, Zero-emission Honda Activa, Best electric scooter India.&#93;,
        full: ""
        &#125;,
    </pre> */}
    </div>
</div>
  )
}

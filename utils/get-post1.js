export async function getPost1() {
  await new Promise((resolve) => setTimeout(resolve, 0));
  return {
  allpost : [
    { 
      id: 1,
      route: "yamaha-r6-2025-1303",
      name: "Yamaha R6",
      ads: "sports",
      type: "bikes",
      ev: "no",
      price: "₹14 lakh",
      topspeed: "260",
      mileage: "15-18",
      permileage: "km/l",
      servicecost: "₹10,000 - ₹15,000",
      specs: "Full Specification of Yamaha R6",
      metatitle: "Yamaha R6: A High-Performance Sportbike You Can't Miss", 
      metadesc: "Yamaha R6, featuring its amazing features, top speed, mileage, pricing, maintainence cost, and reviews", 
      keywords: ["Yamaha R6", "Yamaha R6 review", "Yamaha R6 features", "Yamaha R6 performance", "Yamaha R6 price", "Yamaha R6 top speed", "Yamaha R6 mileage", "Yamaha R6 fuel efficiency", "Yamaha R6 pros and cons", "Yamaha R6 maintenance", "Yamaha R6 technology", "Yamaha R6 user review"],
      publishedAt: "2025-03-14T12:00:00+05:30",
      modifiedAt:  "2025-03-14T12:00:00+05:30",
      h1: "Yamaha R6: A High-Performance Sportbike You Can't Miss",
      img: "/bikes/yamaha-r6-2025-1303.webp",
      subh1: "Yamaha R6: specs, topspeed, mileage",
      desc: "Yamaha R6, a true legend in the sportbike world, known for its remarkable performance and precision handling. Whether you're a beginner or a seasoned professional, the Yamaha R6 provides the power and agility needed to conquer any road.",
      headingone: "Engine & Performance",
      tableonehead: ["Feature","Specification"],
      tableone: [
          { id: 1,feature: "Engine Type", col1: "Liquid-cooled DOHC inline 4-cylinder; 16 titanium valves"},
          { id: 2,feature: "Displacement", col1: "599cc "},
          { id: 3,feature: "Max Power", col1: "123.50 HP (90.1 kW)) @ 14500 RPM "},
          { id: 4,feature: "Max Toque", col1: "67.50 Nm (6.9 kgf-m or 49.8 ft.lbs) @ 10500 RPM"},
          { id: 5,feature: "Bore & Stroke", col1: "67.0 x 42.5 mm, 13.1:1 ratio"},
          { id: 6,feature: "Transmission", col1: "6 Speed"},
        ],
      headingtwo: "Braking & Suspension",
      tabletwohead: ["Feature","Specification"],
      tabletwo: [
          { id: 1,feature: "Front Brake", col1: "320 mm, Double disc. ABS. Floating discs. Four-piston calipers. Radially mounted. "},
          { id: 2,feature: "Rear Brake", col1: "220 mm, Single disc. 220mm hydraulic disc; ABS "},
          { id: 3,feature: "Front Suspension", col1: "119 mm (4.7 inches), Fully adjustable 43mm inverted fork "},
          { id: 4,feature: "Rear Suspension", col1: "119 mm (4.7 inches), Fully adjustable link Monocross "},
          { id: 5,feature: "Tyre Size", col1: "120/70-ZR17 Front, 180/55-ZR17 Rear"},
        ],
      headingthree: "Dimensions & Chassis",
      tablethreehead: ["Feature","Specification"],
      tablethree: [
          { id: 1,feature: "Frame", col1: "Deltabox aluminum frame. Magnesium subframe. "},
          { id: 2,feature: "Ground clearance", col1: "130 mm (5.1 inches) "},
          { id: 3,feature: "Seat Height", col1: "850 mm (33.5 inches) If adjustable, lowest setting. "},
          { id: 4,feature: "Kerb Weight", col1: "190 kg / 419 lbs"},
          { id: 5,feature: "Fuel Tank", col1: "17.00 litres (4.49 gallons)"},
        ],
        headingfour: "Top Speed & Acceleration of Yamaha R6",
        listfourtype : "list-disc",
        listfour: [
          {id: 1, head: "", para: "Top speed: 260 km/h (approx.)"}, 
          {id: 2, head: "", para: "0-100 km/h in just 3.4 seconds"}, 
          {id: 3, head: "", para: "Acceleration is smooth and linear, making it easy to handle at high speeds."}
        ],
          
        headingfive: "Mileage & Fuel Efficiency of Yamaha R6",
        listfivetype : "list-disc",
        listfive: [
          {id: 1, head: "", para: "Fuel efficiency: 15-18 km/l based on riding conditions."}, 
          {id: 2, head: "", para: "The Yamaha R6 provides decent fuel economy despite its high-performance engine."}, 
          {id: 3, head: "", para: "Better mileage can be achieved with a balanced riding style."}
        ],
          
      headingsix: " Pricing & all Variants",
      tablesixhead: ["Variants Name","Expected Price (Ex-Showroom)"],
      tablesix: [
          { id: 1,feature: "Yamaha R6", col1: "₹14 lakh"},
                ],
      listsixtype: "list-disc",
      listsix: [
        {id: 1, head: "", para: "On-Road Price around 16 lakhs"},
      ],
      parasix2: "Note: ",
      parasix3: "Prices may vary based on location and dealer",
  
      headingseven: "Maintenance & Service Cost of Yamaha R6",
      listseventype : "list-disc",
      listseven: [
        {id: 1, head: "First Service", para: "₹6,000 - ₹8,000 (after 1,000 km)"},
        {id: 2, head: "Second Service", para: "₹5,000 - ₹9,000 (after 5,000 km)"},
        {id: 3, head: "Annual Service", para: "₹8,000 - ₹12,000 (every year)"},
        {id: 4, head: "Tyre Change", para: "₹10,000 - ₹12,000 (depending on brand and type)"},
        {id: 5, head: "Brake Pads Replacement", para: "₹2,500 - ₹4,000 (per set)"}
      ],
        
      headingeight: "Pros and Cons of Yamaha R6",
      listeighttype : "",
      listeight: [
        {id: 1, head: "PROS", para: "1. Powerful and responsive engine performance."}, 
        {id: 2, head: "", para: "2. Sleek and stylish design."},
        {id: 3, head: "", para: "3. Excellent handling and stability at high speeds."},
        {id: 4, head: "", para: "4. Advanced technology with precise electronics."},
        {id: 5, head: "", para: "5. Great track performance with minimal compromises."},
        {id: 6, head: "", para: "6. Strong brand reputation for reliability."},
        {id: 7, head: "CONS", para: "1. Fuel efficiency can be lower in city traffic."}, 
        {id: 8, head: "", para: "2. Maintenance can be slightly expensive."},
        {id: 9, head: "", para: "3. Not ideal for casual commuters."},
      ],
        
      headingnine: "Yamaha R6 Features and Technology",
      listninetype : "list-disc",
      listnine: [
        {id: 1, head: "", para: "High-revving 600cc engine for superior performance."}, 
        {id: 2, head: "", para: "Advanced electronic control systems for optimal performance."},
        {id: 3, head: "", para: "Quick shifter for seamless shifting during high-speed runs."},
        {id: 4, head: "", para: "Yamaha's D-Mode for personalized riding settings."},
        {id: 5, head: "", para: "Dual front disc brakes for superior stopping power."},
        {id: 6, head: "", para: "Lightweight and aerodynamic design for enhanced handling."},
        {id: 7, head: "", para: "Highly responsive suspension system for smoother rides."},
        {id: 8, head: "", para: "All-digital instrument cluster with easy-to-read displays."},
        {id: 9, head: "", para: "Sporty exhaust for improved power delivery."},
        {id: 10, head: "", para: "State-of-the-art LED lighting for better visibility."},
      ],
        
      headingten: "Yamaha R6 User Experience & Review",
      listtentype : "list-disc",
      listten: [
        {id: 1, head: "", para: "The Yamaha R6 delivers exceptional track performance with unmatched precision."}, 
        {id: 2, head: "", para: "The power delivery is smooth, making it perfect for aggressive riding."},
        {id: 3, head: "", para: "The R6 provides great comfort for a sportbike, even during extended rides."},
        {id: 4, head: "", para: "Its advanced electronics improve the overall riding experience."},
        {id: 5, head: "", para: "Highly responsive handling makes cornering feel effortless."},
        {id: 6, head: "", para: "Overall, it's a bike that mixes thrill and precision like no other."},
      ],
        
      paraelten1: "The Yamaha R6 is widely praised for its",
      paraelten2: "sharp handling,",
      paraelten3: "making it one of the best sportbikes for those who love tight corners and high-speed tracks. Riders appreciate its light frame, aggressive styling, and advanced electronics, which give it an edge on both the track and open roads.",
      headingeleven: "Why You Should Choose Yamaha R6:",
      paraeleven1: "The Yamaha R6 offers a perfect combination of performance, technology, and handling. It’s an ideal choice for riders who want to take on both the streets and the racetrack with ease. With its",
      paraeleven2: " cutting-edge features, precision handling, and reputation for reliability, ",
      paraeleven3: "the Yamaha R6 is a machine designed for those who crave excitement.",
      paratwelve1: "Choosing the Yamaha R6 means investing in a sportbike that offers one of the best riding experiences in its class. Its advanced technology ensures you're always in control, ",
      paratwelve2: "while its engine and build quality guarantee longevity and performance.",
      paratwelve3: "the Yamaha R6 remains a standout option for those who demand the best in terms of speed, handling, and design. It’s a machine that inspires confidence and delivers power when you need it most.",
      headingthirteen: "Final Verdict on Yamaha R6:",
      parathirteen1: "The Yamaha R6 is a top contender in the sportbike category, offering impressive performance, cutting-edge technology, and a thrilling ride. With its",
      parathirteen2: "lightweight frame, responsive handling, and smooth acceleration, ",
      parathirteen3: "it's an ideal bike for both new riders and seasoned pros. Whether you're racing on the track or cruising on open roads, the Yamaha R6 is engineered to deliver a high-performance experience.",
  
      headingfourteen: "FAQ for Yamaha R6",
      listfourteentype : "list-no",
      listfourteen: [
        {id: 1, head: "What is the top speed of the Yamaha R6?", para: "The top speed of the Yamaha R6 is around 260 km/h."},
        {id: 2, head: "How fuel-efficient is the Yamaha R6?", para: "It offers a mileage of around 15-18 km/l, depending on the riding style."},
        {id: 3, head: "What is the price of the Yamaha R6?", para: "Prices vary between ₹1,50,000 to ₹2,00,000, depending on the variant."},
        {id: 4, head: "Is the Yamaha R6 suitable for beginners?", para: "The Yamaha R6 is better suited for intermediate and experienced riders due to its performance."},
        {id: 5, head: "What is the service cost of Yamaha R6?", para: "Annual service costs range from ₹10,000 to ₹12,000."},
        {id: 6, head: "Does the Yamaha R6 have advanced technology?", para: "Yes, the Yamaha R6 features advanced electronics and an adjustable suspension."},
        {id: 7, head: "How long does the Yamaha R6 last?", para: "With proper maintenance, the Yamaha R6 can last over 50,000 km."},
        {id: 8, head: "What are the pros of the Yamaha R6?", para: "Pros include excellent handling, powerful engine, and advanced features."},
      ],
        
      keysearch : ["Yamaha R6", "Yamaha R6 review", "Yamaha R6 features", "Yamaha R6 performance", "Yamaha R6 price", "Yamaha R6 top speed", "Yamaha R6 mileage", "Yamaha R6 fuel efficiency", "Yamaha R6 pros and cons", "Yamaha R6 maintenance", "Yamaha R6 technology", "Yamaha R6 user review"],
      full: "Yamaha R6: A High-Performance Sportbike You Can't Miss March 14, 2025 by Arunzed Yamaha R6 Yamaha R6, a true legend in the sportbike world, known for its remarkable performance and precision handling. Whether you're a beginner or a seasoned professional, the Yamaha R6 provides the power and agility needed to conquer any road. Yamaha R6 ₹14 lakh Ex-Showroom Price 260 kmph Top Speed 15-18 km/l Mileage ₹10,000 - ₹15,000 Serive cost Detail about Pricing, Top Speed, Mileage, service cost is below in this blog Engine & Performance Liquid-cooled DOHC inline 4-cylinder; 16 titanium valves Engine Type 599cc Displacement 123.50 HP (90.1 kW)) @ 14500 RPM Max Power 67.50 Nm (6.9 kgf-m or 49.8 ft.lbs) @ 10500 RPM Max Toque 67.0 x 42.5 mm, 13.1:1 ratio Bore & Stroke 6 Speed Transmission Braking & Suspension 320 mm, Double disc. ABS. Floating discs. Four-piston calipers. Radially mounted. Front Brake 220 mm, Single disc. 220mm hydraulic disc; ABS Rear Brake 119 mm (4.7 inches), Fully adjustable 43mm inverted fork Front Suspension 119 mm (4.7 inches), Fully adjustable link Monocross Rear Suspension 120/70-ZR17 Front, 180/55-ZR17 Rear Tyre Size Dimensions & Chassis Deltabox aluminum frame. Magnesium subframe. Frame 130 mm (5.1 inches) Ground clearance 850 mm (33.5 inches) If adjustable, lowest setting. Seat Height 190 kg / 419 lbs Kerb Weight 17.00 litres (4.49 gallons) Fuel Tank Top Speed & Acceleration of Yamaha R6 Top speed: 260 km/h (approx.) 0-100 km/h in just 3.4 seconds Acceleration is smooth and linear, making it easy to handle at high speeds. Mileage & Fuel Efficiency of Yamaha R6 Fuel efficiency: 15-18 km/l based on riding conditions. The Yamaha R6 provides decent fuel economy despite its high-performance engine. Better mileage can be achieved with a balanced riding style. Pricing & all Variants ₹14 lakh Yamaha R6 On-Road Price around 16 lakhs Note: Prices may vary based on location and dealer Maintenance & Service Cost of Yamaha R6 First Service ₹6,000 - ₹8,000 (after 1,000 km) Second Service ₹5,000 - ₹9,000 (after 5,000 km) Annual Service ₹8,000 - ₹12,000 (every year) Tyre Change ₹10,000 - ₹12,000 (depending on brand and type) Brake Pads Replacement ₹2,500 - ₹4,000 (per set) Pros and Cons of Yamaha R6 PROS 1. Powerful and responsive engine performance. 2. Sleek and stylish design. 3. Excellent handling and stability at high speeds. 4. Advanced technology with precise electronics. 5. Great track performance with minimal compromises. 6. Strong brand reputation for reliability. CONS 1. Fuel efficiency can be lower in city traffic. 2. Maintenance can be slightly expensive. 3. Not ideal for casual commuters. Yamaha R6 Features and Technology High-revving 600cc engine for superior performance. Advanced electronic control systems for optimal performance. Quick shifter for seamless shifting during high-speed runs. Yamaha's D-Mode for personalized riding settings. Dual front disc brakes for superior stopping power. Lightweight and aerodynamic design for enhanced handling. Highly responsive suspension system for smoother rides. All-digital instrument cluster with easy-to-read displays. Sporty exhaust for improved power delivery. State-of-the-art LED lighting for better visibility. Yamaha R6 User Experience & Review The Yamaha R6 delivers exceptional track performance with unmatched precision. The power delivery is smooth, making it perfect for aggressive riding. The R6 provides great comfort for a sportbike, even during extended rides. Its advanced electronics improve the overall riding experience. Highly responsive handling makes cornering feel effortless. Overall, it's a bike that mixes thrill and precision like no other. Why You Should Choose Yamaha R6: The Yamaha R6 offers a perfect combination of performance, technology, and handling. It’s an ideal choice for riders who want to take on both the streets and the racetrack with ease. With its cutting-edge features, precision handling, and reputation for reliability, the Yamaha R6 is a machine designed for those who crave excitement. Choosing the Yamaha R6 means investing in a sportbike that offers one of the best riding experiences in its class. Its advanced technology ensures you're always in control, while its engine and build quality guarantee longevity and performance. the Yamaha R6 remains a standout option for those who demand the best in terms of speed, handling, and design. It’s a machine that inspires confidence and delivers power when you need it most. Final Verdict on Yamaha R6: FAQ for Yamaha R6 The Yamaha R6 is a top contender in the sportbike category, offering impressive performance, cutting-edge technology, and a thrilling ride. With its lightweight frame, responsive handling, and smooth acceleration, it's an ideal bike for both new riders and seasoned pros. Whether you're racing on the track or cruising on open roads, the Yamaha R6 is engineered to deliver a high-performance experience. Recent Posts",
  },
  
  
  ],
};
}
import { Bolt, CarFront, CarTaxiFront, GitMerge, GitPullRequestCreateArrow, Headset } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { ShieldPlus } from "lucide-react";

export const Menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Bikes",
    subMenuHeading: [" ", " "],
    subMenu: [
      {
        name: "All Bikes",
        desc: "All Upcoming Bikes ..",
        icon: GitPullRequestCreateArrow,
        link: "/bikes",
      },
      {
        name: "Retro Bikes",
        desc: "Classic 350, Speed 400..",
        icon: GitMerge,
        link: "/bikes/retro",
      },
      {
        name: "Naked",
        desc: "Duke, MT, Z900 ..",
        icon: GitMerge,
        link: "/bikes/naked",
      },
      {
        name: "Adventures",
        desc: "Himaliyan, 390 ADV ..",
        icon: GitMerge,
        link: "/bikes/adventures",
      },
      {
        name: "Sport Racing",
        desc: "R1M, Ducati V4 ...",
        icon: GitMerge,
        link: "/bikes/sports",
      },
    ],
    gridCols: 2,
    link: "/bikes",
  },
  {
    name: "Scooters",
    subMenu: [
      {
        name: "All Scooter",
        desc: "List of All Scooty",
        icon: GitPullRequestCreateArrow,
        link: "/scooters",
      },
      {
        name: "EV Scooter",
        desc: "Ola, Ather, EV X ..",
        icon: GitMerge,
        link: "/scooters/evscooters",
      },
      {
        name: "Sports scooter",
        desc: "Ntorq, ZR ray, Burgman ..",
        icon: GitMerge,
        link: "/scooters/sportscooters",
      },
    ],
    gridCols: 1,
    link: "/scooters",
  },
  {
    name: "Cars",
    subMenuHeading: [" ", " "],
    subMenu: [
      {
        name: "All Cars",
        desc: "List of all Cars",
        icon: CarTaxiFront,
        link: "/cars",
      },
      {
        name: "EV Cars",
        desc: "EV & Hybird cars",
        icon: CarFront,
        link: "/cars/evcars",
      },
      {
        name: "Sedan Cars",
        desc: "Swift, virtus, city",
        icon: CarFront,
        link: "/cars/sedan",
      },
      {
        name: "Sports Cars",
        desc: "Ferrari, Porsche ..",
        icon: CarFront,
        link: "/cars/sportscars",
      },
      {
        name: "SUV Cars",
        desc: "Thar, Fotuner, XUV700 ..",
        icon: CarFront,
        link: "/cars/suv",
      },
    ],
    gridCols: 2,
    link: "/cars",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    subMenuHeading: [" ", " "],
    subMenu: [
      {
        name: "Contact us",
        desc: "Connect on social media",
        icon: Headset,
        link: "/contact",
      },
      {
        name: "About",
        desc: "Creator or admin",
        icon: Users,
        link: "/about",
      },
      {
        name: "Disclaimer",
        desc: "Rules",
        icon: ShieldPlus,
        link: "/disclaimer",
      },
      {
        name: "Privacy Policy",
        desc: "Rules",
        icon: ShieldPlus,
        link: "/privacy-policy",
      },
      {
        name: "Terms and Conditions",
        desc: "Rules",
        icon: ShieldPlus,
        link: "/terms-and-conditions",
      },
    ],
    gridCols: 2,
    link: "/contact",
  },
];

import Blogger from "../public/projects/Blogger.svg";
import Havo from "../public/projects/Havo.svg";
import Cynefin from "../public/projects/Cynefin.svg";
import Anzen from "../public/projects/Anzen.svg";

export const projectList = [
  {
    name: "Havo | Weather App",
    github: "https://github.com/kevkanae/havo-weather-app",
    link: "https://havo-weather-app.vercel.app/",
    src: Havo,
    tech: "React, Next.js, Typescript, SCSS",
    desc: "Sleek Weather Dashboard",
    svg: "/cards/A.svg",
  },
  {
    name: "Cynefin | Chat App",
    github: "https://github.com/kevkanae/Chat-App",
    link: "http://cynefin.vercel.app/",
    src: Cynefin,
    tech: "React, Next.js, Typescript, Firebase v8.10, SCSS",
    desc: "Safe & Fun Public Chat Room",
    svg: "/cards/B.svg",
  },
  {
    name: "Anzen Pay | Payment UI",
    github: "https://github.com/kevkanae/anzen-pay",
    link: "https://anzen-pay.vercel.app/",
    src: Anzen,
    tech: "React, Next.js, Typescript, SCSS",
    desc: "Aesthetic Payment UI",
    svg: "/cards/C.svg",
  },
  {
    name: "BloggerX",
    github: "https://github.com/kevkanae/BloggerWeb",
    link: "http://blogger-web.vercel.app/",
    src: Blogger,
    tech: "React, Next.js, Typescript, MongoDB, SCSS",
    desc: "Research Paper Blogsite with a Serverless Backend",
    svg: "/cards/D.svg",
  },
];

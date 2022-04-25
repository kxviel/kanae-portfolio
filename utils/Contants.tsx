import { AiFillMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const github = "https://github.com/kevkanae";
const linkedin = "https://www.linkedin.com/in/kevkanae";
const gmail = "mailto: kevkanae777@gmail.com";
const resume =
  "https://drive.google.com/file/d/1IucZetZ58hO54zexVz7I57DqboWJrJMh/view?usp=sharing";

export const navList = [
  {
    title: "GitHub",
    link: github,
    icon: <BsGithub />,
  },
  {
    title: "Resume",
    link: resume,
    icon: <CgFileDocument />,
  },
  {
    title: "LinkedIn",
    link: linkedin,
    icon: <BsLinkedin />,
  },
  {
    title: "Gmail",
    link: gmail,
    icon: <AiFillMail />,
  },
];

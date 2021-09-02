import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import Image from "next/image";

const LandingPage = () => {
  const contactDataList = [
    { src: "/github.svg", alt: "GitHub", link: "https://github.com/kevkanae" },
    {
      src: "/linkedin.svg",
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/kevkanae/",
    },
    { src: "/gmail.svg", alt: "Email", link: "mailto:kevkanae777@gmail.com" },
    {
      src: "/instagram.svg",
      alt: "Instagram",
      link: "https://www.instagram.com/kevkanae.sama/",
    },
    {
      src: "/outlook.svg",
      alt: "Outlook",
      link: "mailto:kevkanae777@outlook.com",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="landing-root">
        <div className="my-dp" />
        <p className="my-name">
          <span>K</span>evin <span>D</span>aniel <span>G</span>oveas
        </p>
        <p className="my-title">• Web Developer •</p>
        <p className="my-title extra">
          A Good Piece Of Code Is A Thing Of Beauty
        </p>
        <div className="icon-grp">
          {contactDataList.map((data, index) => (
            <a key={index} href={data.link}>
              <Image height="49" width="49" src={data.src} alt={data.alt} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;

import Image from "next/image";
import React from "react";
import {
  SiTypescript,
  SiNextDotJs,
  SiReact,
  SiBootstrap,
  SiSass,
  SiJavascript,
  SiMaterialUi,
  SiMongodb,
  SiFirebase,
  SiServerless,
  SiJson,
  SiStyledComponents,
  SiGithub,
  SiLivestream,
} from "react-icons/si";
import { projectList } from "./constants/projects";

const Projects = () => {
  const style = { height: "56px", width: "56px", margin: "0 3.5rem" };
  const iconArray = [
    [
      <SiTypescript key="0" style={style} />,
      <SiNextDotJs key="1" style={style} />,
      <SiSass key="2" style={style} />,
      <SiJson key="3" style={style} />,
      <SiReact key="4" style={style} />,
    ],
    [
      <SiTypescript key="0" style={style} />,
      <SiNextDotJs key="1" style={style} />,
      <SiSass key="2" style={style} />,
      <SiFirebase key="3" style={style} />,
      <SiBootstrap key="4" style={style} />,
      <SiReact key="5" style={style} />,
    ],
    [
      <SiTypescript key="0" style={style} />,
      <SiNextDotJs key="1" style={style} />,
      <SiSass key="2" style={style} />,
      <SiReact key="3" style={style} />,
    ],
    [
      <SiTypescript key="0" style={style} />,
      <SiNextDotJs key="1" style={style} />,
      <SiSass key="2" style={style} />,
      <SiReact key="3" style={style} />,
      <SiMongodb key="4" style={style} />,
      <SiServerless key="5" style={style} />,
      <SiBootstrap key="5" style={style} />,
      <SiMaterialUi key="5" style={style} />,
    ],
  ];
  return (
    <>
      {projectList.map((data, index) => (
        <div key={index} className="project-root">
          <div
            style={{
              backgroundImage: `url(/bg.svg)`,
              backgroundPosition: "top",
              backgroundSize: "cover",
            }}
            className="project-root__box"
          >
            <div className="project-root__box__content">
              <h1>{data.name}</h1>
              <h3
                style={{
                  backgroundColor: "#282D4F",
                }}
              >
                <a
                  style={{
                    color: "white",
                  }}
                  href={data.github}
                >
                  <SiGithub /> GitHub
                </a>
              </h3>
              <h3
                style={{
                  backgroundColor: "#548CA8",
                }}
              >
                <a
                  style={{
                    color: "white",
                  }}
                  href={data.link}
                >
                  <SiLivestream /> Live Demo
                </a>
              </h3>
            </div>
            <div className="project-root__box__stacks">
              <div className="project-root__box__stacks__icon">
                {iconArray[index]}
              </div>
            </div>
            <div className="project-root__box__showcase">
              <div className="project-root__box__showcase__wrapper">
                <div className="project-root__box__showcase__wrapper__side project-root__box__showcase__wrapper__side--front">
                  <Image
                    className="front-face"
                    src={data.front}
                    alt="First slide"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <div className="project-root__box__showcase__wrapper__side project-root__box__showcase__wrapper__side--back">
                  <Image
                    className="back-face"
                    src={data.back}
                    alt="First slide"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;

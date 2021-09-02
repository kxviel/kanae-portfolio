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
                  backgroundColor: "black",
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
              <h3>
                <a href={data.link}>
                  <SiLivestream /> Live Demo
                </a>
              </h3>
            </div>
            <div className="project-root__box__stacks">
              {data.tech.map((x, i) => x)}
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
                    objectFit="cover"
                  />
                </div>
                <div className="project-root__box__showcase__wrapper__side project-root__box__showcase__wrapper__side--back">
                  <Image
                    className="back-face"
                    src={data.back}
                    alt="First slide"
                    layout="fill"
                    objectPosition="center"
                    objectFit="cover"
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

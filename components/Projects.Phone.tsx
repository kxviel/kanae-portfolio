import { projectList } from "./constants/projects";
import Image from "next/image";
import { SiGithub, SiLivestream } from "react-icons/si";

const PhoneProjects = () => {
  return (
    <>
      <div className="phone">
        <h3>Note: View on Desktop for Better User Experience</h3>
        <h3
          style={{
            fontSize: "2.1rem",
            fontWeight: "bold",
            color: "black",
            marginTop: "2.1rem",
          }}
        >
          Projects
        </h3>
        {projectList.map((x, i) => (
          <div key={i} className="phone__card">
            <div className="phone__card__sides phone__card__sides--front">
              <Image
                alt="showcase"
                src={x.front}
                layout="fill"
                objectFit="fill"
              />
            </div>
            <div className="phone__card__sides phone__card__sides--back">
              <h1>{x.name}</h1>
              <h3
                style={{
                  backgroundColor: "#282D4F",
                }}
              >
                <a
                  style={{
                    color: "white",
                  }}
                  href={x.github}
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
                  href={x.link}
                >
                  <SiLivestream /> Live Demo
                </a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PhoneProjects;

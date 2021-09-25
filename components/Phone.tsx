import { projectList } from "../utils/ProjectsList";
import { motion } from "framer-motion";
import Image from "next/image";

const Phone = () => {
  return (
    <>
      {projectList.map((x, i) => (
        <div key={i} className="phoneproj">
          <div className="phoneproj__root">
            <div className="phoneproj__root__left">
              <motion.a
                className="phoneproj__root__left__aTag"
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 1.4,
                }}
                animate={{ opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                transition={{
                  type: "spring",
                  stiffness: 490,
                  damping: 21,
                }}
                href={x.link}
                target="_blank"
                rel="noreferrer"
              >
                <Image height={490} width={490} src={x.src} alt="Project" />
              </motion.a>
            </div>
            <div className="phoneproj__root__right">
              <p className="phoneproj__root__right__name">{x.name}</p>
              <p className="phoneproj__root__right__desc">{x.desc}</p>
              <p className="phoneproj__root__right__tech">{x.tech}</p>
              <a
                className="phoneproj__root__right__live"
                href={x.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Phone;

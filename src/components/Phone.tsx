import { motion } from "framer-motion";
import { projectList } from "../utils/ProjectsList";

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
              >
                <img src={x.src} alt="" />
              </motion.a>
            </div>
            <div className="phoneproj__root__right">
              <p className="phoneproj__root__right__name">{x.name}</p>
              <p className="phoneproj__root__right__desc">{x.desc}</p>
              <p className="phoneproj__root__right__tech">{x.tech}</p>
              <a className="phoneproj__root__right__live" href={x.github}>
                GitHub
              </a>
            </div>
          </div>
          <div className="phoneproj__hr" />
        </div>
      ))}
    </>
  );
};

export default Phone;

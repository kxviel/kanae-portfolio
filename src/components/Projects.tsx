import { Media, MediaContextProvider } from "../utils/Media";
import Desktop from "./Desktop";
import Phone from "./Phone";

const Projects = () => {
  return (
    <>
      <MediaContextProvider>
        <Media lessThan="sm">
          <Phone />
        </Media>
        <Media greaterThan="sm">
          <Desktop />
        </Media>
      </MediaContextProvider>
    </>
  );
};

export default Projects;

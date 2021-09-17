import SunDark from "../assets/theme/sun-dark.svg";
import { useTheme } from "next-themes";
import MoonLight from "../assets/theme/moon-light.svg";
import MoonDark from "../assets/theme/moon-dark.svg";
import SunLight from "../assets/theme/sun-light.svg";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="foot">
      <div className="foot__theme">
        <div onClick={() => setTheme("light")} className="foot__theme__sun">
          {theme === "light" ? (
            <img src={SunDark} alt="" />
          ) : (
            <img src={SunLight} alt="" />
          )}
        </div>
        <div onClick={() => setTheme("dark")} className="foot__theme__moon">
          {theme === "light" ? (
            <img src={MoonDark} alt="" />
          ) : (
            <img src={MoonLight} alt="" />
          )}
        </div>
      </div>
      <div className="foot__copyright">
        <p>Copyright@{new Date().getFullYear()} Kevin D Goveas</p>
      </div>
    </div>
  );
};

export default Footer;

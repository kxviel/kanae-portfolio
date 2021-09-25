import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const handleTheme = (e: { target: { value: string } }) => {
    setTheme(e.target.value);
  };
  return (
    <div className="foot">
      <div className="foot__theme">
        <select onChange={handleTheme}>
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
        </select>
      </div>
      <div className="foot__copyright">
        <p>© {new Date().getFullYear()} Kevin D Goveas</p>
      </div>
    </div>
  );
};

export default Footer;

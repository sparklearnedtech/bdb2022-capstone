import { IconContext } from "react-icons";

function CustomIcons({
  children,
  color = "black",
  size = "1em",
  className = "react-icons",
}) {
  return (
    <IconContext.Provider value={{ color, className, size }}>
      <div>{children}</div>
    </IconContext.Provider>
  );
}

export default CustomIcons;

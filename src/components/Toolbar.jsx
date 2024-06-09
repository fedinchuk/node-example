import { useContext } from "react";
import ThemeContext from "../context/theme";

export default function Toolbar() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ background: theme === "dark" ? "black" : "white" }}>
      <p style={{ color: theme === "dark" ? "white" : "black" }}>
        Активна тема: {theme}
      </p>
    </div>
  );
}

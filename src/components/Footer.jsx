import { useContext } from "react";
import UserContext from "../context/user";

export default function Footer() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Налаштування користувача</h2>
      <p>Тема: {user.preferences.theme}</p>
      <p>Мова: {user.preferences.language}</p>
    </div>
  );
}

import { useContext } from "react";
import UserContext from "../context/user";

export default function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>Імʼя: {user.name}</p>
      <p>Електронна пошта: {user.email}</p>
    </div>
  );
}

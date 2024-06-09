import styled from "styled-components";
import styles from "./CustomButton.module.css";

const ButtonStyled = styled.button`
  background: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
`;

function Button(props) {
  return (
    <button
      type="button"
      className={props.dangerButton ? styles.baseButton : styles.dangerButton}
      {...props}
    >
      Click me
    </button>
  );
}

export { Button, ButtonStyled };

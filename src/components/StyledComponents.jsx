import styled from "styled-components";

export default function StyledComponents() {
  const Button = styled.button`
    color: white;
    background-color: green;
    &:hover {
      background-color: blue;
    }
  `;

  return <Button type="button">Натисніть мене</Button>;
}

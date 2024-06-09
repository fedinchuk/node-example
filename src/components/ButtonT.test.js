import { render, screen, fireEvent } from "@testing-library/react";
import ButtonT from "./ButtonT";
import '@testing-library/jest-dom';

test("перевірка зміни тексту на кнопці після кліку", () => {
  render(<ButtonT />);
  const button = screen.getByText("Кнопка");
  fireEvent.click(button);
  expect(button).toHaveTextContent("Клікнуто");
});

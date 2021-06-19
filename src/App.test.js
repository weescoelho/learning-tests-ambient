import { render, screen } from "@testing-library/react";
import App from "./App";

/**
 * Todo teste é executado dentro da função test()
 */

/**
 * Describe: o describe cria um escopo para o teste
 */

describe("escopo do teste", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});

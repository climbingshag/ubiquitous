import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./Containers");

describe("<App> component", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("Contains content", () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});

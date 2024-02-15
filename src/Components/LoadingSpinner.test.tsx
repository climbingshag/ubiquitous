import LoadingSpinner from "./LoadingSpinner";
import { render, screen } from "@testing-library/react";

describe("LoadingSpinner", () => {
  test("Renders an Oval", () => {
    render(<LoadingSpinner data-testid="3" />);
    expect(screen.getByLabelText("oval-loading")).toBeInTheDocument();
  });
});

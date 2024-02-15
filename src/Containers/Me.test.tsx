import Me from "./Me";
import { render } from "@testing-library/react";
jest.mock("../Api/Models/User/MeHooks");

describe("LoadingSpinner", () => {
  test("Renders", () => {
    render(<Me />);
  });
});

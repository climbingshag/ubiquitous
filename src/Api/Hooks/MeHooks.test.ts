import { useMe } from "./MeHooks";
import { renderHook } from "@testing-library/react";

jest.mock("@apollo/react-hooks", () => {
  const originalModule = jest.requireActual("@apollo/react-hooks");
  return {
    __esModule: true,
    ...originalModule,
    useSuspenseQuery: () => ({ data: { me: "John" } }),
  };
});

describe("MeHooks", () => {
    describe("useMe", () => {
        test("Returns a user", () => {
          const { result } = renderHook(() => useMe());
          expect(result.current).toEqual("John")
        })
    })
})

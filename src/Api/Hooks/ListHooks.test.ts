import  { useList } from "./ListHooks";
import { renderHook } from "@testing-library/react";

jest.mock("@apollo/react-hooks", () => {
    const originalModule = jest.requireActual("@apollo/react-hooks");
    return {
    __esModule: true,
    ...originalModule,
    useSuspenseQuery: () => ({data:{list: ["Test List"]}}) // Why doesn't jest.fn() work here????!!!?!
  };
});

describe("ListHooks", () => {
    describe("useList", () => {
        test("Returns a list", () => {
          const { result } = renderHook(() => useList("2"));
          expect(result.current).toEqual(["Test List"])
        })
    })
})


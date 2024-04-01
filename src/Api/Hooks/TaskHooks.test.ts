import  { useTask } from "./TaskHooks";
import { renderHook } from "@testing-library/react";

jest.mock("@apollo/react-hooks", () => {
    const originalModule = jest.requireActual("@apollo/react-hooks");
    return {
    __esModule: true,
    ...originalModule,
    useSuspenseQuery: () => ({data:{task: "Test Task"}}) // Why doesn't jest.fn() work here????!!!?!
  };
});

describe("TaskHooks", () => {
    describe("useTask", () => {
        test("Returns a task", () => {
          const { result } = renderHook(() => useTask("2"));
          expect(result.current).toEqual("Test Task")
        })
    })
})

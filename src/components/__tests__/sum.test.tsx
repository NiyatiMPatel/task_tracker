import "@testing-library/jest-dom";
import sum from "../sum";

test("Sum function must calculate the sum of 2 numbers", () => {
  // RENDER
  // QUERY
  const result = sum(3, 4);
  // ASSERTION
  expect(result).toBe(7);
});

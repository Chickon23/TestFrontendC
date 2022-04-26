import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "./Navigation";

it("renders homepage unchanged", () => {
  const { container } = render(<Navigation />);
  expect(container).toMatchSnapshot();
});

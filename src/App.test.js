import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders the updated portfolio experience", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /software engineer building production systems/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByText("Jul 2024 – Jul 2025")).toBeInTheDocument();
  expect(screen.getByText("Aug 2025 – Sep 2026")).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Lead Software Engineer" })
  ).toBeInTheDocument();
});

test("hides the sections below work while the case study is open", () => {
  Element.prototype.scrollIntoView = jest.fn();
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", { name: /read the case study/i })
  );

  expect(screen.queryByRole("heading", { name: "Education" })).toBeNull();
  expect(screen.queryByRole("heading", { name: "Projects" })).toBeNull();
  expect(screen.queryByRole("heading", { name: "Skills" })).toBeNull();
  expect(screen.queryByRole("heading", { name: "Let's chat." })).toBeNull();

  fireEvent.click(
    screen.getAllByRole("button", { name: /hide case study/i })[0]
  );

  expect(screen.getByRole("heading", { name: "Education" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Projects" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Let's chat." })).toBeInTheDocument();
});

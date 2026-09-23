import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders the updated portfolio experience", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /software engineer building products end to end/i,
    })
  ).toBeInTheDocument();
  expect(screen.getAllByText("Jul 2024 – Jul 2025").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Aug 2025 – Sep 2026").length).toBeGreaterThan(0);
  expect(
    screen.getAllByRole("heading", { name: "Lead Software Engineer" }).length
  ).toBeGreaterThan(0);
  expect(
    screen.getAllByRole("heading", { name: "Digital Marketing Intern" }).length
  ).toBeGreaterThan(0);
  expect(
    screen.getAllByRole("heading", { name: "Software Developer Intern" }).length
  ).toBeGreaterThan(0);

  const oneday = screen.getByLabelText("View details for Oneday Insurance");
  expect(oneday.closest("details")).not.toHaveAttribute("open");
  fireEvent.click(oneday);
  expect(oneday.closest("details")).toHaveAttribute("open");
});

test("hides the sections below work while the case study is open", () => {
  Element.prototype.scrollIntoView = jest.fn();
  render(<App />);

  fireEvent.click(screen.getByLabelText("View details for Oneday Insurance"));
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

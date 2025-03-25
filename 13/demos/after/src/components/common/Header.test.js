import React from "react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

it("contains 3 links", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  screen.getByRole("link", { name: "Home" });
  screen.getByRole("link", { name: "Courses" });
  screen.getByRole("link", { name: "About" });
});

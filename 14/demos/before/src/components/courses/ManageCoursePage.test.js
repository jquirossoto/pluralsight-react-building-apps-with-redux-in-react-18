import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { enableFetchMocks } from "jest-fetch-mock";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { authors, courses } from "../../../tools/mockData";
import store from "../../redux/configureStore";
import ManageCoursePage from "./ManageCoursePage";

enableFetchMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it("sets error when attempting to save an empty title field", async () => {
  fetch.mockResponseOnce(JSON.stringify(courses));
  fetch.mockResponseOnce(JSON.stringify(authors));

  render(
    <BrowserRouter>
      <Provider store={store}>
        <ManageCoursePage />
      </Provider>
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeTruthy();
  });
  fireEvent.click(screen.getByRole("button", { name: "Save" }));
  screen.getByText("Title is required.");
});

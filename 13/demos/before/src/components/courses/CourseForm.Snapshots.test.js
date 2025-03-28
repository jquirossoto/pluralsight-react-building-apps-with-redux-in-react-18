import React from "react";
import renderer from "react-test-renderer";
import { authors, courses } from "../../../tools/mockData";
import CourseForm from "./CourseForm";

it('should set submit button label "Saving..." when saving is true ', () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});

it('should set submit button label "Save" when saving is false ', () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />
  );

  expect(tree).toMatchSnapshot();
});

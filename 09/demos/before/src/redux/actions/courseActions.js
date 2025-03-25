import { CREATE_COURSE } from "./actionsTypes";

export const createCourse = course => {
  return { type: CREATE_COURSE, course };
};

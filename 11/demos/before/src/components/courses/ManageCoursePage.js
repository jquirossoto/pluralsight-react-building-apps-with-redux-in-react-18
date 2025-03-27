import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { newCourse } from "../../../tools/mockData";
import { loadAuthors } from "../../redux/actions/authorActions";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import CourseForm from "./CourseForm";

export const ManageCoursePage = () => {
  const courses = useSelector(state => state.courses);
  const authors = useSelector(state => state.authors);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [course, setCourse] = useState(newCourse);

  const { slug } = useParams();

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(loadCourses()).catch(err =>
        alert("Loading couses failed" + err)
      );
    } else if (slug) {
      setCourse(courses.find(c => c.slug === slug) || newCourse);
    }
  }, [courses, slug]);

  useEffect(() => {
    if (authors.length == 0) {
      dispatch(loadAuthors()).catch(err =>
        alert("Loading authors failed" + err)
      );
    }
  }, [authors]);

  const handleChange = event => {
    const { name, value } = event.target;
    setCourse(current => ({
      ...current,
      [name]: name === "authorId" ? parseInt(value) : value
    }));
  };

  const handleSave = event => {
    event.preventDefault();
    dispatch(saveCourse(course)).then(() => navigate("/courses"));
  };

  return (
    <CourseForm
      authors={authors}
      course={course}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
};

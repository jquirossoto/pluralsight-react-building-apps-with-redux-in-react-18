import React, { useEffect, useState } from "react";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import { useDispatch, useSelector } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorActions";
import { useNavigate, useParams } from "react-router-dom";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";

export default function ManageCoursePage() {
  const courses = useSelector(state => state.courses);
  const authors = useSelector(state => state.authors);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [course, setCourse] = useState(newCourse);
  const { slug } = useParams();

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(loadCourses()).catch(error => {
        alert("Loading courses failed" + error);
      });
    } else if (slug) {
      setCourse(courses.find(course => course.slug === slug) || newCourse);
    }
  }, [courses, slug]);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(loadAuthors()).catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }, [authors]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    dispatch(saveCourse(course)).then(() => {
      navigate("/courses");
    });
  }

  return (
    <CourseForm
      authors={authors}
      course={course}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

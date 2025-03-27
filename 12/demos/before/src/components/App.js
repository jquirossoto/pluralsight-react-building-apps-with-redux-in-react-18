import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/course/:slug?" element={<ManageCoursePage />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <ToastContainer
        autoClose={3000}
        hideProgressBar
        theme="colored"
      ></ToastContainer>
    </div>
  );
}

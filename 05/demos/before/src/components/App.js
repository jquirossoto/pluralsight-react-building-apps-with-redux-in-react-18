import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import CoursesPage from "./courses/CoursesPage";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

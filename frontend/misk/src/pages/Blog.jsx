import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "../components/MyBlog/BlogList"
import AdminPanel from "../components/MyBlog/AdminPanel";


const Blog = () => {
  return (
    <Router>
      <header className="bg-dark text-white p-3 text-center">
        <h1>Blog Platform</h1>
        <nav>
          <a href="/" className="text-white mx-3">Home</a>
          <a href="/admin" className="text-white mx-3">Admin Panel</a>
        </nav>
      </header>
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
    </Router>
  );
};

export default Blog;

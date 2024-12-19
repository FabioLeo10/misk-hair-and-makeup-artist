import React, { useState, useEffect } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/blog`);
        const data = await response.json();
        if (response.ok) {
          setBlogs(data.blog);
        } else {
          console.error("Errore nel caricamento dei blog:", data.message);
        }
      } catch (e) {
        console.error("Errore nella richiesta:", e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <div>Caricamento in corso...</div>;

  return (
    <div>
      <h2>Blog</h2>
      <div className="row">
        {blogs.map((blog, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              {blog.img && <img src={blog.img} className="card-img-top" alt="Blog" />}
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

import React, { useState } from "react";

const AdminPanel = () => {
  const [blogData, setBlogData] = useState({ title: "", content: "" });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      let imgPath = null;
      if (image) {
        const formData = new FormData();
        formData.append("img", image);
        const imgResponse = await fetch(`${import.meta.env.VITE_API_URL}/blog/upload/cloud`, {
          method: "POST",
          body: formData,
        });
        const imgData = await imgResponse.json();
        imgPath = imgData.img;
      }

      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/blog/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...blogData, img: imgPath }),
      });

      if (response.ok) {
        setMessage("Blog caricato con successo!");
      } else {
        const errorData = await response.json();
        setMessage(`Errore: ${errorData.message}`);
      }
    } catch (e) {
      setMessage(`Errore durante la richiesta: ${e.message}`);
    }
  };

  return (
    <div>
      <h2>Pannello Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Titolo</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={blogData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contenuto</label>
          <textarea
            className="form-control"
            name="content"
            value={blogData.content}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Immagine</label>
          <input type="file" className="form-control" onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Carica Blog
        </button>
      </form>
      
    </div>
  );
};

export default AdminPanel;

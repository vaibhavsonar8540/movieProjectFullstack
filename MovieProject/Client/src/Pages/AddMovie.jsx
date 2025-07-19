import axios from 'axios';
import React, { useState } from 'react';

const BASEURL = import.meta.env.VITE_BASEURL;

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    director: "",
    releaseYear: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASEURL}/movie/create`, formData, { withCredentials: true });
      alert("Movie created successfully!");
      setFormData({ title: "", genre: "", director: "", releaseYear: "", description: "" });
    } catch (err) {
      alert("Error creating Movie data!");
      console.error(err);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4 text-center">Add Movie</h2>
      <form onSubmit={handleSubmit} style={{ width: "50%", margin: "auto" }}>
        {["title", "genre", "director", "releaseYear"].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              className="form-control"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;

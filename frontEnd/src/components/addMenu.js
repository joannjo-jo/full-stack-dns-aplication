import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMenu() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   axios
  .post("http://127.0.0.1:8004/route/menuSave", form)
  .then((res) => {
    alert("Menu Saved");
    const newMenuId = res.data.data._id; 
    navigate(`/addMenuitem/${newMenuId}`);
  })
  .catch((err) => {
    console.error(err);
    alert("Error saving menu");
  });

  };

  return (
    <div
      className="container "
      style={{
        maxWidth: "600px",
        border: "2px solid",
        padding: "20px",
        marginTop: "70px",
      }}
    >
      <h1>Add Menu</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Name</label>
          <input
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>
       <button type="submit" className="btn btn-light px-5">
  Save
</button>

      </form>
    </div>
  );
}

export default AddMenu;

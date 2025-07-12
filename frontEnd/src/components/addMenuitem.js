import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import MenuNavbar from "./MenuNavbar";
function AddMenuitem() {
  const navigate = useNavigate();
  const { _id } = useParams(); 

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://127.0.0.1:8004/route/addMenuitem/${_id}`, form) 
      .then((res) => {
        alert("Menu Item Saved");
        navigate("/menu"); 
      })
      .catch((err) => {
        console.error(err);
        alert("Error saving menu item");
      });
  };

  return (
    <>
    <MenuNavbar/>
    <div
      className="container bg-dark text-light"
      style={{
        maxWidth: "600px",
        border: "2px solid",
        padding: "20px",
        marginTop: "70px",
      }}
    >
       
      <h1>Add Menu Item</h1>
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

        <div className="mb-2">
          <label>Price</label>
          <input
            className="form-control"
            name="price" 
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-light px-5">
          Save
        </button>
      </form>
    </div>
    </>
  );
}

export default AddMenuitem;


import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuNavbar from "./MenuNavbar";
import "./Landingpage.css";

function LandingPage() {
  const [menu, setMenu] = useState([]);
  const [menuitems, setMenuitems] = useState([]);
  const fetchAllMenu = () => {
    axios
      .get("http://127.0.0.1:8008/route/menuAlldata")
      .then((res) => {
        if (res.data.allData) {
          setMenu(res.data.allData);
        } else {
          alert("Failed to fetch menu");
        }
      })
      .catch((err) => {
        console.error("Error fetching menu:", err);
        alert("Error fetching menu");
      });
  };

  const handleMenuClick = (menuId) => {
    axios
      .get(`http://127.0.0.1:8008/route/allMenuitem/${menuId}`)
      .then((res) => {
        setMenuitems(res.data);
      })
      .catch((err) => {
        console.error("Error fetching menu items:", err);
        alert("Could not load menu items");
      });
  };

  useEffect(() => {
    fetchAllMenu();
  }, []);

  return (
    <div className="container-fluid LandingPage">
      <MenuNavbar />

      <div className="banner-img text-center">
        <h1>MENU</h1>
        <p>
          Please take a look at our menu featuring food, drinks, and brunch.
          <br /> If you'd like to place an order, use the "Order Online" button
          below the menu.
        </p>
      </div>

      <div className="button-bg text-center">
        <div className="buttons py-2">
          {menu.map((menu, index) => (
            <button
              key={index}
              className="btn btn-outline-primary me-3 px-4"
              onClick={() => handleMenuClick(menu._id)}
            >
              {menu.name}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-main bg-dark p-3">
        <div className="row m-4">
          <div className="card text-center p-3 border-light bg-dark text-light shadow-sm h-100 col-md-12 mb-3">
            {menuitems.length > 0 ? (
              menuitems.map((menuitem, index) => (
                <div key={index} className=" col-md-4 ">
                  <div className="card text-center border-light bg-dark text-light ">
                    <h5>{menuitem.name}</h5>
                    <p>{menuitem.description}</p>
                    <p>$ {menuitem.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="card text-center p-3 bg-dark text-light shadow-sm h-100">
                <p>Select a menu to view items.</p>
              </div>
            )}
          </div>
        </div>

        <div className="row m-4 d-flex">
          <div className="col-md-4">
            <div className="card text-center p-3 border-light bg-dark text-light shadow-sm h-100">
              <h6>CONNECT WITH US</h6>
              <p>+91 9567843340</p>
              <p>info@deepnetsoft.com</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center p-3 border-light bg-dark text-light shadow-sm h-100">
              <div className="text-center mb-1">
                <img
                  alt="logo"
                  src="https://www.deepnetsoft.com/apple-touch-icon.png"
                  width="30"
                  height="30"
                />
              </div>
              <h3>
                <span style={{ color: "blue" }}>DEEP</span> NET
              </h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center p-3 border-light bg-dark text-light shadow-sm h-100">
              <h6>FIND US</h6>
              <p>
                First floor, Geo infopark,
                <br />
                Infopark EXPY,Kakkanad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

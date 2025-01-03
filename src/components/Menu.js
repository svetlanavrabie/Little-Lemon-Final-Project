import React from "react";
import recipes from "../helpers/recipes";
import Swal from "sweetalert2";
import "../styles/Menu.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  //   console.log(recipes[0]);

  const navigate = useNavigate();
  const username = localStorage.getItem("username").toUpperCase();
  const userlastname = localStorage.getItem("userlastname").toUpperCase();

  const handleOrder = (id) => {
    console.log(id);

    if (!username && !userlastname) {
      //alert("you need login");
      //navigate("/loginin");

      const swalWithBootstrapButtons1 = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons1
        .fire({
          title: "You need to login in",
          text: "You need to login in!",
          icon: "warning",
          showCancelButton: false,
          confirmButtonText: "LoginIn",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });

      return;
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Do you want to confirm order?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: false,
          confirmButtonText: "Yes, order it!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "Orderd!",
              "Your order has been confirmed.",
              "success"
            );
          }
        });
    }
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button
                className="orderbtn"
                onClick={() => handleOrder(recipe.id)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Prodect from "./Prodect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProdectDetail({ cart, setcart }) {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const [relatedproduct, setrelatedproduct]=useState([]);

  // Fetch the product based on the ID
  useEffect(() => {
    const filteredProduct = items.filter((product) => product.id == id);
    setproduct(filteredProduct[0]);
  }, [id]); // Only dependent on the ID

  // Fetch related products based on the category
  useEffect(() => {
    if (product.category) {
      const relatedproduct = items.filter(
        (suman) => suman.category ===product.category
      );
      setrelatedproduct(relatedproduct);
    }
  }, [product.category]); // Dependent only on the product's category

  const addtocard = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setcart([...cart, obj]);
    console.log("card element =", cart);
    toast(" Item added to cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button
            onClick={() =>
              addtocard(
                product.id,
                product.price,
                product.title,
                product.description,
                product.imgSrc,
              )
            }
           className="btn btn-warning"
          >
            Add to cart
          </button>
        </div>
      </div>
      {/* Pass related products to the Prodect component */}
      <h1 className="text-center text-warning">Related Product</h1>
      <Prodect cart={cart} setcart={setcart} items={relatedproduct}></Prodect>
    </>
  );
}


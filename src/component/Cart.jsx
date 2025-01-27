import React from "react";
import { items } from "./Data";
import { Link } from "react-router-dom";
export default function Cart({cart, setcart}) {

  return (
    <>
      <div className="container my-5 " style={{width:"54%"}}>
        {
            cart.length==0?(
             <>
             <div className="text-center">
              <h1>Your Card is Empty</h1>
              <Link to={'/'} className="btn btn-warning"> continue shoping...</Link>
             </div>
             </>
            ):
        cart.map((Product) => {
          return (
            <>
              <div className="card mb-3 my-5" style={{ width: "700px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={Product.imgSrc}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <h5 className="card-title">{Product.title}</h5>
                      <p className="card-text">{Product.description}</p>
                      <button className="btn btn-primary mx-3">
                        {Product.price} ₹
                      </button>
                     
                      <button id="btnn"className="btn btn-warning">Buy Now</button>
          
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      
      </div>

      {
          cart.length!==0 &&(
            <div className="container text-center my-5" style={{
              display:"flex",
              justifyContent:"center",
              alignItems:'center'
              }}>
              <button className="btn btn-warning mx-5">CheckOut</button>
              <button onClick={()=>setcart("")} className="btn btn-danger">Clear Cart</button>
              
            </div>
          )
        }
    
    </>
  );
}





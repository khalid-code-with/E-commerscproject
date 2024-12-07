
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { FaCartArrowDown } from "react-icons/fa";

export default function Navbar({setdata,cart}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchterm, setsearchterm] = useState("");

  const filterbycategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setdata(element);
  };

  const filterbyprice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setdata(element);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchterm}`);
    setsearchterm("");
  };

  return (
    <>
      <header className='sticky-top'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to={'/'} className="navbar-brand mx-1" style={{ marginLeft: "10px" }}>E-Cart</Link>

            {/* Toggler button for mobile */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar links and search bar */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="mx-auto" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <form onSubmit={handlesubmit} className="d-flex" style={{ maxWidth: "500px", width: "100%" }}>
                  <input 
                    value={searchterm} 
                    onChange={(e) => setsearchterm(e.target.value)} 
                    type="text" 
                    className="form-control me-2" 
                    placeholder='Search product' 
                  />
                </form>
              </div>
              <Link to={'/cart'} className="btn btn-primary position-relative ms-auto me-2">
                <FaCartArrowDown  className='mx-1'/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
            </div>
          </div>
        </nav>
        {/* Filter Section */}
        {location.pathname === '/' && (
          <div className="container-fluid bg-warning text-primary py-2">
            <div className="row text-center">
              <div className="col items">Filter by{" -> "}</div>
              <div className="col items" onClick={() => setdata(items)}>No Filter</div>
              <div className="col items" onClick={() => filterbycategory('mobiles')}>Mobiles</div>
              <div className="col items" onClick={() => filterbycategory('laptops')}>Laptops</div>
              <div className="col items" onClick={() => filterbycategory('tablets')}>Tablets</div>
              <div className="col items" onClick={() => filterbyprice(29999)}>{"  ₹ "}2999</div>
              <div className="col items" onClick={() => filterbyprice(49999)}>{"  ₹ "}4999</div>
              <div className="col items" onClick={() => filterbyprice(69999)}>{"  ₹ "}6999</div>
              <div className="col items" onClick={() => filterbyprice(89999)}>{"  ₹ "}8999</div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}


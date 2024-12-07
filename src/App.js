
// import logo from './logo.svg';
// import './App.css';
// import Navbar from './component/Navbar';
// import Prodect from './component/Prodect';
// import ProdectDetail from './component/ProdectDetail';
// import Searchitem from './component/Searchitm';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Cart, { items } from './component/Data';

// import { useState } from 'react';

// function App() {
//   const[data,setdata]=useState([...items])
//   const[cart,setcart]=useState([ ])
//   return (
//     <>

//       <Router>
//         <Navbar cart={cart} setdata={setdata} />
//         <Routes>
//           <Route path="/" element={<Prodect  cart={cart} setcart={setcart} items={data} />} />
       
//           <Route path="/Product/:id" element={<ProdectDetail cart={cart} setcart={setcart} items={data}  />} />
//           <Route path="/search/:term" element={<Searchitem  cart={cart} setcart={setcart} items={data} />} />
//           <Route path="/cart" element={<Cart cart={cart} setcart={setcart} />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Prodect from './component/Prodect';
import ProdectDetail from './component/ProdectDetail';
// Fixed spelling error 'Searchitm' to 'Searchitem'
import Searchitem from './component/Searchitem'; // If the file is named SearchItem.js (case-sensitive)

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { items } from './component/Data'; // Removed Cart from Data import (not needed here)
import Cart from './component/Cart'; // Correctly imported Cart from the Cart component

import { useState } from 'react';

function App() {
  const [data, setdata] = useState([...items]);
  const [cart, setcart] = useState([]);
  return (
    <>
      <Router>
        <Navbar cart={cart} setdata={setdata} />
        <Routes>
          <Route path="/" element={<Prodect cart={cart} setcart={setcart} items={data} />} />
          <Route path="/Product/:id" element={<ProdectDetail cart={cart} setcart={setcart} items={data} />} />
          <Route path="/search/:term" element={<Searchitem cart={cart} setcart={setcart} items={data} />} />
          <Route path="/cart" element={<Cart cart={cart} setcart={setcart} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;





import "./App.css";
import Products from "./components/Products";

import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Products /> */}

      <CartProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;

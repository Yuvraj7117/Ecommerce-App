import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Cart from "./components/childComponents/Cart";
import ProductDetails from "./components/childComponents/ProductDetails";
import Errors from "./components/Errors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />}/>
        <Route path="/store"  element={<Store />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products/:_id" element={<ProductDetails/>}/>
        <Route path="*" element={<Errors/>}/>
        
      </Routes>
    </Router>
  )
}

export default App;

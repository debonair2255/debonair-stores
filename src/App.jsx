import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './home';
import About from './components/about';
import Contacts from './components/contacts';
import Services from './components/services';
import Shop from './components/shop';
import './index.css';
import Wishlist from "./components/wishlist";
import Cart from "./components/cart";
import SignIn from "./components/signIn";
import GetStarted from "./components/getStarted";
import ProductDetails from "./components/productsdetails";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;

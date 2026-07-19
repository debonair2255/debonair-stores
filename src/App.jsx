import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './home';
import About from './components/about';
import Contacts from './components/contacts';
import Services from './components/services';
import Shop from './components/shop';
import './index.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Layout>
  );
}

export default App;

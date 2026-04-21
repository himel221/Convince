import { Routes, Route } from 'react-router-dom';  // Remove Router import
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Companies from './pages/company/companies.jsx';
import Apparels from './pages/apparels/apparels.jsx';
import Zippers from './pages/zippers/zippers.jsx';
import Dyeing from './pages/dyeing/dyeing.jsx';
import Products from './pages/zippers/zproducts.jsx';
import Buyers from './pages/zippers/zbuyers.jsx';
import Aproducts from './pages/apparels/aproducts.jsx';
import Abuyers from './pages/apparels/abuyers.jsx';
import Contact from './pages/home/contact.jsx'
import Acontact from './pages/apparels/acontact.jsx'
import Zcontact from './pages/zippers/zcontact.jsx'

function App() {
  return (
    <Routes>  {/* No Router wrapper */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/companies" element={<Companies/>}/>
      <Route path="/apparels" element={<Apparels/>}/>
      <Route path="/dyeing" element={<Dyeing/>}/>
      <Route path="/computer" element={<Apparels/>}/>
      <Route path="/zippers" element={<Zippers/>}/>
      <Route path="/zproducts" element={<Products/>}/>
      <Route path="/zbuyers" element={<Buyers/>}/>
      <Route path="/aproducts" element={<Aproducts/>}/>
      <Route path="/abuyers" element={<Abuyers/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/acontact" element={<Acontact/>}/>
      <Route path="/zcontact" element={<Zcontact/>}/>
    </Routes>
  );
}

export default App;
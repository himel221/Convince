import { Routes, Route } from 'react-router-dom';  // Remove Router import
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Companies from './pages/company/companies.jsx';
import Apparels from './pages/apparels/apparels.jsx';
import Zippers from './pages/zippers/zippers.jsx';
import Dyeing from './pages/dyeing/dyeing.jsx';

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
    </Routes>
  );
}

export default App;
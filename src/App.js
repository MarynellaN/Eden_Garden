import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/main.css"

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Gallery from "./components/gallery/gallery";
import Services from "./components/services/service.";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About/>} /> */}
          <Route path="/contacts" element={<Contact/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/services" element={<Services/>} />
          {/* <Route path="/footer" element={<Footer/>} /> */}
        </Routes>
        <Footer/>
        
        {/* <Footer /> */}
      </Router>
      {/* </AuthProvider>  */}
    </div>
  );
}

export default App;

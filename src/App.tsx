import { BrowserRouter as Router } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ContactUs from './components/contactUs/contactUs';

function App() {
  console.log("App component rendered"); // Debugging log
  return (
    <Router>
      
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contactUs" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      
    </Router>
  );
}

export default App;
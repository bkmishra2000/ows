
import './App.css';
import { Header } from './Components/header';
import Main from './Components/main';
import Footer from './Components/Footer';
import Industry from './Components/Industry';
import Contact from './Components/contact';
import About from './Components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contect" element={<Contact />}></Route>
          <Route path="/indusrty" element={<Industry />}></Route>
        </Routes>
        <Footer />
      </Router>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/SignIn';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import AllCourses from './components/AllCourses/AllCourses';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';

function App() {
  return (
     <>
     <BrowserRouter>
     <Header></Header>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
     </BrowserRouter>



</>
  );
}

export default App;

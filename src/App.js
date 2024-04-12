import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";
import Signup from "./components/Signup";
import EventList from "./components/EventList";


const App = () => {
  React.useEffect(() => {
  }, []);
  return (

    <Router>
      <div>
      
      <Header />
        <Routes> {/* Wrap your routes with Routes */}
          <Route path="/signup" element={<Signup />} /> {/* Use element prop to specify component */}
          <Route path="/login" element={<LogIn />} />{(
            <>
            <Route path="/Homepage" element={<EventList />} />
            </>
          )}
          <Route path="/" element={ /* Define your existing routes */ (
            <>
             <HeroSection/>
              <Events />
              <About />
              <Contact />
              <Footer />
            </>
          )} />
        </Routes>
      </div>
      <Toaster />
    </Router>
  );
};

export default App;
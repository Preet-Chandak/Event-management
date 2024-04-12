import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainContainer from "./MainContainer";
import EventList from "./components/EventList";

const App = () => {
  return (
    <Router>
      <div>
        <MainContainer />
        <Toaster />
        <Routes>
          <Route path="/Homepage" element={<EventList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
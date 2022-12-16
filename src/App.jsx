import { BrowserRouter, Route, Routes } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Contacts from "./Contacts";
import About from "./About";
import Nopage from "./Nopage";
function App() {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
}

export default App;
// https://jsonplaceholder.typicode.com/posts

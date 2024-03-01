
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Events from './components/Events';
import Metrics from "./components/Metrics";
import SingleEvent from './components/SingleEvent';
import BibGeneration from "./components/BibGeneration";

import "./styles/index.scss";
function App() {
  return (
<BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="events" element={<Events />} />
              <Route path="metrics" element={<Metrics />} />
              <Route path="event/:slug" element={<SingleEvent />} />
              <Route path="bibgeneration" element={<BibGeneration />} />
              </Route>
              </Routes>
              </BrowserRouter>
  );
}

export default App;

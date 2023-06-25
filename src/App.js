import "./App.css";

import ScrollToTop from "./utils/scrollToTop";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Works } from "./pages/Works/Works";
import { Home } from "./pages/Home/Home";
import { Blog } from "./pages/Blog/Blog";
import { WorkPage } from "./pages/WorkPage/WorkPage";
import { Contacts } from "./pages/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <ScrollToTop />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/work/:id" element={<WorkPage />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;

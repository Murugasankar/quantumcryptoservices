import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/services"
          element={<Services />}
        />
<Route
  path="/contact"
  element={<Contact />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
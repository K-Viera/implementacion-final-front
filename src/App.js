import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Fibonacci from "./components/views/Fibonacci/Fibonacci";
import Factorial from "./components/views/Factorial/Factorial";
import APTriangulo from "./components/views/APTriangulo/APTriangulo";
import APRectangulo from "./components/views/APRectangulo/APRectangulo";
import APCirculo from "./components/views/APCirculo/APCirculo";
import Layout from "./components/Layouts/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Fibonacci />} />
          <Route exact path="/factorial" element={<Factorial />} />
          <Route exact path="/aptriangulo" element={<APTriangulo />} />
          <Route exact path="/aprectangulo" element={<APRectangulo />} />
          <Route exact path="/apcirculo" element={<APCirculo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

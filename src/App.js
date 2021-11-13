import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Fibonacci from "./components/views/fibonacci/fibonacci";
import Factorial from "./components/views/factorial/factorial";
import APTriangulo from "./components/views/apTriangulo/apTriangulo";
import APTCirculo from "./components/views/apCirculo/apCirculo";
import APRectangulo from "./components/views/apRectangulo/apRectangulo";
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
          <Route exact path="/apcirculo" element={<APTCirculo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

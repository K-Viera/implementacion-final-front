import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Fibonacci from "./components/Views/Fibonacci/Fibonacci";
import Factorial from "./components/Views/Factorial/Factorial";
import APTriangulo from "./components/Views/APTriangulo/APTriangulo";
import APTCirculo from "./components/Views/APCirculo/APCirculo";
import APRectangulo from "./components/Views/APRectangulo/APRectangulo";
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

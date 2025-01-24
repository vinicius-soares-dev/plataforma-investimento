import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./pages/FormPage";
import ConservadorPage from "./pages/ConservadorPage";
import ModeradoPage from "./pages/ModeradoPage";
import ArrojadoPage from "./pages/ArrojadoPage";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulario" element={<Form />} />
        <Route path="/perfil-conservador" element={<ConservadorPage />} />
        <Route path="/perfil-moderado" element={<ModeradoPage />} />
        <Route path="/perfil-arrojado" element={<ArrojadoPage />} />
      </Routes>
    </Router>
  )
}

export default App;
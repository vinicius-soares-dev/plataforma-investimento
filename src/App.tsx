import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./pages/FormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/formulario" element={<Form />} />
      </Routes>
    </Router>
  )
}

export default App;
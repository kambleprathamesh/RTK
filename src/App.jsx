import "./App.css";
import Child from "./Components/Child";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./Components/Read";
import Update from "./Components/Update";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route path="/read" element={<Read />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

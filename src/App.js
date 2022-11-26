import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import List from "./pages/list/List";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

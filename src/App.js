import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import List from "./pages/list/List";
import ListDetails from "./pages/listDetails/ListDetails";
import Map from "./pages/map/Map";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/list" element={<List />} />
          <Route path="/list/:id" element={<ListDetails />} />
          <Route path="/map" element={<Map />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

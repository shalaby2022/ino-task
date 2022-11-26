import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Classes from "./pages/Classes";
import Info from "./pages/Info";
import List from "./pages/list/List";
import ListDetails from "./pages/listDetails/ListDetails";
import Map from "./pages/map/Map";
import Packages from "./pages/Packages";
import Photos from "./pages/Photos";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/list" element={<List />} />
          <Route path="/list/:id" element={<ListDetails />}>
            <Route path="info" element={<Info />} />
            <Route path="photos" element={<Photos />} />
            <Route path="classes" element={<Classes />} />
            <Route path="packages" element={<Packages />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

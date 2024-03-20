import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarNetflix from "./Components/NavbarNetflix";
import FooterNetflix from "./Components/FooterNetflix";
import HeaderTvShow from "./Components/TVShowHeader";
import Container from "react-bootstrap/Container";
// import MovieGallery from "./Components/MovieGallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShow from "./Components/TvShow";
import MovieDeteils from "./Components/MovieDeteils";

function App() {
  return (
    <BrowserRouter>
      <div className="costum-body">
        <NavbarNetflix />
        <Container fluid className="px-4">
          <HeaderTvShow />
          <Routes>
            <Route path="/TVshow" element={<TvShow />} />
            <Route
              path="/"
              element={
                <div>
                  <h1 id="h1-home" className="text-center">
                    BENVENUTO SUL MIO NETFLIX
                  </h1>
                </div>
              }
            />
            <Route path="/MovieDeteils/" element={<MovieDeteils />} />
          </Routes>
        </Container>

        <FooterNetflix />
      </div>
    </BrowserRouter>
  );
}

export default App;

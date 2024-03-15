import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarNetflix from "./Components/NavbarNetflix";
import FooterNetflix from "./Components/FooterNetflix";
import HeaderTvShow from "./Components/TVShowHeader";
import Container from "react-bootstrap/Container";
import MovieGallery from "./Components/MovieGallery";

function App() {
  return (
    <div className="costum-body">
      <NavbarNetflix />
      <Container fluid className="px-4">
        <HeaderTvShow />
        <h4 id="text-h4">Trending Now</h4>
        <MovieGallery title={"spider-man"} />
        <h4 id="text-h4">Watch it Again</h4>
        <MovieGallery title={"batman"} />
        <h4 id="text-h4">New Releases</h4>
        <MovieGallery title={"avengers"} />
      </Container>

      <FooterNetflix />
    </div>
  );
}

export default App;

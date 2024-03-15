import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarNetflix from "./Components/NavbarNetflix";
import FooterNetflix from "./Components/FooterNetflix";
import HeaderTvShow from "./Components/TVShowHeader";
import Container from "react-bootstrap/Container";
import FirstGallery from "./Components/FirstGallery";
import SecondGallery from "./Components/SecondGallery";
import ThirdGallery from "./Components/ThirdGallery";

function App() {
  return (
    <div>
      <NavbarNetflix />
      <Container fluid className="px-4">
        <HeaderTvShow />
        <h4>Trending Now</h4>
        <FirstGallery />
        <h4>Watch it Again</h4>
        <SecondGallery />
        <h4>New Releases</h4>
        <ThirdGallery />
      </Container>

      <FooterNetflix />
    </div>
  );
}

export default App;

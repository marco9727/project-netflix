import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "./Loading";

class FirstGallery extends Component {
  state = {
    listMovies: [],
    isLoading: true,
  };

  fetchMovies = () => {
    fetch("http://www.omdbapi.com/?apikey=75f1754f&s=spider-man")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("ERRORE NELLA CHIAMATA");
        }
      })
      .then((movies) => {
        console.log("MOVIES", movies);
        const randomMovies = movies.Search.sort(
          () => Math.random() - 0.5
        ).slice(0, 6);
        this.setState({
          listMovies: randomMovies,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
        this.setState({
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    console.log("componentDidMount");

    this.fetchMovies();
  }

  render() {
    return (
      <div>
        {" "}
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
            {this.state.listMovies.map((movie) => (
              <Col
                key={movie.imdbID}
                className="mb-2 text-center px-1 costum-img"
              >
                <img className="img-fluid" src={movie.Poster} alt="movie-img" />
              </Col>
            ))}
          </Row>
        )}
      </div>
    );
  }
}

export default FirstGallery;

import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

const MovieDeteils = function () {
  const params = useParams();
  console.log("PARAMS", params);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=75f1754f&i=tt0241527`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        return response.json();
      })
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, []);

  return (
    <div>
      {movieDetails && (
        <div className="mt-3">
          <h2 className="text-center">Dettagli di: film</h2>
          <Card>
            <Card.Img
              src="https://media.istockphoto.com/id/1179771730/it/foto/proiettore-cinematografico-vintage-e-proiezione-di-film.jpg?s=1024x1024&w=is&k=20&c=LADW6wqdOnBUfuPUi_DMa60QvfblBMwSvhsQj7ctBBU="
              alt="film"
            />
            <Card.Body className="text-center">
              <Card.Title>titolo film</Card.Title>
              <Card.Text>
                <div>
                  <p>anno di rilascio</p>
                  <p>durata</p>
                  <p>genere</p>
                  <p>actors</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MovieDeteils;

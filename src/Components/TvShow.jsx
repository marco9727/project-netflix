import MovieGallery from "./MovieGallery";

const TvShow = function () {
  return (
    <div>
      <h4 id="text-h4">Trending Now</h4>
      <MovieGallery title={"spider-man"} /> <h4 id="text-h4">New Releases</h4>
      <MovieGallery title={"avengers"} /> <h4 id="text-h4">Watch it Again</h4>
      <MovieGallery title={"batman"} />{" "}
    </div>
  );
};

export default TvShow;

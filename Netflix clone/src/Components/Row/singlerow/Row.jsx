import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../utility/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchurl, LargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailerurl, setTrailerurl] = useState("");

  const baseurl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchurl);
        const response = await axios.get(fetchurl);
        console.log(response);
        setMovie(response.data.results);
      } catch (error) {
        console.log(`Error:`, error);
      }
    })();
  }, [fetchurl]);

  const handclick = (movie) => {
    if (trailerurl) {
      setTrailerurl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log(url);
          const urlparams = new URLSearchParams(new URL(url).search);
          console.log(urlparams);
          console.log(urlparams.get("v"));
          setTrailerurl(urlparams.get("v"));
        })
        .catch((error) => console.log("Trailer not found:", error));
    }
  };

  const opts = {
    height: "300",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <div className="container">
      <div className="row">
        <h1>{title}</h1>
        <div className="row_posters">
          {movies?.map((movie, index) => (
            <img
              onClick={() => handclick(movie)}
              key={index}
              src={`${baseurl}${
                LargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${LargeRow ? "row_posterlarge" : ""}`}
            />
          ))}
        </div>
        <div style={{ padding: "40px" }}></div>
        {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;

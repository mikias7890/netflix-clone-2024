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

  //   useEffect Hook: This React hook runs side effects in function components. In this case, it's used to fetch movie data whenever the fetchurl prop changes.
  // Dependency Array: [fetchurl] ensures that the effect runs only when the fetchurl prop changes.
  // Async IIFE: An Immediately Invoked Function Expression (IIFE) is used to define an asynchronous function and immediately call it.
  // try-catch Block:
  // try: Executes code to fetch data from the API using the fetchurl prop.
  // console.log(fetchurl): Logs the fetchurl to the console for debugging.
  // axios.get(fetchurl): Uses axios to make a GET request to the specified fetchurl.
  // console.log(response): Logs the API response for debugging purposes.
  // setMovie(response.data.results): Updates the movies state with the data returned from the API (specifically, the results array).
  // catch: If an error occurs during the API request, it is caught, and the error message is logged to the console

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
  // Trailer Check: The function first checks if the trailerurl state already contains a value.
  // If trailerurl has a value: This means that a trailer is currently being displayed, so the function clears the trailerurl by setting it to an empty string (""). This effectively stops or hides the trailer.
  // If trailerurl is empty: The function will proceed to the else block, where it attempts to find and display the trailer

  //   Finding the Trailer:
  // movieTrailer(): This is a function (likely imported from a library like movie-trailer) that searches for the trailer's URL based on the movie's title, name, or original name.
  // movie?.title || movie?.name || movie?.original_name: The function attempts to find the trailer using different possible movie name properties. The ?. is the optional chaining operator, which safely accesses these properties even if they are undefined.
  // Promise Handling:
  // then Block: If the movieTrailer function successfully finds a URL, it enters the then block:
  // url: The URL of the trailer is returned.
  // new URL(url).search: Creates a new URL object and accesses the query string of the URL.
  // new URLSearchParams(): This parses the query string into an object (URLSearchParams) that allows easy access to the individual parameters in the query string.
  // urlparams.get("v"): Retrieves the value of the "v" parameter from the URL. This is typically the video ID for YouTube trailers.
  // setTrailerurl(urlparams.get("v")): Updates the trailerurl state with the video ID, which is used to display the trailer.
  // catch Block: If the movieTrailer function fails to find a trailer, it enters the catch block:
  // Error Handling: Logs a message to the console indicating that the trailer could not be found.
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

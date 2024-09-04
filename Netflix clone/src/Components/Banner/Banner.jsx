import React, { useEffect, useState } from "react";
import axios from "../utility/axios.jsx";
import request from "../utility/request.jsx";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(request.fetchNetflixPopular);
        console.log(response);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      } catch (error) {
        console.log(`Error:`, error);
      }
    })();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  //   Function Definition: function truncate(str, n) defines a function named truncate that takes two parameters:

  // str: The string that needs to be truncated.
  // n: The maximum length of the truncated string, including the ellipsis.
  // Optional Chaining (?.): The str?.length syntax uses optional chaining to check if str is not null or undefined before trying to access its length property. If str is null or undefined, str?.length will return undefined instead of throwing an error.

  // Conditional Check (str?.length > n): This checks if the length of the string str is greater than n. If it is, the string will be truncated; otherwise, the original string is returned.

  // str.substr(0, n - 1): This method is used to extract a substring from str, starting at index 0 and extracting up to n-1 characters. The substr method is used here to ensure the string is cut to fit within the specified length, minus room for the ellipsis.

  // Appending Ellipsis (+ "..."): If the string exceeds the desired length (n), an ellipsis is added to the end of the truncated string to indicate that it has been shortened.

  // Return Statement: The function returns the truncated string with the ellipsis if the original string length exceeds n, or it returns the original string if it is shorter than or equal to n.
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="content">
        <h1 className="title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="upperbuttons">
          <button className="upperbutton play">Play</button>
          <button className="upperbutton button">List</button>
        </div>
        <h1 className="description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="fade_bottom" />
    </div>
  );
};

export default Banner;

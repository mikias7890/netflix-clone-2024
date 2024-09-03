import React, { useEffect, useState } from "react";
import axios from "../utility/axios";
import { request } from "../utility/request";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(request.fetchNetflixPopular);
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
      <div>
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div>
          <button>Play</button>
          <button>List</button>
        </div>
        {/* <h1>{truncate(movie?.overview, 150)}</h1> */}
      </div>
      <div />
    </div>
  );
};

export default Banner;

import React from "react";
import Row from "../singlerow/Row";
import request from "../../utility/request";

function Rowlists() {
  return (
    <>
      <Row
        title="NetflixPopular"
        fetchurl={request.fetchNetflixPopular}
        LargeRow={true}
      />
      <Row title="Trending" fetchurl={request.fetchTrending} />
      <Row title="Actionmovies" fetchurl={request.fetchactionmovies} />
      <Row title="Comedymovies" fetchurl={request.fetchComedymovies} />
      <Row title="HorrorMovies" fetchurl={request.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchurl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={request.fetchDocumentaries} />
      <Row title="Topratedmovies" fetchurl={request.fetchTopratedmovies} />
    </>
  );
}

export default Rowlists;

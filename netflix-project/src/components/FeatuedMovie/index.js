import React from "react";
import { FeaturedInfo, FeaturedMovieContainer, GoesBlack } from "./styles";
import Header from "../Header/index";

const FeaturedMovie = ({ item, blackHeader }) => {
  console.log(item.genres)
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  return (
    <FeaturedMovieContainer
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        overflow: "hidden",
      }}
    >
      <GoesBlack>
        <div className="goesBlackHorizontal">
          <Header blackHeader={blackHeader} />

          <FeaturedInfo>
            <h1>{item.original_name}</h1>
            <div
              className="featured-info"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ color: "#419873" }}>{item.vote_average} pontos</div>
              <div>{firstDate.getFullYear()}</div>
              <div>
                {item.number_of_seasons} temporada
                {item.number_of_seasons !== 1 ? "s" : ""}
              </div>
            </div>

            <div className="featured-overview">
              <p>{item.overview}</p>
            </div>
            <div className="featured-buttons">
              <a href={`/watch/${item.id}`}> ► Assistir</a>
              <a
                href={`/watch/${item.id}`}
                style={{ backgroundColor: "#333", color: "#f3f3f3" }}
              >
                + Minha Lista
              </a>
            </div>
            <div
              className="featured-genres"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <strong>Gêneros: </strong>
              {genres.join(", ")}
            </div>
          </FeaturedInfo>
        </div>
      </GoesBlack>
    </FeaturedMovieContainer>
  );
};

export default FeaturedMovie;

import React, { useEffect, useState } from "react";
import { MovieRowList, MovieRowContainer } from "./styles";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRigthArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 270;

    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 52;
    }
    setScrollX(x);
  };

  return (
    <MovieRowContainer>
      <h2>{title}</h2>
      <div className="movieRow-left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon
          style={{
            fontSize: 50,
          }}
        />
      </div>
      <div className="movieRow-right" onClick={handleRigthArrow}>
        <NavigateNextIcon
          style={{
            fontSize: 50,
          }}
        />
      </div>
      {isMobile ? (
        <>
          <MovieRowList
            style={{
              marginLeft: scrollX,
              width: "100%",
            }}
          >
            {items.results.length > 0 &&
              items.results.map((item) => (
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  alt={item.original_title}
                  key={Math.random()}
                />
              ))}
          </MovieRowList>
        </>
      ) : (
        <>
          <MovieRowList
            style={{
              marginLeft: scrollX,
              width: items.results.length * 270,
            }}
          >
            {items.results.length > 0 &&
              items.results.map((item) => (
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                  key={Math.random()}
                />
              ))}
          </MovieRowList>
        </>
      )}
    </MovieRowContainer>
  );
};

export default MovieRow;

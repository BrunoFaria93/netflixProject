import React, { useEffect, useState } from "react";
import api from "../../services/MovieAPI";
import MovieRow from "../../components/MovieRow";
import FeaturedMovie from "../../components/FeatuedMovie";
import { useUser } from "../../providers/user";
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion";
import notFound from "../../assets/images/notfound.svg";
import BasicModal from "./BasicModal";
const Dashboard = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const { token } = useUser();
  const object404 = {
    first_air_date: 2021,
    original_name: "O Livro de Boba Fett",
    overview:
      "Uma emocionante aventura Star Wars que encontra o lendário caçador de recompensas Boba Fett e o mercenário Fennec Shand explorando o submundo da Galáxia quando retornam às areias de Tatooine para reivindicar o território antes governado por Jabba, o Hutt e seu sindicato do crime",
    backdrop_path: "/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg",
    number_of_seasons: 1,
    vote_average: 8.7,
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Adventure" },
      { id: 3, name: "Sci-Fi" },
      { id: 4, name: "Fantasy" },
    ],
  };

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await api.getHomeList();
      setMovieList(list);

      // Pegando o Featured
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );
      let chosen = originals[0].items.results[randomChosen];

      let chosenInfo = await api.getMovieInfo(chosen.id, "tv");
      if (chosenInfo.backdrop_path !== null) {
        setFeaturedData(chosenInfo);
      }
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <motion.div
      className="form-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        {featuredData ? (
          <>
            <FeaturedMovie item={featuredData} blackHeader={blackHeader} />

            <section className="lists">
              {movieList.map((item) => (
                <MovieRow
                  key={Math.random()}
                  title={item.title}
                  items={item.items}
                />
              ))}
            </section>

            <footer>
              Feito com &nbsp;
              <span role="img" aria-label="coração" style={{ color: "red" }}>
                ❤️ &nbsp;
              </span>
              por Bruno Faria
              <br />
              Direitos de imagem para Netflix
              <br />
              Dados pegos do site Themoviedb.org
            </footer>
          </>
        ) : (
          <>
            <motion.div
              className="form-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <FeaturedMovie item={object404} blackHeader={blackHeader} />

              <section className="lists">
                {movieList.map((item) => (
                  <MovieRow
                    key={Math.random()}
                    title={item.title}
                    items={item.items}
                  />
                ))}
              </section>
              <footer>
                Feito com &nbsp;
                <span role="img" aria-label="coração" style={{ color: "red" }}>
                  ❤️ &nbsp;
                </span>
                por Bruno Faria
                <br />
                Direitos de imagem para Netflix
                <br />
                Dados pegos do site Themoviedb.org
              </footer>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};
export default Dashboard;

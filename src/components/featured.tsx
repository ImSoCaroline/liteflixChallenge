import { useState, useEffect } from "react";
import { getMovies, Movie } from "../pages/api/tmdbApi";

import Loader from "./loader";
import MovieCard from "./movieCard";

import styles from "@./styles/MoviesList.module.scss";

export default function Featured() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await getMovies();
        setMovies(movies);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <section className={styles.moviesList}>
      { isLoading ? <Loader isLoading /> : movies.slice(1, 5).map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </section>
  );
}

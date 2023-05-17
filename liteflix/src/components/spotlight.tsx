import { useState, useEffect } from "react";
import { Movie, getNowPlayingMovies } from "@./pages/api/tmdbApi.ts";
import Image from "next/image";
import Button from "./button";

import styles from "@./styles/Spotlight.module.scss";

export default function Spotlight() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);


  useEffect(() => {
    async function fetchMovie() {
      try {
        const movies = await getNowPlayingMovies();
        setMovie(movies[0]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovie();
  }, []);

  if (!movie) {
    return <p>Loading...</p>;
  }
  return (
    <section className={styles.spotlight}>
      <div className={styles.spotlight__backdrop}>
        <div className={styles.spotlight__gradient}/>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          quality={80}
          priority
          onLoad={() => setImageLoaded(true)}
          onLoadingComplete={() => setImageLoaded(true)}
          style={{ filter: imageLoaded ? 'none' : 'blur(10px)', objectFit:'cover' }}
        />
      </div>
      <div className={styles.spotlight__content}>
        <div className={styles.spotlight__info}>
          <h1 className={styles.spotlight__showTitle}>{movie.title}</h1>
          <h5 className={styles.spotlight__author}>Original de <span className="bold">Liteflix</span></h5>
        </div>
        <div className={styles.spotlight__buttonContainer}>
          <Button className={'dark'}><p>Reproducir</p></Button>
          <Button className={'border'}><span className={styles.spotlight__icon} /><p>Mi lista</p></Button>
        </div>
      </div>
    </section>
  );
}

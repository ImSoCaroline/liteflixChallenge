import { useState } from "react";
import Image from "next/image";

import styles from "@./styles/MovieCard.module.scss";

type MovieCardProps = {
  movie: any;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.movie} onClick={handleClick}>
      <div className={`${styles.movie__gradient} ${isActive && styles.movie__active}`} />
      <Image
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
            : `${movie.image}`
        }
        alt={movie.title}
        width={327}
        height={172}
        style={{ objectFit:'cover' }}
      />
      <div className={`${styles.movie__title} ${isActive && styles.movie__active}`}>
        <div className={styles.movie__play} />
        <h6>{movie.title}</h6>
      </div>
      {movie.vote_average && (
        <div className={`${styles.movie__info} ${isActive && styles.movie__active}`}>
          <div className={styles.movie__rating}>
            <div className={styles.movie__star} />
            <p>{movie.vote_average}</p>
          </div>
          <div className={styles.movie__year}>
            <p>{movie.release_date.slice(0,4)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import Image from "next/image";
import { isMobileDevice } from "@./utils/browserUtils";

import styles from "@./styles/MovieCard.module.scss";

type MovieCardProps = {
  movie: any;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const [isActive, setIsActive] = useState(false);
  const isMobile = isMobileDevice();

  const handleClick = () => {
    setIsActive(!isActive);
  }

  const active = isMobile && isActive;

  return (
    <div className={`${styles.movie} ${active && styles.movie__active}`} onClick={handleClick}>
      <div className={styles.movie__gradient} />
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
      <div className={styles.movie__title}>
        <div className={styles.movie__play} />
        <h6>{movie.title}</h6>
      </div>
      {movie.vote_average && (
        <div className={styles.movie__info}>
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

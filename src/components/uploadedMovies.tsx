import { useState } from "react";
import MovieCard from "./movieCard";
import Button from "./button";
import Modal from "./modal";
import Upload from "./upload";

import styles from "@./styles/MoviesList.module.scss";

export default function UploadedMovies() {
  const [isModalOpen, setModalOpen] = useState(false);
  const storedImage = localStorage.getItem('image');
  const storedTitle = localStorage.getItem('title');
  const storedMovie = {
    image: storedImage,
    title: storedTitle,
    id: storedTitle
  }
  
  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className={styles.moviesList}>
      <div className={styles.moviesList__moviesContainer}>
        {storedImage ? (
          <MovieCard movie={storedMovie} key={storedMovie.id} />
        ) : (
          <div className={styles.moviesList__messageContainer}>
            <p className={styles.moviesList__message}>No hay peliculas!</p>
            <Button className="light" onClick={openModal}><p>Agregar película</p></Button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <Upload onClose={closeModal} />
            </Modal>
          </div>
        )}
      </div>
    </section>
  );
}

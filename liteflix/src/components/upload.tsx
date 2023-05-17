import { ChangeEvent, useState, useEffect } from "react";
import Button from "./button";
import styles from "@./styles/Upload.module.scss";

type uploadProps = {
  onClose: () => void;
};

export default function Upload({ onClose }: uploadProps) {
  const [movie, setMovie] = useState<string | null>(null);
  const [movieTitle, setMovieTitle] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [status, setStatus] = useState<
    "pending" | "loading" | "error" | "success" | "submitted"
  >("pending");

  useEffect(() => {
    const storedImage = localStorage.getItem('image');
    const storedText = localStorage.getItem('text');

    if (storedImage) {
      setMovie(storedImage);
    }

    if (storedText) {
      setMovieTitle(storedText);
    }
  }, []);

  const handleMovieChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setStatus("loading");
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        const movieData = fileReader.result as string;
        setMovie(movieData);
        setStatus("success");
      };
      fileReader.onerror = () => {
        setStatus("error");
      };
      fileReader.onprogress = (e: ProgressEvent<FileReader>) => {
        const { loaded, total } = e;
        setProgress((loaded / total) * 100);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleMovieTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setMovieTitle(newTitle);
  };
  

  const handleCancel = () => {
    setStatus("pending");
    setProgress(0);
  };

  const handleRetry = () => {
    setStatus("pending");
    setProgress(0);
    handleSubmit();
  };

  const handleSubmit = () => {
    if (!movie || !movieTitle || status !== "success") {
      return;
    }

    localStorage.setItem('image', movie || '');
    localStorage.setItem('title', movieTitle);
    setStatus("submitted");
    setProgress(0);
  }

  const isSubmitDisabled =
    !movie || !movieTitle || movieTitle === "Título" || status !== "success";

    return status !== "submitted" ? (
      <div className={styles.upload}>
        <h4 className={styles.upload__title}>Agregar pelicula</h4>
        {status === "loading" ? (
          <div className={styles.upload__fileContainer}>
            <progress
              className={styles.upload__progress}
              value={progress}
              max={100}
            />
            <Button className="cancel" onClick={handleCancel}>
              Cancelar
            </Button>
          </div>
        ) : status === "error" ? (
          <div className={styles.upload__fileContainer}>
            <p
              className={`${
                styles.upload__message} ${styles.upload__messageError
              }`}
            >
              ¡Error! No se pudo cargar la película
            </p>
            <Button className="retry" onClick={handleRetry}>
              Reintentar
            </Button>
          </div>
        ) : status === "success" ? (
          <div className={styles.upload__fileContainer}>
            <p
              className={`${
                styles.upload__message} ${styles.upload__messageComplete
              }`}
            >
              100% Cargado
            </p>
            <progress value={progress} max={100} />
            <p className={styles.upload__ready}>¡Listo!</p>
          </div>
        ) : (
          <div className={styles.upload__file}>
            <input
              id="file"
              type="file"
              accept="image/*"
              onChange={handleMovieChange}
            />
            <label className={styles.upload__label} htmlFor="file">
              <span className={styles.upload__icon} />
              Agrega un archivo
            </label>
          </div>
        )}
        <input
          type="text"
          placeholder="Título"
          onChange={handleMovieTitleChange}
        />
        <Button
          className="light"
          disabled={isSubmitDisabled}
          onClick={handleSubmit}
        >
          <p>Subir pelicula</p>
        </Button>
        <Button className={`${"border"} ${styles.exit}`} onClick={() => onClose()}>
          <p>Salir</p>
        </Button>
      </div>
    ) : (
      <div className={styles.uploaded}>
        <div className={styles.messageContainer}>
          <h3 className={styles.messageContainer__title}>¡Felicitaciones!</h3>
          <p className={styles.messageContainer__message}>
            {movieTitle} fue correctamente subida.
          </p>
        </div>
        <Button className="light" onClick={() => onClose()}>
          <p>Ir a Home</p>
        </Button>
      </div>
    );
  }

import { useEffect, useState } from "react";
import Modal from "./modal";
import Upload from "./upload";
import styles from "@./styles/Menu.module.scss";

type MenuProps = {
  onClick: () => void;
  isOpen: boolean;
}

export default function Menu({ onClick, isOpen }: MenuProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const closeMenu = () => {
    onClick();
    setModalOpen(false);
    setIsMounted(!isMounted);
    document.body.style.overflow = '';
  }

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
    <div className={styles.menu}>
      <div className={styles.menu__hamburger} onClick={closeMenu}>
        {!isOpen || isModalOpen ? (
          <span className={`${styles.menu__open} ${styles.menu__icon}`} />
        ) : (
          <span className={`${styles.menu__close} ${styles.menu__icon}`} />
        )}
      </div>
      {isOpen && (
        <div className={styles.menu__optionsContainer}>
          <div className={styles.menu__options}>
            <p>Inicio</p>
            <p>Series</p>
            <p>Peliculas</p>
            <p>Agregadas recientemente</p>
            <p>Populares</p>
            <p>Mis peliculas</p>
            <p>Mi lista</p>
            <p onClick={openModal}>Agregar pelicula</p>
            <p>Cerrar sesion</p>
          </div>
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Upload onClose={closeModal} />
      </Modal>
    </div>
  );
}

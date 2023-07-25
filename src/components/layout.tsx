import { ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./navbar";
import Modal from "./modal";
import Upload from "./upload";
import styles from "@./styles/Layout.module.scss";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image src="/LITEFLIX.png" alt="logo" width={113} height={25} />
        </Link>
        <div className={styles.addMovie}>
          <span className={styles.addMovie__icon} />
          <p className={styles.addMovie__text} onClick={openModal}>
            Agregar pelicula
          </p>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Upload onClose={closeModal} />
        </Modal>
      </div>
      <Navbar onClick={toggleMenu} isOpen={isOpen} />
      {!isOpen && <main className={styles.layout__main}>{children}</main>}
    </div>
  );
}

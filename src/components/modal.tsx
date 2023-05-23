import { ReactNode, useEffect, useState } from 'react';
import styles from '@./styles/Modal.module.scss';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isOpen) {
    return null;
  }

  const closeModal = () => {
    onClose();
    document.body.style.overflow = '';
  };

  return (
    <>
      <div className={styles.overlay} onClick={closeModal} />
      <div className={styles.modal}>
      <div className={styles.closeButton} onClick={closeModal}/>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import Image from "next/image";
import Menu from "./menu";
import styles from "@./styles/Navbar.module.scss";

type NavbarProps = {
  onClick: () => void;
  isOpen: boolean;
}

export default function Navbar({ onClick, isOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${ isOpen || isScrolled && styles.menuOpen} ${styles.nav}`}>
      <Menu onClick={onClick} isOpen={isOpen} />
        <span className={styles.nav__bellIcon} />
      <div className={styles.nav__userIcon}>
        <Image src="/assets/user.svg" alt="User profile" width={42} height={42} />
      </div>
    </nav>
  );
}

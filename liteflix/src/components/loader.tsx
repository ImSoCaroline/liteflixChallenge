import styles from "@./styles/Loader.module.scss";

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
          <div className={styles.loader__spinner}></div>
        </div>
      )}
    </>
  );
};

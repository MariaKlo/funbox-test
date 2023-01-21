import styles from "./styles.module.css";

export const Description = ({ item, taste, onClick, quantity }) => {
  return (
    <div>
      {item >= 1 && taste === "рыбой" ? (
        <p className={styles.selectedState}>
          Головы щучьи с чесноком да свежая сёмгушка.
        </p>
      ) : item >= 1 && taste === "курой" ? (
        <p className={styles.selectedState}>
          Филе из цыплят с трюфелями в бульоне.
        </p>
      ) : item >= 1 && taste === "фуа-гра" ? (
        <p className={styles.selectedState}>
          Печень утки разварная с артишоками.
        </p>
      ) : item === 0 && quantity === 0 ? (
        <p className={styles.disabledState}>Печалька, с {taste} закончился.</p>
      ) : (
        <p className={styles.link}>
          Чего сидишь? Порадуй котэ, <span onClick={onClick}>купи.</span>
        </p>
      )}
    </div>
  );
};

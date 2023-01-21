import styles from "./styles.module.css";
import Cat from "./Photo.png";
import { useState } from "react";
import { Description } from "../Description/Description";

export const Item = ({ taste, portions, mice, weight, quantity }) => {
  const [item, setItem] = useState(0);
  const [showHover, setShowHover] = useState(false);

  return (
    <div>
      <div
        className={
          item >= 1
            ? styles.selected
            : quantity === 0
            ? styles.disabled
            : styles.root
        }
        onClick={() => {
          setItem(quantity > 0 && item === 0 ? item + 1 : item - 1);
        }}
        onMouseEnter={() => {
          setShowHover(false);
        }}
        onMouseLeave={() => {
          setShowHover(quantity > 0 ? true : false);
        }}
      >
        <div className={portions === 100 ? styles.deluxePadding : styles.wrap}>
          {item >= 1 && showHover ? (
            <p className={styles.hoverDescription}>Котэ не одобряет?</p>
          ) : (
            <p className={styles.description}>Сказочное заморское яство</p>
          )}
          <h2 className={styles.title}>Нямушка</h2>
          <h3 className={styles.taste}>с {taste}</h3>
          <p className={styles.portions}>{portions} порций</p>
          <p className={styles.mice}>{mice} в подарок</p>
          {portions === 100 && (
            <p className={styles.deluxe}>заказчик доволен.</p>
          )}
        </div>
        <div className={styles.wrapper}>
          <img src={Cat} alt="A cat" className={styles.img} />
          <div
            className={
              item >= 1
                ? styles.selectedWeight
                : quantity === 0
                ? styles.disabledWeight
                : styles.weight
            }
          >
            <div>{weight}</div>
            <div className={styles.measurement}>кг</div>
          </div>
        </div>
      </div>
      <div className={styles.state}>
        <Description
          item={item}
          taste={taste}
          quantity={quantity}
          onClick={() => {
            setItem(quantity > 0 && item === 0 ? item + 1 : item - 1);
          }}
        />
      </div>
    </div>
  );
};

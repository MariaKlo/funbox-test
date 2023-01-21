import { Item } from "../Item/Item";
import styles from "./styles.module.css";

export const Items = ({ data }) => {
  return (
    <div className={styles.root}>
      {Array(3)
        .fill()
        .map((_, index) => (
          <Item
            key={index}
            taste={data[index].taste}
            portions={data[index].portions}
            mice={data[index].mice}
            weight={data[index].weight}
            quantity={data[index].quantity}
          />
        ))}
    </div>
  );
};

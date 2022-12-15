import {useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";
import {ProductButtonProps} from "../interfaces/interfaces";

export const ProductButtons = ({classNmae, style}:ProductButtonProps) => {

    const {increaseBy, counter} = useContext(ProductContext);

    return (
        <div className={`${styles.buttonsContainer} ${classNmae}`} style={style}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>+</button>
        </div>
    )
}

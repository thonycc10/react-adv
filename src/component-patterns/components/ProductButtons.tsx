import {useCallback, useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";
import {ProductButtonProps} from "../interfaces/interfaces";

export const ProductButtons = ({classNmae, style}:ProductButtonProps) => {

    // TODO maxCount
    const {increaseBy, counter, maxCount} = useContext(ProductContext);

    // TODO isMaxReached = useCallback, [counter, maxCount]
    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount]
    );

    return (
        <div className={`${styles.buttonsContainer} ${classNmae}`} style={style}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            {/*TODO utiliza este medio de if para los style*/}
            <button onClick={() => increaseBy(1)} className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}>+</button>
        </div>
    )
}

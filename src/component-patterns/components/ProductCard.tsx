import styles from '../styles/styles.module.css'
import {useProduct} from "../hooks/useProduct";
import {createContext} from "react";
import {ProductCardProps, ProductContextProps} from "../interfaces/interfaces";

// captura los valores enviados del padre a los hijos
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({children, product, className, style, onChange, value}: ProductCardProps) => {

    // custom hooks
    const {counter, increaseBy} = useProduct({onChange, product, value});

  return (
      <Provider value={{
          counter,
          increaseBy,
          product
      }}>
          <div className={`${styles.productCard} ${className}`} style={style}>
              {children}
          </div>
      </Provider>
  )
}

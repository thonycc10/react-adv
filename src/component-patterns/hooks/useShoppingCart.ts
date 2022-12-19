import {useState} from "react";
import {Product, ProductInCart} from "../interfaces/interfaces";
import {products} from "../data/products";

export const useShoppingCart = () => {
    // esto ayuda a sincronizar los useState
    const [shoppingCart, setShoppingCart ] = useState<{[key:string]: ProductInCart}>({});

    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
        setShoppingCart( oldShoppingCart => {
            console.log(oldShoppingCart);

            const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0};
            if ( Math.max(productInCart.count + count, 0) > 0 ) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            const{[product.id]: toDelete, ...rest } = oldShoppingCart;
            // console.log({toDelete});
            return rest;

            // ejmplo 1 de buena practica
            // if (count === 0) {
            //     // destructuracion eliminar un objeto
            //     const{[product.id]: toDelete, ...rest } = oldShoppingCart;
            //     // console.log({toDelete});
            //     return rest;
            // }
            //
            // return {
            //     ...oldShoppingCart,
            //     [product.id]: {...product, count}
            // }
        })
    }

    return {
        products,
        shoppingCart,
        onProductCountChange
    }
}

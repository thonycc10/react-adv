import {useEffect, useRef, useState} from "react";
import {onChangeArgs, Product} from "../interfaces/interfaces";

export interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs ) => void;
    value?: number;
}

export const useProduct = ({onChange, product, value = 0}: useProductArgs) => {
    // useState es como el inicio del valor si necesitas capturar el useState al cabiar utiliza UserEffect
    const [counter, setCounter] = useState(value)

    const isControlled = useRef( !!onChange );

    // counter
    const increaseBy = (value: number) => {

        console.log(isControlled);

        if ( isControlled.current ) {
            // utilizar ! siempre y cuando le digas al type que si o si van a enviar ese valor
            return onChange!({count: value, product});
        }

        const newValue = Math.max(counter + value, 0)

        setCounter(newValue)

        onChange && onChange({count: newValue, product});
    }

    useEffect( () => {
        setCounter(value);
    }, [value])

    return {
        counter,
        increaseBy
    }
}

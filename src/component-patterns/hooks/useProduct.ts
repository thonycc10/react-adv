import {useEffect, useRef, useState} from "react";
import {InitialValues, onChangeArgs, Product} from "../interfaces/interfaces";

export interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {
    // useState es como el inicio del valor si necesitas capturar el useState al cabiar utiliza UserEffect
    // utilizar el ? para coloclar opcionar para validar si viene valor en initialvalues
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    // const isControlled = useRef( !!onChange );
    const isMounted = useRef( false );

    console.log(initialValues?.count)

    // counter
    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0)
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }

        setCounter(newValue)
        onChange && onChange({count: newValue, product});
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect( () => {
        if ( !isMounted.current ) return;
        setCounter( initialValues?.count|| value );
    }, [ value ])

    useEffect( () => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset
    }
}

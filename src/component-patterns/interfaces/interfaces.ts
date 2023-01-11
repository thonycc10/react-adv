import {CSSProperties} from "react";

export interface ProductCardProps {
    className?: string;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) =>  JSX.Element;
    product: Product;
    // extensible style
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}
export interface onChangeArgs {
    product: Product;
    count: number;
}


export interface ProductTitleProps {
    className?: string;
    title?: string;
    style?: CSSProperties;

}

export interface Product {
    id: string,
    img?: string
    title: string,
}

export interface ProductImageProps {
    className?: string;
    img?: string;
    style?: CSSProperties;

}

export interface ProductButtonProps {
    classNmae?: string;
    style?: CSSProperties;

}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    maxCount?: number;
    product: Product;
}

export interface ProductCardHOCProps {
    ({children, product}: ProductCardProps): JSX.Element,
    Title:  (Props: ProductTitleProps) => JSX.Element
    Imagen: (Props: ProductImageProps) => JSX.Element
    Button: (Props: ProductButtonProps) => JSX.Element
}

export interface ProductInCart extends Product {
    count: number
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}

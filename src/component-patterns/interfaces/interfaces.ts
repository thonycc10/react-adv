import {CSSProperties, ReactElement} from "react";

export interface ProductCardProps {
    className?: string;
    children?: ReactElement | ReactElement[];
    product: Product;
    // extensible style
    style?: CSSProperties;

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
    counter: number,
    increaseBy: (value: number) => void,
    product: Product
}

export interface ProductCardHOCProps {
    ({children, product}: ProductCardProps): JSX.Element,
    Title:  (Props: ProductTitleProps) => JSX.Element
    Imagen: (Props: ProductImageProps) => JSX.Element
    Button: (Props: ProductButtonProps) => JSX.Element
}


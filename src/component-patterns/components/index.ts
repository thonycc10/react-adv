import {ProductTitle} from "./ProductTitle";
import {ProductImage} from "./ProductImage";
import {ProductButtons} from "./ProductButtons";
import {ProductCard as ProductCardHOC} from "./ProductCard";
import {ProductCardHOCProps} from "../interfaces/interfaces";

export {ProductImage} from "./ProductImage";
export {ProductTitle} from "./ProductTitle";
export {ProductButtons} from "./ProductButtons";

// crear su interface para validar y respetar las variables
export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Imagen: ProductImage,
    Button: ProductButtons
});

export default ProductCard;

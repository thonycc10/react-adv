import {lazy, LazyExoticComponent} from "react";

type JSXComponent = () => JSX.Element;
interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const lazy1 = lazy(() => import(/* webpackChunckName: "LazyPage1" */ '../lazyload/pages/lazyPage1'));
const lazy2 = lazy(() => import(/* webpackChunckName: "LazyPage2" */ '../lazyload/pages/lazyPage2'));
const lazy3 = lazy(() => import(/* webpackChunckName: "LazyPage3" */ '../lazyload/pages/lazyPage3'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: lazy3,
        name: 'Lazy-3'
    }
]

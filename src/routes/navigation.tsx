import {BrowserRouter, Navigate, NavLink, Route, Routes} from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';
import {Suspense} from "react";

export const Navigation = () => {
    return (
        // TODO para colocar un metodo de carga cambiar el false para colocar un loading
        // <Suspense fallback={false}>
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        {/*TODO crear navLink dinamicos*/}
                        {
                            routes.map(({to, name}) => (
                                <li key={to}>
                                    <NavLink to={to} className={({ isActive}) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <Routes>
                    {/*TODO al utilizar .map recordar usar el key*/}
                    {
                        routes.map(({to, path, Component}) => (
                            <Route key={to} path={path} element={ <Component /> } />
                        ))
                    }
                    <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
                </Routes>
            </div>
        </BrowserRouter>
        </Suspense>
    )
}

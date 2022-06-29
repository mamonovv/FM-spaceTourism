import React from 'react';
import {routes} from "../routes/routes";
import {Navigate, Route, Routes} from "react-router-dom";


const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route path={route.path} element={route.component} key={route.path}/>
            ))}
            <Route path='*' element={<Navigate replace to="/home" />}/>
        </Routes>
    );
};

export default AppRouter;

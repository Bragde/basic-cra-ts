import React from 'react';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Subroute } from './Subroute';

export const Subroutes = () => {
    const match = useRouteMatch();

    return (
        <>
            <h2>THIS IS THE SUBROUTES PAGE</h2>
            <p>
                Select a subroute bellow and it will be passed as a <b>route parameter</b> to the child component
            </p>
            <ul className="Topics-list">
                <li>
                    <NavLink to={`${match.url}/Subroute One`} activeClassName="activeNavLink">
                        Subroute One
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${match.url}/Subroute Two`} activeClassName="activeNavLink">
                        Subroute Two
                    </NavLink>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:subrouteId`}>
                    <Subroute />
                </Route>
            </Switch>
        </>
    );
};

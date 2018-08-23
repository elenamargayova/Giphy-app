import React from 'react';
import {NavLink } from 'react-router-dom';

const Navigation=()=>(
   <nav>
        <div className="nav-wrapper indigo lighten-2">
            <h3 className="brand-logo right">MY GIPHY APP</h3>
            <NavLink  className="center active navlink" to="/">Home</NavLink>
            <NavLink className="center navlink" to="/random">Random</NavLink>
        </div>
    </nav>
);

export default Navigation;




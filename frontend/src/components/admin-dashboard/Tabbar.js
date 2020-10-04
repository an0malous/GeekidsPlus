import React from 'react';
import { NavLink, Link} from 'react-router-dom';

export const Tabbar = ({tabs, base, classNames}) => {

    return (
             tabs.map(tab=>{
                 return (
                 <NavLink to={`${base}${tab.route}`} className={classNames} activeClassName="active">{tab.name}</NavLink>
             )})
       
    )
}
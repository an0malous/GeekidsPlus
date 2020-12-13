import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { withRouter } from 'react-router'

const Tab = ({items}) => {
    const { url } = useRouteMatch();
 
    return (
             items.map((item)=>{
                 return (
                 <NavLink to={`${url}/${item}`} className="item nav-link" activeClassName="active">{item.toUpperCase()}</NavLink>
             )})
       
    )
}

export default withRouter(Tab);
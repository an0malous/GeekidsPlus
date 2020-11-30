import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { withRouter } from 'react-router'

const Tab = ({match, location: { pathname }, items}) => {
    const { url, path } = useRouteMatch();
    console.log(match)
    return (
             items.map((item)=>{
                 return (
                 <NavLink to={`${path}/${item}`} className="item nav-link" activeClassName="active">{item.toUpperCase()}</NavLink>
             )})
       
    )
}

export default withRouter(Tab);
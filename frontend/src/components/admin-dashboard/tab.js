import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'

const Tab = ({match, items}) => {
    console.log(match)
    return (
             items.map((item)=>{
                 return (
                 <NavLink to={`/${item}`} className="item nav-link" activeClassName="active">{item.toUpperCase()}</NavLink>
             )})
       
    )
}

export default withRouter(Tab);
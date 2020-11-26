import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import { withRouter } from 'react-router'

const Tab = ({match, items}) => {

    return (
             items.map(item=>{
                 return (
                 <NavLink to={`${match.url}/${item}`} className="item nav-link" activeClassName="active">{item.toUpperCase()}</NavLink>
             )})
       
    )
}

export default withRouter(Tab);
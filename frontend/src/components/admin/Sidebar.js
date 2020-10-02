import React from 'react';
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div class="four wide column">
            <div class="ui vertical fluid tabular menu">
                <Link to="/admin/cards" className="item nav-link active">Cards</Link>
                <Link to="/admin/users" className="item nav-link">Users</Link>
                <Link to="/admin/announcments" className="item nav-link">Announcments</Link>
                <Link to="/admin/scoreboard" className="item nav-link">Scoreboard</Link>
            </div>
        </div>
      
    )
}
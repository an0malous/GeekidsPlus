import React from 'react';
import { Link } from 'react-router-dom';

export const Tabbar = (props) => {
    return (
        <div>
             <div className="ui tabular menu">
                        <Link className="item active" to="/admin/cards/">All Cards</Link>
                        <Link className="item" to="/admin/cards/add">Add a Card</Link>
                        <a className="item">
                            All Decks
                        </a>
                        <Link className="item" to="/admin/decks/add">Add a Deck</Link>
                </div>
        </div>
    )
}
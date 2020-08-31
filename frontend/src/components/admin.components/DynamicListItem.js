import React from 'react'
import { Link } from 'react-router-dom'

export const DynamicListItem = ({ mappedItem, deleteItem }) => {
    return (
        <tr>
            <td><Link to={`/admin/cards/edit/${mappedItem._id}`}>{mappedItem.name}</Link></td>
            <td>{new Date(mappedItem.createdAt).toLocaleDateString()} at {new Date(mappedItem.createdAt).toLocaleTimeString()}</td>
            <td>{new Date(mappedItem.updatedAt).toLocaleDateString()} at {new Date(mappedItem.updatedAt).toLocaleTimeString()}</td>
            <td>
                <a onClick={()=>{deleteItem(mappedItem._id)}}>Delete</a>
            </td>
        </tr>
    )
}

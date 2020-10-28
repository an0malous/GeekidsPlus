import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';
import auth from './auth';

export const Navbar = ({ username, loggedIn, updateUser, role }) => {
   
   const [activeItem, setActiveItem] = useState('')
    const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='flashCards'
          active={activeItem === 'flashCards'}
          onClick={handleItemClick}
        >
          Flash Cards
        </Menu.Item>

        <Menu.Item
          name='phonics'
          active={activeItem === 'phonics'}
          onClick={handleItemClick}
        >
          Phonics
          </Menu.Item>
          { updateUser ?
          (
            
        <Menu.Item position="right"
        name="Logout" >
        {`Welcome back ${username}`}
        </Menu.Item>) :
        (<Menu.Item position="right"
        name="Login" >
        </Menu.Item>)
        }
       
      </Menu>
    )
    }


   
    
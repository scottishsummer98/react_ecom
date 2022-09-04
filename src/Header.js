import React from 'react'
import './Header.css'
import { Search, ShoppingBasket, SupervisorAccount } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function Header() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="../Logo.png" alt="Ecom Logo" />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <Search className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login">
          <div className="header_nav_option">
            <SupervisorAccount className="" />
            <span className="header_optionLine">My Account</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header_nav_option">
            <ShoppingBasket className="" />
            <span className="header_optionLine">My Cart</span>
          </div>
        </Link>
        <div className="header_optionBasket">
          <span className="header_optionLine header_basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header

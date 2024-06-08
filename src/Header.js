import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import image from './images/icons8-search-50.png'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket}] = useStateValue()

  console.log(basket)

  return (
    <nav className = 'header'>
      <Link to = '/'>
      <img
        className = 'header_logo'
        src = 'http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt = 'images'
        />
      </Link>
      <div className='header_search'>
      <input type = 'text' className = 'header_searchInput' />
      <img className = 'icon' src = {image} alt = 'images'/>
      </div>

      <div className = "header_nav">

        <Link to = '/login' className = 'header_link'>
        <div className = 'header_option'>
          <span className = 'header_optionLineOne'>Hello Riju</span>
          <span className = 'header_optionLineTwo'>Sign In</span>
        </div>
        </Link>

        <Link to = '/' className = 'header_link'>
        <div className = 'header_option'>
          <span className = 'header_optionLineOne'>Returns</span>
          <span className = 'header_optionLineTwo'>Orders</span>
        </div>
        </Link>

        <Link to = '/' className = 'header_link'>
        <div className = 'header_option'>
          <span className = 'header_optionLineOne'>Your</span>
          <span className = 'header_optionLineTwo'>Prime</span>
        </div>
        </Link>
      </div>

      <Link to = '/checkout' className = 'header_link'>
        <div className = 'header_optionBasket'>
          <ShoppingBasketIcon />
          <span className = 'header_optionLineTwo header_basketCount'>{basket?.length}</span>
        </div>
      </Link>
    </nav>
  )
}

export default Header

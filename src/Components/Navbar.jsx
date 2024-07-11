import React, { useContext } from 'react'
import './Navbar.css'
import arrow_icon from '../../src/assets/arrow_icon.png'
import { CoinContext } from '../Context/Coincontext'

import { Link } from 'react-router-dom'

const Navbar = () => {

  let {setCurrency}  = useContext(CoinContext)

  let currencyHandler = (event)=>{
      switch(event.target.value){
        case 'usd' : setCurrency({
          name: 'usd',
          symbol: '$'
        })
        break;

        case 'inr': setCurrency({
             name: 'inr',
             symbol: '₹'
        })
        break;

        case 'eur': setCurrency({
          name: 'eur',
          symbol: '€'
        })
        break;
        default: setCurrency({
          name: 'inr',
          symbol: '₹'
        })
      }
  }



  return (

    <div className='navbar'>

        <Link to={`/`} ><h3 className='logo'>Crypto Kingdom</h3></Link>
        
        <ul>
            <Link to={`/`} > <li>Home</li> </Link>
            <Link to={`/`} > <li>Features</li> </Link>
            <Link to={`/`} > <li>Pricing</li> </Link>
            <Link to={`/`} > <li>Blogs</li> </Link>

        </ul>

        <div className="nav-right">
             <select name="" id="" onChange={currencyHandler}>
                <option value="inr">INR</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
             </select>
             <button>Sign Up <img src={arrow_icon} ></img> </button>
        </div>

    </div>
  )
}

export default Navbar
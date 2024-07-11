
import React from 'react'
import './Coin.css'

import { useContext,useState,useEffect } from 'react';
import { CoinContext } from '../Context/Coincontext';
import {Link} from 'react-router-dom'

const Coin = () => {

  const {allCoin,currency,displayCoin,setDisplayCoin} = useContext(CoinContext);


  

  console.log(displayCoin);

  return (
    <>
       {
        displayCoin.slice(0,10).map((item,index)=>(
           
          <Link to={`/coins/${item.id}`} className="table-layout" key={index}>
             <p>{item.market_cap_rank}</p>
             <div className='img-block'>
                <img className='symbol' src={item.image} alt="" />
                <p>{item.name} - {item.symbol}
                </p>
             </div>
             <p>{currency.symbol} {item.current_price.toLocaleString()}</p>

             <p className={(item.price_change_percentage_24h>=0 ? 'green' : 'red')}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
             
             <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
          </Link>
          
        ))
       }
    </>
  )
}

export default Coin
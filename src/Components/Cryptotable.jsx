import React from 'react'
import './Cryptotable.css'
import Coin from './Coin'


const Cryptotable = () => {

  
  


  return (

    <div className='crypto-table'>

        <div className='table-layout'>
             <p>#</p>
             <p>Coins</p>
             <p>Prices</p>
             <p style={{
              textAlign: 'center'
             }}>24H Change</p>

             <p style={{
              textAlign: 'right'
             }} className='market-cap'>Market Cap</p>
        </div>

        <div>
           <Coin></Coin>
        </div>

    </div>
  )
}

export default Cryptotable
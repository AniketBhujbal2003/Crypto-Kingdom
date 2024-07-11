import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../Context/Coincontext';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Linechart from '../Components/Linechart';

import './Coin.css'

const Coin = () => {
  
  const {coinId} = useParams();
  const {currency} = useContext(CoinContext);
  const [coinData,setCoinData] = useState([])
  const [historicalData,setHistoricalData] = useState([]);
  
 

  const fetchCoinData =async()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-C5NyCbr4eQmpbsicr4DZpYod'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  }
  

  const fetchHistoricalData =async()=>{

    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-C5NyCbr4eQmpbsicr4DZpYod'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=99&interval=daily`, options)
      .then(response => response.json())
      .then(response => setHistoricalData(response))
      .catch(err => console.error(err));

  }
  
  useEffect(()=>{
     fetchCoinData();
     fetchHistoricalData();
  },[currency])
  
  console.log(coinData);
  console.log(historicalData);
  
if(coinData.length!=0){

  return(
   
  <div className='coin'>
    <div>Coin: {coinId} </div>
    <div className="coin-name">
        <img src={coinData.image.large} alt="" />
        <h2 className='title'>{coinData.name}</h2>
    </div>
    <div className="coin-chart">
        <Linechart historicalData={historicalData}></Linechart>
    </div>
    <div className="coin-info">
        <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
        </ul>
        <ul>
            <li>Current Price</li>
            <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
            <li>Market Cap</li>
            <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
            <li>24 Hour High</li>
            <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
            <li>24 Hour Low</li>
            <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
        </ul>
    </div>
  </div>

  ) 
}
else{
  return(
    <div className='spinner'>
      <div className="spin">

      </div>
    </div>
  )
}

}

export default Coin
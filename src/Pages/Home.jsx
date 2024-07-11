import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import Cryptotable from '../Components/Cryptotable'
import { CoinContext } from '../Context/Coincontext'

const Home = () => {
  
  const {allCoin,setAllCoin,displayCoin,setDisplayCoin} = useContext(CoinContext);

  const [input,setInput] = useState([]);

  const inputHandler=(event)=>{
     let currInput= event.target.value;
     setInput(currInput);
     if(currInput===""){
      setDisplayCoin(allCoin);
     }
  }

  const searchHandler=async(event)=>{
      event.preventDefault();
      const coins = await allCoin.filter((item)=>{
        return item.name.toLowerCase().includes(input.toLowerCase());
      })
      setDisplayCoin(coins);
  }
  
  return (
    <div className='Home'>

        <div className='Hero'>
            <h1>Largest <br /> Crypto MarketPlace</h1>
            <p>Welcome to the world's largest CryptoCurrency Marketplace. Sign up to explore more about cryptos.</p>
            <form action="" onSubmit={searchHandler}>

                <input onChange={inputHandler} list='coinlist' value={input} type="text" placeholder='search crypto curr...'/>
                <datalist id='coinlist'>
                   {allCoin.map((item,index)=>
                     <option value={item.name} key={index}></option>
                   )}
                </datalist>
                <button type='submit'>Search</button>

                
            
            </form>
        </div>
        
        <Cryptotable></Cryptotable>
        
    </div>
  )
}

export default Home
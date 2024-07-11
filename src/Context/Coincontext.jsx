import React from "react";
import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();


export const CoinContextProvider = (props) =>{
      
     const [allCoin,setAllCoin] = useState([]);
     const [displayCoin,setDisplayCoin] = useState([]);

     const [currency,setCurrency] = useState({
        name: "inr",
        symbol: '₹'
     })

     const fetchAllCoin = async()=>{

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': '	CG-C5NyCbr4eQmpbsicr4DZpYod'
            }
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
     }

     useEffect(()=>{
        fetchAllCoin();
     }, [currency]);

     useEffect(()=>{
      setDisplayCoin(allCoin)
    },[allCoin])

     const contextValue={
             allCoin,
             currency,
             setCurrency,
             displayCoin,
             setDisplayCoin

     }
   //   console.log(allCoin);

     return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
     )
}


import { useState, useEffect } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() =>{
        const fetchData = async () => {
        try {
            const res = await fetch(`https://api.frankfurter.app/latest?from=${currency}`);
            const result = await res.json();
            
            setData(result.rates); 

            // console.log(data);
            
        } catch (error) {
            console.error("Error fetching currency data:", error);
        }
    };

    fetchData();
  }, [currency]); 
  console.log(data);
    return data;
}

export default useCurrencyInfo;
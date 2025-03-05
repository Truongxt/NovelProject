import { useEffect, useState } from "react";

function TetsEffect() {
    const [data,setData] = useState([]);
    
   useEffect( () =>{
    fetch('https://dummyjson.com/products')
    .then(repon => repon.json())
    .then(data => setData(data.products))
    
   },[])


    return (
        <div>
               {data.map((item) =>{
                    return (
                        <>
                            <h2>{item.title}</h2>
                            <img src={item.images[0]} alt="" />
                        </>

                    )
               })}
        </div>
    )
}

export default TetsEffect

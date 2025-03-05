import { useMemo, useState } from "react"

function TestUseMemo() {    
    const sum = useMemo(() =>{
        console.log('sum')
        return 1 + 2;
    },[])
    
    const [data,setData] = useState(0);
    console.log(sum)
    return (
        <div>
                    <button onClick={()=>setData(data+1)}>Update Data</button>
        </div>
    )
}

export default TestUseMemo

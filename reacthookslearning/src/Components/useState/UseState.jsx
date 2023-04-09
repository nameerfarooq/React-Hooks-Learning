import React, {useState} from 'react'

function UseState() {
    const [count, setcount] = useState(0)

  return (
<div>
        <button onClick={()=>setcount(count+1)}>
            Plus
        </button>
        <h1>
            {count}
        </h1>
        <button onClick={
            count === 0 ? ()=> setcount(0) : 
            ()=>setcount(count-1)
            }>
            Minus
        </button>
    </div>
  )
}

export default UseState
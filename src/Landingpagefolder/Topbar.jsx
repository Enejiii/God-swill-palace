import React, { useState } from 'react'

function Topbar() {
    const [number, setNumber] = useState(0)

    function increase(){
        setNumber(prev =>{
            if(prev < 100){
                return prev + 1
            }
        })
    }

    // create a function to decrease number

    function decrease(){
       setNumber(prev =>{
        if(prev > 0){
            return prev - 1
        }
       })
    }
  return (
    <div>
        <div>
            <h1>{number}</h1>
        </div>

        <div>
            <button onClick={increase}>+</button>
        </div>
        <div>
            <button onClick={decrease}>-</button>
        </div>
    </div>
  )
}

export default Topbar
import React,{useState, useEffect} from 'react'

function OneMoreUseEffect() {
    const [screensize, setscreensize] = useState(window.screen.width)
    const changesize = ()=>{
        setscreensize(()=>window.innerWidth)
        }
    useEffect(()=>{
        window.addEventListener('resize',changesize)
    })
  return (
    <div>
    the screen width is {screensize}
    </div>
  )
}

export default OneMoreUseEffect
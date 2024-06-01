import React, { useState } from 'react'
const App = () => {


 function getRandomColor(){
    // Generate random values for red, green, and blue components
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
  
    // Construct a CSS color string using the random values
    const randomColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
  
  setColor(randomColor);
  };

function App() {
    const randomColor = getRandomColor();
  
    return (
      <div style={{ backgroundColor: randomColor, width: '100px', height: '100px' }}>
        {/* Display some content with the random color */}
      </div>
    );
  }
  
  const [color,setColor]=useState("grey");


  return (
    <>
      <div className='h-screen w-full' style={{backgroundColor:color}}>

    <div className='text-center text-5xl py-14 font-serif'>
      Background Color Changer
    </div>
<div class="flex justify-center">
  
  <button onClick={getRandomColor} class="my-20 bg-blue-500 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg  text-lg border-2 border-black shadow-2xl ">
    Random
  </button>
</div>


<div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2 '>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-3 py-2'>

      <button style={{backgroundColor:"pink"}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setColor("pink")}>Pink</button>
      <button style={{backgroundColor:"green" ,color:"white"}} className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("green")}>Green</button>
      <button style={{backgroundColor:"red" ,color:"white"}} className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("red")}>Red</button>
      <button style={{backgroundColor:"orange " ,color:"white"}} className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("orange")}>Orange</button>
      <button style={{backgroundColor:"grey" ,color:"white"}} className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("grey")}>Grey</button>
      <button style={{backgroundColor:"teal" ,color:"white"}} className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("teal")}>Teal</button>
      <button style={{backgroundColor:"blue" ,color:"white"}} className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("blue")}>Blue</button>
      <button style={{backgroundColor:"brown" ,color:"white"}} className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("brown")}>Brown</button>

    </div>
</div>
      </div>

    </>
  )
}

export default App

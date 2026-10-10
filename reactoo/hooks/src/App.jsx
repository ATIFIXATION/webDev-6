// import React from 'react'
// import { useState } from 'react'
// const App = () => {


// const [num, setNum] = useState(20);
//  function changeNum(){
//   setNum(30);
//  }
//   return (
//     <div>

// <h1>value of num is {num}</h1>
// <button onClick={changeNum}>click</button>



  
import React from 'react'
import { useState } from 'react'
const App = () => {

  const [khana, setKhana] = useState(20);
  console.log(khana);

  function atifkhana(){
    setKhana(30);
  }

console.log(khana);

  return (
    <div>


<h1> khane ki baat horhi</h1>
<button onClick={atifkhana}>click</button>





    </div>
  )
}

export default App

// i just want to co




//     </div>
//   )
// }

// export default App
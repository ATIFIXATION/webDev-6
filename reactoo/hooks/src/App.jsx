// import React from "react";
// import { useState } from "react";
// const App = () => {
//   const [khana, setKhana] = useState(20);
//   console.log(khana);

//   function atifkhana() {
//     setKhana(30);
//   }

//   console.log(khana);

//   return (
//     <div>
//       <h1> khane ki baat horhi</h1>
//       <button onClick={atifkhana}>click</button>
//     </div>
//   );
// };

// export default App;
//use effect



// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     alert("use effect called");
//   }, []);

//   return (
//     <div>
//       <h1>use effect</h1>
//     </div>
//   );
// }

// export default App;


//useref

import { useRef } from "react";

function App() {
   const num = useRef(10)
   console.log(num.current)
   function changeNum() 
   {

    num.current = 20;
    console.log(num.current);
   }
  return (
    <div>
      <h1>use ref</h1>
      <button onClick={changeNum}>click</button>
    </div>
  );
}

export default App;
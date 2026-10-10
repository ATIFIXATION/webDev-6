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



import React, { useState, useEffect } from "react";

function app()
{

}

useeefect(() => {
  console.log("use effect called");
}, []);

return (
  <div>
    <h1>use effect</h1>
  </div>
);

export default app; 
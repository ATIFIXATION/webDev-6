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

// import { useRef } from "react";

// function App() {
//    const num = useRef(10)
//    console.log(num.current)
//    function changeNum()
//    {

//     num.current = 20;
//     console.log(num.current);
//    }
//   return (
//     <div>
//       <h1>use ref</h1>
//       <button onClick={changeNum}>click</button>
//     </div>
//   );
// }

// export default App;

//use context

// import { createContext, useContext } from "react";

// const MyContext = createContext();

// function App() {
//   return (
//     <MyContext.Provider value={10}>
//       <Child />
//     </MyContext.Provider>
//   );
// }

// function Child() {
//   const num = useContext(MyContext);

//   return <h1>{num}</h1>;
// }

// export default App;

//use reducer

// import { useReducer } from "react";

// function reducer(state, action) {
//   if (action === "add") {
//     return state + 1;
//   }

//   if (action === "remove") {
//     return state > 0 ? state - 1 : 0;
//   }

//   return state;
// }

// function App() {
//   const [quantity, dispatch] = useReducer(reducer, 0);

//   return (
//     <div>
//       <h1>Quantity: {quantity}</h1>

//       <button onClick={() => dispatch("add")}>
//         Add Item
//       </button>

//       <button onClick={() => dispatch("remove")}>
//         Remove Item
//       </button>
//     </div>
//   );
// }

// export default App;

//use callback

// use local storage

// import react from "react";
// const user = {
//   name: "Atif",
//   age: 20,
//   course: "AI & DS"
// };

// // Convert the object into a JSON string
// localStorage.setItem("user", JSON.stringify(user));

// // Retrieve and convert it back into an object
// const savedUser = JSON.parse(
//   localStorage.getItem("user")
// );

// console.log(savedUser.name);

// import react from "react";
// import axios from "axios";
// const app = () => {

// async function getdata() {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     console.log(res.data);
// }

//         return (

//                 < button onClick={getdata}>Get Data</button>
//         );
// };

// export default app;

import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </>
  );
};

export default App;

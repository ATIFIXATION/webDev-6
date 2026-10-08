import React from "react";

function btnclicked() {
  console.log("button clicked");
}
function mouseenter()
{
  console.log("mouse entered");
}

const App = () => {
  return (  
    <div>
      <button onClick={btnclicked} onMouseEnter={mouseenter}>
        change user
      </button>
    </div>
  );
};

export default App;

//second method to use function
// import React from "react";

// const App = () => {
//   return (
//     <div
//       onclick={() => console.log("button clicked")}
//       onMouseEnter={() => console.log("mouse entered")}
//     ></div>
//   );
// };

// export default App;

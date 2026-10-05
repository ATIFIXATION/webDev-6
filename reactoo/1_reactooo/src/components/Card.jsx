const Card = (props) => {

  console.log(props);
  return (
  
    <div className="card">
      hi i am card
      
      <h1>{props.user}, {props.age},    </h1>
    </div>
  );
};

export default Card;
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let nayoks = ['Salman','Manna','shakib khan','shovo','siam','masum','mizu','hasib'];
  let products = [
    {name: 'Photoshop',price : '$90.99'},
    {name: 'illustrator',price : '$110.99'},
    {name: 'PDF Reader',price : '$45.99'},
    {name: 'vs code',price : '$45.99'},
    {name: 'qr code',price : '$45.99'},
  ]


  return (
    <div className="App">
     
     <header className="App-header">
       <Users></Users>
       <Counter></Counter>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(pd => <li>{pd.name}</li>)
        }
      </ul>
      {
        products.map(product => <Product product={product}></Product>)
      }
      {/* <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product> */}
      {/* <Person name={nayoks[0]}></Person>
      <Person name={nayoks[1]}></Person>
      <Person name={nayoks[2]}></Person>
      <Person name={nayoks[3]}></Person> */}
     </header>
    </div>
  );
}

function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


function Counter(){
  const [count,setCount] = useState(10);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() =>setCount(count + 1)}>Increase</button>
      <button onClick={() =>setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Product(props){
  let procutStyle = {
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    height : '200px',
    width : '200px',
    float : 'left',
    color : 'black',
    margin : '10px'
  }
  return (
    <div style={procutStyle}>
      <h2>{props.product.name}</h2>
      <h1>{props.product.price}</h1>
      <button>Bye now</button>
    </div>
  )
}
function Person(props){
  // console.log(props);
  let style ={
    color : 'red',
    border : '2px solid blue',
    margin : '10px',
    padding : '20px',
    width : '200px',
    float : 'left'

  }
  return <div style ={style}>
    <h2>{props.name}</h2>
    <h3>{props.wife}</h3>
  </div>
  
}

export default App;

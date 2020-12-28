
import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      go: 'gooooo'
    }
    
  }
  test() { 
    return 111;
  }
  
render() {

  let a = 44;
  let b = {
    name: 'ivan',
    lastname: 'ivanov'
  };
  let c = ['hello', 'ivanov', 'ivan', 'ivanovich'];

  return (
    <div className='ty'>
      <h1>{this.state.go}</h1>
      <h2>{3 + 2}</h2>
      <ul>
        {c.map((elem, index) => {
          return <li key={elem}>{index+1} {elem}</li>
        })}
        {/* {c.map(function(elem) {
          return <li>{elem}</li>
          
        })} */}
      </ul>
      <div>{Math.random()}</div>
      <div>{this.test()}</div>
      <div>{a}</div>
      <div {...b}></div>

      <hr/>
      <p>{false}</p>
      <hr/>
      <p>&#38;</p>
      <input defaultValue = 'hello' />

    </div>
  );
}
}

export default App;

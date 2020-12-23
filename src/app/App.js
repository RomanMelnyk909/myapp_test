
import React from 'react';
import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

let nav = {
  main : '/index',
  about : '/about',
  price : '/buy/price',
  hello : 'Hello'
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      text : 'Hello',
      text2 : 555,
      text3 : 'Alloha'
    }
    this.showText = this.showText.bind(this);
    this.showText2 = this.showText2.bind(this);
    this.move = this.move.bind(this);
  }
  
  showText() { 
    console.log('work');
    this.setState({text: 'hi'})
  }

  showText2(e) { 
   
    this.setState({text2 : e.target.value})
    console.log(e.target.value)
  }

  move(e) { 
    console.log(e.target.textContent);
    this.setState({text3 : 'ohohoh'})
  }

render() {
  
  return (
    <div>
      <button onClick = {this.showText}>Push1</button>
      <input defaultValue={this.state.text} onInput={this.showText2}/>
      <div onMouseMove = {this.move}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nemo at dolor fuga quibusdam non incidunt voluptas accusantium iste autem voluptatum totam rerum perferendis aspernatur officiis, odit repellat, eum culpa?
      </div>
      <p>{this.state.text}</p>
      <p>{this.state.text2}</p>
      <p>{this.state.text3}</p>
    </div>






    // <div className="App">
    //   <Header title='New site' hero='GOO gogo' nav={nav}/>
    //   {/* <Main  /> */}
    //   {/* <Footer /> */}
    // </div>
  );
}
}

export default App;

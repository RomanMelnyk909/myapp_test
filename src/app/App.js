
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
render() {
  return (
    <div className="App">
      <Header title='New site' hero='GOO gogo' nav={nav}/>
      <Main  />
      <Footer />
    </div>
  );
}
}

export default App;

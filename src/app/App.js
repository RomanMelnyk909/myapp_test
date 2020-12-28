
import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Other from './Other';

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
    <Router>
    <div className='ty'>
     <ul>
       <li><a href="/">Main page</a></li>
       <li><a href="/about">About</a></li>
       <li><a href="/contacts">Contacts</a></li>
     </ul>
     <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contacts" component={Contacts} />
      <Route component={Other} />
     </Switch>
    </div>
    </Router>
  );
}
}

export default App;

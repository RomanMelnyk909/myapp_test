import React from 'react';
import logo from './logo.svg';
import './Header.css';
import Nav from '../Nav';


class Header extends React.Component{
  render() {
    let nav = this.props.nav;
    return (
      <div className="header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.props.title}</h1>
          <p>
            {this.props.hero}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> 
        <Nav nav={nav}/>
        </div>

    )
}
}

export default Header;

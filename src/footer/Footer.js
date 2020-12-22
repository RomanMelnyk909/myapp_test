import React from 'react';
import './Footer.css';

class Footer extends React.Component{
  render() {
    return (
        <footer className="section footer-classic conext-dark" 
        style={{background: '#2d3246', color: '#fff'}}>
          <p>Copyright</p>
        </footer>
    )
  } 
}

export default Footer;
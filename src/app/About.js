import React from 'react';


class About extends React.Component{
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
     About
    </div>
  );
}
}

export default About;
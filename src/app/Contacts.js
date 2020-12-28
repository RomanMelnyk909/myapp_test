import React from 'react';


class Contacts extends React.Component{
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
    Contacts
    </div>
  );
}
}

export default Contacts;
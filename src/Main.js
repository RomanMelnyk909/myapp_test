import React from 'react';
import './Main.css'

class Main extends React.Component{
  render(props) {
    return (
        <main className = 'main'>
        <article>
          <header>
            <h1>{this.props.name}</h1>
            <h2>{this.props.name1}</h2>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Blanditiis iure esse error? Omnis esse fugit cumque eos 
             similique, molestias quibusdam architecto, nam saepe 
             asperiores necessitatibus ratione sit iusto nostrum neque!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Blanditiis iure esse error? Omnis esse fugit cumque eos 
             similique, molestias quibusdam architecto, nam saepe 
             asperiores necessitatibus ratione sit iusto nostrum neque!
          </p>
        </article>
      </main>
    )
    
} }

export default Main;
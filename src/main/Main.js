import React from 'react';
import './Main.css'

class Main extends React.Component{
  render(props) {
    return (
      <div className="container">
        <main>
        <article>
          <header>
            <h1>Article 1</h1>
            <h2>Article 2</h2>
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
      </div>
    )
    
} }

export default Main;
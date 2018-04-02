import React, { Component } from 'react';
import FadeIn from 'react-fade-in'

class About extends Component {


  render() {


    return (
    <div className="about">
      <FadeIn>
      <div className="content">
      <FadeIn>
          <h1 className="App-title">Hello!</h1>
          <img class='me-pic' alt='Me!' src='https://avatars1.githubusercontent.com/u/34013051?s=460&v=4'/>
          <p>My name's Stephen Wiseman. Mostly, people call me Steve. I'm a computer engineer. I love challenging myself and learning new things. I especially love to code.
             When I'm not working or coding, I'm playing sports or traveling!
          </p>
      </FadeIn>
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default About;
import React, { Component } from 'react';
import FadeIn from 'react-fade-in'

class About extends Component {
  constructor (props) {
    super(props)
  }


  render() {


    return (
    <div className="about">
      <FadeIn>
      <div className="content">
      <FadeIn>
          <h1 className="App-title">Hello!</h1>
          <img class='me-pic' src='https://avatars1.githubusercontent.com/u/34013051?s=460&v=4'/>
          <p>My name's Stephen Wiseman. Mostly, people call me Steve. I'm a computer engineer. I love challenging myself and learning new things. I try to code as much as possible. Whether it's front end or backend, I enjoy it all.
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
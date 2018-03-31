import React, { Component } from 'react';
import FadeIn from 'react-fade-in'

class Projects extends Component {
  constructor (props) {
    super(props)
  }


  render() {


    return (
    <div className="about">
      <FadeIn>
      <div className="content">
      <FadeIn>
          <h1 className="App-title">Projects</h1>
      </FadeIn>
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default Projects;
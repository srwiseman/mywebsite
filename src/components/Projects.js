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
          <p>I'm always working on different coding projects. Whether it's for work, personal, or open source. Here are some of my projects.</p>
          <p><h2><a href='https://github.com/srwiseman/sounddeez'>Sounddeez</a></h2></p>
          <p>A music queuing system for Bose WiFi connected radios. Comprised of a backend server written in Golang, and a front end ReactJS server.</p>
      </FadeIn>
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default Projects;
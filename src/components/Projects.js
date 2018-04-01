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
          <p><h2>Sounddeez</h2></p>
          <a href='https://github.com/srwiseman/sounddeez'><strong><i class="fab fa-github-square"></i> GitHub Link</strong></a>
          <p>A music queuing system for Bose WiFi connected radios. Comprised of a backend server written in Golang, and a front end client written in ReactJS.</p>
          <p><strong>Technologies used: </strong> Golang, Javascript, ReactJS, JSON, HTML, CSS</p>
          <p><h2>This Website</h2></p>
          <a href='https://github.com/srwiseman/mywebsite'><strong><i class="fab fa-github-square"></i> GitHub Link</strong></a>
          <p>A basic website written in ReactJS. It's a single page web application. Each view is actually a different react component. It's controlled by a hash router so that everythign can be
          bundeled by webpack and served is static Javascript, HTML, and CSS.</p>
          <p><strong>Technologies used: </strong> Javascript, ReactJS, HTML, CSS, webpack</p>
      </FadeIn>
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default Projects;
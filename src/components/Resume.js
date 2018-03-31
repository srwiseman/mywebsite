import React, { Component } from 'react';
import FadeIn from 'react-fade-in'

class Resume extends Component {
  constructor (props) {
    super(props)
  }


  render() {


    return (
    <div className="about">
      <FadeIn>
      <div className="content">
      <FadeIn>
          <h1 className="App-title">Resume</h1>
          <p><strong>Nokia - Applications Engineer (Team Lead) - 2013 to Current</strong>
          <li>Troubleshoot Java code bugs</li>
          <li>Automate/Build internal tools</li>
          <li>Deploy Software around the world</li>
          </p>
          <p><strong>Memorial University of Newfoundland - 2007 to 2013</strong>
          <li>Bachelor of Computer Engineering</li>
          <li>Completed six work terms</li>
          </p>
      </FadeIn>
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default Resume;
import React, { Component } from 'react';
import FadeIn from 'react-fade-in'

class Resume extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount(){
    this.props.toggleIcon('fas fa-list-alt topicon')

  }


  render() {


    return (
    <div className="about">
      <FadeIn>
      <div className="content">
      <FadeIn>
          <h1 className="App-title">Career</h1>
          <h2><i class="fas fa-briefcase"></i> Work</h2>
          <p><h3><strong>Nokia - Applications Engineer (Team Lead) - 2013 to Current</strong></h3>
          <strong>Responsibilities</strong>
          <br/>Troubleshoot Java code bugs
          <br/>Automate/Build internal tools
          <br/>Deploy Software around the world
          <br/><strong>Demonstrated Skills:</strong>
          <br/>Java, SQL, UNIX/Linux, Python, TCP/IP
          </p>
          <h2><i class="fas fa-graduation-cap"></i> School</h2>
          <p><h3><strong>Memorial University of Newfoundland - 2007 to 2013</strong></h3>
          Bachelor of Computer Engineering
          <br/>Co-op program (six workterms)
          </p>
      </FadeIn>
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default Resume;
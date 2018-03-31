import React, { Component } from 'react';
import FadeIn from 'react-fade-in'

class Contact extends Component {
  constructor (props) {
    super(props)
  }


  render() {


    return (
    <div className="about">
      <FadeIn>
      <div className="content">
      <FadeIn>
          <h1 className="App-title">Contact Me!</h1>
      </FadeIn>
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default Contact;
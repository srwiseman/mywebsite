import React, { Component } from 'react';
import FadeIn from 'react-fade-in'

class Contact extends Component {


  render() {


    return (
    <div className="about">
      <FadeIn>
      <div className="content">
      <FadeIn>
          <h1 className="App-title">Contact Me!</h1>
          <p><strong><i class="fas fa-envelope"></i> Email: </strong>: <a href='mailto:swiseman@gmail.com'>swiseman@gmail.com</a></p>
          <p><strong><i class="fab fa-instagram"></i> Instagram: </strong><a href='https://www.instagram.com/stephenrwiseman/'>stephenrwiseman</a></p>
          <p><strong><i class="fab fa-git-square"></i> GitHub: </strong><a href='https://github.com/srwiseman'>srwiseman</a></p>
          <p><strong><i class="fab fa-linkedin"></i> LinkedIn: </strong><a href='https://www.linkedin.com/in/stephen-wiseman-b9120866/'>Stephen Wiseman</a></p>
      </FadeIn>
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default Contact;
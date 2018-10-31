import React, { Component } from 'react';
import FadeIn from 'react-fade-in'

class Contact extends Component {

  componentDidMount(){
    this.props.toggleIcon('fas fa-at topicon');
    document.body.style.backgroundColor = '#E0E0E0';

  }



  render() {


    return (
    <div className="about">
      <FadeIn>
      <div className="content">
      <FadeIn>
          <h1 className="App-title">Contact Me!</h1>
          <p><i class="fas fa-envelope"></i><strong> Email: </strong>: <a href='mailto:swiseman@gmail.com'>swiseman@gmail.com</a></p>
          <p><i class="fab fa-instagram"></i><strong> Instagram: </strong><a href='https://www.instagram.com/stephenrwiseman/'>stephenrwiseman</a></p>
          <p><i class="fab fa-github-square"></i><strong> GitHub: </strong><a href='https://github.com/srwiseman'>srwiseman</a></p>
          <p><i class="fab fa-linkedin"></i><strong> LinkedIn: </strong><a href='https://www.linkedin.com/in/stephen-wiseman-b9120866/'>Stephen Wiseman</a></p>
      </FadeIn>
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default Contact;
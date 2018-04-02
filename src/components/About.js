import React, { Component } from 'react';
import FadeIn from 'react-fade-in'

class About extends Component {

  componentDidMount(){
    this.props.toggleIcon('fas fa-question-circle topicon')

  }


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
          <p><a href='https://github.com/srwiseman/'><strong><i class="fab fa-github-square fa-2x"></i></strong></a> <a href='https://www.instagram.com/stephenrwiseman/'><strong><i class="fab fa-instagram fa-2x"></i></strong></a> <a href='https://www.linkedin.com/in/stephen-wiseman-b9120866/'><strong><i class="fab fa-linkedin fa-2x"></i></strong></a></p>
      </FadeIn>
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default About;
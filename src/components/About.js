import React, { Component } from 'react';
import FadeIn from 'react-fade-in'

class About extends Component {
  constructor(props){
  	super(props);
  }

  componentDidMount(){
    this.props.toggleIcon('fas fa-user topicon');

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
          <p>These days, I'm really interested in coding with <strong>ReactJS</strong>. In fact, this site is made from scratch with <strong>ReactJS</strong> and bundled into a single-page webapp with <strong>webpack</strong>! If you want to look at my code, check out the <strong><a href="https://github.com/srwiseman/mywebsite">GitHub page! </a></strong></p>
          <p><a href='https://github.com/srwiseman/'><i class="fab fa-github-square fa-2x"></i></a> <a href='https://www.instagram.com/stephenrwiseman/'><i class="fab fa-instagram fa-2x"></i></a> <a href='https://www.linkedin.com/in/stephen-wiseman-b9120866/'><i class="fab fa-linkedin fa-2x"></i></a></p>
      </FadeIn>
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default About;
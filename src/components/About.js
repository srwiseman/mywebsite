import React, { Component } from 'react';
import FadeIn from 'react-fade-in'
import Typist from 'react-typist';

class About extends Component {
  constructor(props){
  	super(props);
  }

  componentDidMount(){
    this.props.toggleIcon('fas fa-user topicon');
    document.body.style.backgroundColor = '#FFFFFF';

  }


  render() {


    return (
    <div className="about">
      <div className="content fade-in-delay-1">
          <h1 className="App-title typing-font fade-in-delay-2">Hello</h1>
          <p className="typing-font"><Typist className="MyTypist" avgTypingDelay={50}><Typist.Delay ms={4000} />My name's Stephen Wiseman.
          <Typist.Delay ms={1000} />
          <br/>But you can call me Steve.
          <Typist.Delay ms={1000} />
          <br/>I'm a computer engineer who loves to code.
          <Typist.Delay ms={1000} />
          <br/>In fact, this site is made from scratch with <strong><a href="https://reactjs.org/">React</a></strong>! 
          <Typist.Delay ms={1000} />
          <br/>
          If you want to look at the code, check out the <strong><a href="https://github.com/srwiseman/mywebsite">GitHub page! </a></strong>
          </Typist>
          <br/>
          <p>
             <a className="fade-in-delay-4" href='https://github.com/srwiseman/'> <i class="fab fa-github-square fa-2x"></i></a> 
             <a className="fade-in-delay-4" href='https://www.instagram.com/stephenrwiseman/'> <i class="fab fa-instagram fa-2x"></i></a> 
             <a className="fade-in-delay-4" href='https://www.linkedin.com/in/stephen-wiseman-b9120866/'> <i class="fab fa-linkedin fa-2x"></i></a></p>
          </p>
      </div>
      <div className="item-container">
      <div className="item">
      </div>
      <div className="item2">
      </div>
      <div className="item3">
      </div>
      </div>
      </div>
    );
  }
}

export default About;
import React, { Component } from 'react';
import FadeIn from 'react-fade-in'

class Skills extends Component {
  constructor(props){
  	super(props);
  }

  componentDidMount(){
    this.props.toggleIcon('fas fa-star topicon');

  }


  render() {


    return (
    <div className="skills">
      <div className="content">
      <FadeIn>
          <h1 className="App-title">Skills</h1>
          <p>Here are some things I'm good at! I don't think it's good enough just to <strong>say</strong> I'm good at things (otherwise I'd just say I'm good at eveything!). So I'll try to backup my claims and provide links to code as much as possible!</p>
          <h2>React (Javascript)</h2>
          <p>Lately, I've been really into coding with <strong><a href="https://reactjs.org/">React</a></strong>. I think it's awesome! My first react project was a project I called <a href='https://github.com/srwiseman/sounddeez'><i class="fab fa-github-square"></i><strong> Sounddeez </strong></a>. Basically, It creates a virtual DJ at my house. 
          Essentially, anyone who connects to my WiFi can play any song in the <strong><a href="https://www.deezer.com/en/">Deezer</a></strong> library on a stereo at my house! I wrote a backend API in GO, and the entire frontend in React.</p>
          <p>I also created <a href='https://github.com/srwiseman/mywebsite'><i class="fab fa-github-square"></i><strong> this website</strong></a> with React. It's pretty basic, but it was a fun little project. Each page is a component, the top bar is a component, and the sidebar on the left is a component. It uses a hash router to keep track of what's displayed. I package it as a single .js bundle using <strong><a href="https://webpack.js.org/">webpack</a></strong>.</p>
          <p>Lastly, I'm developing a virtual machine manager at work. It enables our users to create/delete/manage VMs. The cool part is that you can create a VM pre-loaded with any version of our software, with any database restored on it!
          It also does it blazingly fast! 
          The frontend (which looks quite snazzy), is entirely coded with React. I decided to do things right, and employ the <strong><a href="https://facebook.github.io/flux/docs/overview.html">React flux model</a></strong>.
          Basically, the components trigger actions, which trigger API calls to the Java <strong><a href="https://en.wikipedia.org/wiki/Representational_state_transfer">REST API</a></strong> we developped. The Java backend communicates to an <strong><a href="https://www.openstack.org/">openstack</a></strong> API, and provides data to the React frontend. The actions are dispatched and picked up by the stores, which update the themselves based on the results of the actions.
          Then the components (who are listening for changes to the stores), update their states accordingly! Fun! Obviously, I can't share the source for this one. </p>
          <h2>Python</h2>
          <p>Python is my go-to language. Especially if I'm trying to get something written quickly. Most of the things I create with Python are at my job.</p>
      </FadeIn>
      </div>
      </div>
    );
  }
}

export default Skills;
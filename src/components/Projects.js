import React, { Component } from 'react';
import FadeIn from 'react-fade-in'

class Projects extends Component {

  componentDidMount(){
    this.props.toggleIcon('fas fa-wrench topicon')

  }



  render() {


    return (
    <div className="about">
      <FadeIn>
      <div className="content">
      <FadeIn>
          <h1 className="App-title">Projects</h1>
          <p>I try to keep busy! I'm always working on a few different coding projects. Whether it's for work, personal, or open source. Here are some of my projects. Most will have GitHub links so you can look at my code.</p>
          <hr/>
          <p><h2>Sounddeez</h2></p>
          <a href='https://github.com/srwiseman/sounddeez'><strong><i class="fab fa-github-square"></i> GitHub Link</strong></a>
          <p>A music queuing system for Bose WiFi connected radios. Comprised of a backend server written in Golang, and a front end client written in ReactJS.</p>
          <p><strong>Technologies used: </strong> Golang, Javascript, ReactJS, JSON, HTML, CSS</p>
          <hr/>
          <p><h2>This Website</h2></p>
          <a href='https://github.com/srwiseman/mywebsite'><strong><i class="fab fa-github-square"></i> GitHub Link</strong></a>
          <p>A basic website written in ReactJS. It's a single page web application. Each view is actually a different react component. It's controlled by a hash router so that everything can be
          bundeled by webpack and served as static Javascript, HTML, and CSS.</p>
          <p><strong>Technologies used: </strong> Javascript, ReactJS, HTML, CSS, webpack</p>
          <hr/>
          <p><h2>Triplix</h2></p>
          <p><a href="https://play.google.com/store/apps/details?id=com.swisemanapps.tripli&hl=en"><strong><i class="fab fa-google-play"></i> Google Play</strong></a></p>
          <p>A game I published on the Apple App Store and the Google Play Store. It's a basic puzzle game written in C#, using the Unity engine. It was featured on a few popular mobile app sites and at one point had 10k active players.</p>
          <p><strong>Technologies used: </strong> C#, Unity</p>
          <hr/>
          <p><h2>Out East Apparel</h2></p>
          <p><a href="http://www.outeastapparel.com"><strong><i class="fas fa-gift"></i> Visit Store</strong></a></p>
          <p>Out East Apparel (OEA) is a clothing company based out of Newfoundland Canada. I'm one of the founders of the company, and the main social media manager. 
          We mainly sell t-shirts with Newfoundland-inspired designs.</p>
          <p>Follow us on Social Media!</p>
          <p><a href="https://www.facebook.com/outeastapparel/"><i class="fab fa-facebook-square fa-2x"></i></a> <a href="https://www.instagram.com/outeastapparelnl/"><i class="fab fa-instagram fa-2x"></i></a> <a href="https://twitter.com/outeastapparel"><i class="fab fa-twitter-square fa-2x"></i></a></p>
          <hr/>
          <p><h2>Cesium</h2></p>
          <a href='https://github.com/AnalyticalGraphicsInc/cesium'><strong><i class="fab fa-github-square"></i> GitHub Link</strong></a>
          <p>I'm a contributor to the open source 3D globe javascript library 'Cesium'. I've fixed bugs, wrote tests, and I'm currently working on a feature to automate some functionality.</p>
          <p><strong>Technologies used: </strong> Javascript, Jasmine testing framework</p>
      </FadeIn>
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default Projects;
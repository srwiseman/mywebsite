import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {slide as Menu} from 'react-burger-menu'
import FadeIn from 'react-fade-in'

class App extends Component {
  render() {

    var menuStyle = {
      overflow: 'hidden'
    }

    return (
      <div className="App">
      <Menu style={menuStyle}>
      <a id="home" className="menu-item" href="/"><i class="fas fa-question-circle"></i><span>About</span></a>
        <a id="about" className="menu-item" href="/about"><i class="fas fa-list-alt"></i><span>Resume</span></a>
        <a id="contact" className="menu-item" href="/contact"><i class="fas fa-at"></i><span>Contact</span></a>
      </Menu>
      <FadeIn>
      <div className="content">
      <FadeIn>
          <h1 className="App-title">Hello!</h1>
          <img class='me-pic' src='https://avatars1.githubusercontent.com/u/34013051?s=460&v=4'/>
          <p>My name's Stephen Wiseman. Mostly, people call me Steve. I'm a computer engineer. I love challenging myself and learning new things. I try to code as much as possible. Whether it's front end or backend, I enjoy it all.
             When I'm not working or coding, I'm playing sports or traveling!
          </p>
      </FadeIn>
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default App;

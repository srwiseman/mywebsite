import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {slide as Menu} from 'react-burger-menu'
import FadeIn from 'react-fade-in'
import About from './components/About'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    console.log("closing...")
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {

    var menuStyle = {
      overflow: 'hidden'
    }

    return (
      <div className="App">
      <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} style={menuStyle}>
        <a onClick={() => this.closeMenu()} id="home" className="menu-item" href="#"><i class="fas fa-question-circle"></i><span>About</span></a>
        <a id="about" className="menu-item" href="/about"><i class="fas fa-list-alt"></i><span>Resume</span></a>
        <a id="contact" className="menu-item" href="/contact"><i class="fas fa-at"></i><span>Contact</span></a>
      </Menu>
      <About/>
      </div>
    );
  }
}

export default App;

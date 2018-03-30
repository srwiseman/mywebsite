import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {slide as Menu} from 'react-burger-menu'
import FadeIn from 'react-fade-in'
import About from './components/About'
import Resume from './components/Resume'
import {
  HashRouter,
  Route,
  IndexRoute,
  Link
} from 'react-router-dom';

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
      <HashRouter>
      <div className="routerDiv">
      <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} style={menuStyle}>
        <Link to="/about" onClick={() => this.closeMenu()} id="about" className="menu-item"><i class="fas fa-question-circle"></i><span>About</span></Link>
        <Link to="/resume"  onClick={() => this.closeMenu()} id="resume" className="menu-item" href="/about"><i class="fas fa-list-alt"></i><span>Resume</span></Link>
        <a id="contact" className="menu-item" href="/contact"><i class="fas fa-at"></i><span>Contact</span></a>
      </Menu>
      
      <div>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />

      </div>
      </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;

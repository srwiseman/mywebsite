import React, { Component } from 'react';
import {slide as Menu} from 'react-burger-menu'
import FadeIn from 'react-fade-in'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
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
      <Menu width={ '40vh' } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} style={menuStyle}>
        <Link to="/about" onClick={() => this.closeMenu()} id="about" className="menu-item"><i class="fas fa-question-circle"></i><span>About</span></Link>
        <Link to="/resume"  onClick={() => this.closeMenu()} id="resume" className="menu-item" href="/about"><i class="fas fa-list-alt"></i><span>Resume</span></Link>
        <Link to="/projects"  onClick={() => this.closeMenu()} id="projects" className="menu-item" href="/about"><i class="fas fa-wrench"></i><span>Projects</span></Link>
        <Link to="/contact"  onClick={() => this.closeMenu()} id="contact" className="menu-item" href="/about"><i class="fas fa-at"></i><span>Contact</span></Link>
      </Menu>
      
      <div>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
      </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;

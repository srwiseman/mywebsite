import React, { Component } from 'react';
import {slide as Menu} from 'react-burger-menu'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import FadeIn from 'react-fade-in'
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      icon: 'fas fa-user topicon'
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  toggleIcon(icon){
    this.state.icon = icon;
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
        <Link to="/about" onClick={() => this.closeMenu()} id="about" className="menu-item"><i className="fas fa-user"></i><span>About</span></Link>
        <Link to="/skills"  onClick={() => this.closeMenu()} id="skills" className="menu-item" href="/skills"><i class="fas fa-star"></i><span>Skills</span></Link>
        <Link to="/resume"  onClick={() => this.closeMenu()} id="resume" className="menu-item" href="/about"><i className="fas fa-list-alt"></i><span>Career</span></Link>
        <Link to="/projects"  onClick={() => this.closeMenu()} id="projects" className="menu-item" href="/about"><i class="fas fa-wrench"></i><span>Projects</span></Link>
        <Link to="/contact"  onClick={() => this.closeMenu()} id="contact" className="menu-item" href="/about"><i className="fas fa-at"></i><span>Contact</span></Link>
      </Menu>
      
      <div>
        <Route exact path="/"  render={(props) => (
          <About toggleIcon={this.toggleIcon.bind(this)}/>
          )}/>
        <Route path="/about"  render={(props) => (
          <About toggleIcon={this.toggleIcon.bind(this)}/>
          )}/>
        <Route path="/resume"  render={(props) => (
          <Resume toggleIcon={this.toggleIcon.bind(this)}/>
          )}/>
        <Route path="/projects"  render={(props) => (
          <Projects toggleIcon={this.toggleIcon.bind(this)}/>
          )}/>
        <Route path="/contact"  render={(props) => (
          <Contact toggleIcon={this.toggleIcon.bind(this)}/>
          )}/>
        <Route path="/skills"  render={(props) => (
          <Skills toggleIcon={this.toggleIcon.bind(this)}/>
          )}/>
      </div>
      </div>
      </HashRouter>
      <div className='topbar'>
      <i className={this.state.icon + ' fa-2x'}></i>
      </div>
      </div>
    );
  }
}

export default App;

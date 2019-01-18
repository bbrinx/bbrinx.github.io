import React, { Component } from 'react';
import References from './components/references'
import Typewriter from './components/typewriter'
import smoothscroll from 'smoothscroll-polyfill';
import ReactGA from 'react-ga';
import 'normalize.css';
import './App.scss';

ReactGA.initialize('UA-88626373-1');

class App extends Component {
  constructor() {
    super()
    this.state = {
      tldr: false,
      typewriter: 0,
      clicked: [],
    }

    ReactGA.pageview('/homepage')
    
    this.resume = React.createRef()
    this.projects = React.createRef()
  }

  tldr() {
    ReactGA.event({
      category: 'User',
      action: 'Clicked TL;DR'
    })
    this.setState({tldr: !this.state.tldr})
  }

  scroll(ref) {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Reference'
    })
    smoothscroll.polyfill()
    window.scrollTo({top: ref.current.offsetTop, left: 0, behavior: 'smooth'})
  }

  clickedEmail() {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Email'
    })
  }
  clickedGithub() {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Github'
    })
  }
  clickedLinkedIn() {
    ReactGA.event({
      category: 'User',
      action: 'Clicked LinkedIn'
    })
  }
  clickedResume() {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Resume'
    })
  }
  clickedMapper() {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Mapper'
    })
  }
  clickedThesis() {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Thesis'
    })
  }
  clickedNewsfeed() {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Newsfeed'
    })
  }

  switchTypewriter = (typewriter) => {
    this.setState({typewriter: typewriter}, () => {
      this.setState({clicked: [...this.state.clicked, typewriter]})
    })
  }

  handleClick = (typewriter) => {
    this.switchTypewriter(typewriter)
    smoothscroll.polyfill()
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  } 

  render() {
    return (
      <div className="App">
        <div className="content-wrapper">
          <header className="App-header dashed-line">
            <div className="header-wrapper">
              <div className="title">
                <h1>Jonathan Derin</h1>
                <h3>Full-Stack Developer</h3>
              </div>
              <ul className="contact">
                <li title="email" className="mobile email" onClick={() => {this.clickedEmail()}}><a href="mailto:info@jonathanderin.de"></a></li>
                <li title="email" className="link" onClick={() => {this.clickedEmail()}}><a href="mailto:info@jonathanderin.de">info@jonathanderin.de</a></li>
                <li title="github" className="mobile github" onClick={() => {this.clickedEmail()}}><a href="https://github.com/bbrinx" target="_blank" rel="noopener noreferrer"></a></li>
                <li title="github" className="link" onClick={() => {this.clickedGithub()}}><a href="https://github.com/bbrinx" target="_blank" rel="noopener noreferrer">github</a></li>
                <li title="linkedin" className="mobile linkedin" onClick={() => {this.clickedEmail()}}><a href="https://www.linkedin.com/in/jonathan-derin" target="_blank" rel="noopener noreferrer"></a></li>
                <li title="linkedin" className="link" onClick={() => {this.clickedLinkedIn()}}><a href="https://www.linkedin.com/in/jonathan-derin" target="_blank" rel="noopener noreferrer">linkedin</a></li>
                <li title="resume" className="mobile resume" onClick={() => {this.clickedEmail()}}><a href={process.env.PUBLIC_URL+ '/resume.pdf#zoom=50'} target="_blank" rel="noopener noreferrer"></a></li>
                <li title="resume" className="link" onClick={() => {this.clickedResume()}}><a href={process.env.PUBLIC_URL+ '/resume.pdf#zoom=50'} target="_blank" rel="noopener noreferrer">resume</a></li>
              </ul>
            </div>
          </header>

          <main className="main">
            <div ref={this.text} className='text-wrapper'>
              <div className="text">
                {<Typewriter key={this.state.typewriter} id={this.state.typewriter} animate={!this.state.clicked.includes(this.state.typewriter)}/>}
              </div>
            </div>

            <div className="mobileNav">
              <ul>
                <li onClick={() => this.scroll(this.resume)}>Resume</li>
                <li onClick={() => this.scroll(this.projects)}>Projects</li>
              </ul>
            </div>

            <References resumeRef={this.resume} projectsRef={this.projects} setTypewriter={this.handleClick} />

          </main>
        </div>
      </div>
    );
  }
}

export default App;

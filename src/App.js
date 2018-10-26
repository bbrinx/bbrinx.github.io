import React, { Component } from 'react';
import Switch from "react-switch";
import 'normalize.css';
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tldr: false
    }
    this.bio1 = React.createRef();
    this.bio2 = React.createRef();
    this.bio3 = React.createRef();
    this.bio4 = React.createRef();
    this.bio5 = React.createRef();
    this.projects1 = React.createRef();
    this.projects2 = React.createRef();
    this.projects3 = React.createRef();
  }

  tldr() {
    this.setState({tldr: !this.state.tldr})
  }

  scroll(ref) {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    return (
      <div className="App">

        <header className="App-header dashed-line">
          <div className="header-wrapper">
            <h1>Jonathan Derin</h1>
            <ul>
              <li><a href="mailto:info@jonathanderin.de">info@jonathanderin.de</a></li>
              <li><a href="https://github.com/bbrinx">github</a></li>
              <li><a href="https://www.linkedin.com/in/jonathan-derin">linkedin</a></li>
            </ul>
          </div>
        </header>

        <main className="main dashed-line">
          <div className="bio">
            <div className="bio-text">
              <div className="header">
                <h2>Biography</h2>
                <div className="tldr-wrapper">
                  <Switch
                    onChange={() => {this.tldr()}}
                    offColor='#222'
                    onColor='#222'
                    onHandleColor='#fff'
                    offHandleColor='#fff'
                    checked={this.state.tldr}
                    id="normal-switch"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    activeBoxShadow='#fff'
                    height={20}
                    width={45}
                  />
                  <h2 className="tldr-toggle" onClick={() => {this.tldr()}}>TL;DR</h2>
                </div>
              </div>
              <div className={`text ${this.state.tldr ? 'hidden' : ''}`}>
                <p>
                  After graduating and earning some money working in social media marketing I wanted to start studying computer science. 
                  To be sure I was on the right path, I completed an <span className="tldr">internship</span> as a <span className="tldr">web developer</span> <span onClick={() => {this.scroll(this.bio1)}} className="footnote">[1]</span>. 
                  I created websites for clients, Wordpress templates and optimized existing websites in respect of <span className="tldr">usability, design and SEO</span>.
                </p>
                <p>
                  In October I moved to Berlin to <span className="tldr">study international media and computing</span> <span onClick={() => {this.scroll(this.bio2)}} className="footnote">[2]</span>, 
                  a computer science major with focus on image processing and web development. 
                  While studying I was <span className="tldr">awarded with the Deutschland Stipendium</span>, a scholarship for high-achieving students <span onClick={() => {this.scroll(this.bio3)}} className="footnote">[3]</span>. 
                  As part of the program, we could complete an internship abroad. 
                  I decided to use this oportunity to live in Mexico for six months. 
                </p>
                <p>
                  From March until August 2017 I worked as a <span className="tldr">full stack development intern at Decidata</span>, a marketing startup <span className="tldr">in Mexico City </span><span onClick={() => {this.scroll(this.bio4)}} className="footnote">[4]</span>. 
                  As part of the dev team I built a new application using <span className="tldr">Python, Django and Javascript</span>, that would let advertisers trigger their online campaigns based on the weather. 
                  I implemented automated <span className="tldr">python unit tests</span> and <span className="tldr">refactored</span> parts of the <span className="tldr">code</span>.
                  For the last months I worked on a new version of the platform, including <span className="tldr">implementing React</span> as a frontend framework to a Django backend and <span className="tldr">changing the database structure</span>.
                </p>
                <p>
                  During my last two semesters I worked as a <span className="tldr">full stack developer</span> at the <span className="tldr">Berlin</span> startup <span className="tldr">Foodly</span><span onClick={() => {this.scroll(this.bio5)}} className="footnote">[5]</span>. 
                  There I was responsible for building Foodly’s web application with <span className="tldr">Meteor, React, Node.js and MongoDB</span>. 
                  I implemented new featueres and prototyped an iOS mobile app version using <span className="tldr">React Native</span>.
                </p>
                <p>
                  I <span className="tldr">graduated in 2018</span> with the grade "very good", obtaining a <span className="tldr">bachelor of science</span>. 
                  My final thesis was focused on natural language processing techniques, analyzing the effect of the European Refugee Crisis on German media. 
                </p>
              </div>
            </div>

            <div className="ref">
              <div className="ref-wrapper">
                <div className="header">
                  <h3>References</h3>
                </div>
                <div className="references">
                  <div className="reference">
                    <p ref={this.bio1} className="number">[1]</p>
                    <p>
                      Mar 2015 - Jun 2015 <br/>
                      <span className="title">Pjunger Design / Tübingen</span><br/>
                      Web Development Intern
                    </p>
                  </div>
                  <div className="reference">
                    <p ref={this.bio2} className="number">[2]</p>
                    <p>
                      Oct 2015 - Sep 2018 <br/>
                      <span className="title">Bachelor of Science</span><br/>
                      University of Applied Science Berlin <br/>
                      Int. Media and Computing
                    </p>
                  </div>
                  <div className="reference">
                    <p ref={this.bio3} className="number">[3]</p>
                    <p>
                      Oct 2016 <br/>
                      <span className="title">Deutschland Stipendium</span><br/>
                      University of Applied Science Berlin <br/>
                      Scholarship Award
                    </p>
                  </div>
                  <div className="reference">
                    <p ref={this.bio4} className="number">[4]</p>
                    <p>
                      Mar 2017 - Aug 2017 <br/>
                      <span className="title">Decidata / Mexico City</span><br/>
                      Fullstack Dev Intern
                    </p>
                  </div>
                  <div className="reference">
                    <p ref={this.bio5} className="number">[5]</p>
                    <p>
                      Jan 2018 - Sep 2018 <br/>
                      <span className="title">Foodly / Berlin</span><br/>
                      Fullstack Dev
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="projects">
            <div className="projects-text">
              <div className="header">
                <h2>Selection of Projects</h2>
              </div>
              <div className={`text ${this.state.tldr ? 'hidden' : ''}`}>
                <p>
                  One of my favorite projects I worked on was my <span className="tldr">semester project</span> <span onClick={() => {this.scroll(this.projects1)}} className="footnote">[1]</span>. 
                  Using <span className="tldr">React Native</span> we built a <span className="tldr">mobile navigation app</span> for our university over four months. 
                  The app allows to search for the fastest path, find points of interests and is equipped with many more features. 
                </p>
                <p>
                  Another important project for me was my <span className="tldr">bachelor thesis</span> <span onClick={() => {this.scroll(this.projects2)}} className="footnote">[2]</span>. 
                  Using <span className="tldr">python, natural language processing techniques and machine learning</span> I researched the effect of the European Refugee Crisis on German media. 
                  This project was a great fusion of my interest in politics and journalism combined with my interest of data science 
                  and resulted in a new found love for natural language processing. 
                </p>
                <p>
                  After I finished school I finally got to work on a few projects I have had in mind for a while. 
                  This resulted in a small <span className="tldr">news reader</span>, called simple newsfeed, built with <span className="tldr">React.js and Node.js</span> <span onClick={() => {this.scroll(this.projects3)}} className="footnote">[3]</span>. 
                  The idea behind it was to build a simple and clean rss reader that would declutter my morning news routine (and help me avoid badly designed websites).
                </p>
              </div>
            </div>
            <div className="ref">
              <div className="ref-wrapper">
                <div className="header">
                  <h3>References</h3>
                </div>
                <div className="references">
                  <div className="reference">
                    <p ref={this.projects1} className="number">[1]</p>
                    <a href="https://github.com/bbrinx/cm.bp.htw-mapper" target="_blank" rel="noopener noreferrer">
                      <p>
                        Oct 2017 - Mar 2018 <br/>
                        <span className="title">HTW Mapper</span><br/>
                        Semester Project
                      </p>
                    </a>
                  </div>
                  <div className="reference">
                    <p ref={this.projects2} className="number">[2]</p>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <p>
                        April 2018 - Aug 2018 <br/>
                        <span className="title">Textual Analysis of German Online Media</span><br/>
                        Bachelor Thesis 
                      </p>
                    </a>
                  </div>
                  <div className="reference">
                    <p ref={this.projects3} className="number">[3]</p>
                    <a href="https://github.com/bbrinx/newsfeed" target="_blank" rel="noopener noreferrer">
                      <p>
                        Oct 2018 - present<br/>
                        <span className="title">Simple Newsfeed</span><br/>
                        Hobby Project <br/>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    );
  }
}

export default App;

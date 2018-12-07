import React, { Component } from 'react';
import './typewriter.scss';
import reactStringReplace from 'react-string-replace';

class Typewriter extends Component {
  constructor() {
    super()
    this.state = {
      display: '',
      typing: false,
      typewriter: {},
      finished: false,
    }
    this.text1 = React.createRef()
    this.text2 = React.createRef()
    this.text3 = React.createRef()
  }

  texts=[{
    id: 1,
    ref: 'pjunger', 
    text: 'At Pjunger I created websites and Wordpress templates for clients and optimized existing websites for improved usability, design, and SEO.' ,
    link: 'https://pjungerdesign.de',
  }, {
    id: 2,
    ref: 'uni',
    text: 'I moved to Berlin to study international media and computing, a computer science major with a focus on image processing and web development.',
    link: 'https://www.htw-berlin.de',
  }, {
    id: 3,
    ref: 'scholarship',
    text: 'While studying, I was awarded the Deutschland Stipendium,* a scholarship for high-achieving students.',
    link: 'https://www.deutschlandstipendium.de',
  }, {
    id: 4,
    ref: 'decidata',
    text: 'As part of the development team I built a new application using Python, Django, and Javascript. I implemented automated python unit tests, refactored parts of the code and implemented React as a frontend framework to a Django backend.',
    link: 'https://www.decidata.tv',
  }, {
    id: 5,
    ref: 'foodly',
    text: 'At Foodly I was responsible for building their web application with Meteor, React, Node.js and MongoDB.* I implemented new features and prototyped an iOS mobile app version using React Native.',
    link: 'https://www.getfoodly.com',
  }, {
    id: 6,
    ref: 'mapper',
    text: 'Over four months, my team mates and I built a mobile navigation app for our university using React Native. The app allows users to search for the fastest path, find POIs and many more things.',
    link: 'https://github.com/bbrinx/cm.bp.htw-mapper',
  }, {
    id: 7,
    ref: 'thesis', 
    text: 'Using Natural Language Processing techniques I researched the effect of the European Refugee Crisis on German media.',
    link: 'http://jonathanderin.de/thesis.pdf',
  }, {
    id: 8,
    ref: 'newsfeed',
    text: 'The idea behind this newsreader was to build a simple and clean rss reader for my morning news routine *(and help me avoid badly designed websites).',
    link: 'https://github.com/bbrinx/newsfeed',
  }, {
    id: 0,
    ref: 'default',
    text: 'Hello, my name is Jonathan Derin.* I am a full-stack developer.* Please click any of the links to learn more about me.',
    link: '',
  }

]

  speed = 70

  async type() {
    const typeLetter = (letter) => 
      new Promise(resolve => setTimeout(resolve, this.speed, letter))
      .then(letter => !this.isUnmounted && this.setState({ display: this.state.display + letter }))  
    
    const typeRow = () => {
      !this.isUnmounted && this.setState({typing: false})
      return new Promise(resolve => setTimeout(resolve, this.speed*10))
      .then(!this.isUnmounted && this.setState({ display: this.state.display + '\n'}))  
    }

    for (const letter of this.state.typewriter.text) {
      letter === '*' ? await typeRow() : await typeLetter(letter)
    }
    !this.isUnmounted && this.setState({typing: false, finished: true})
  } 

  componentDidMount() {
    if(this.props.animate) {
      this.setState({typewriter: this.texts.find(_ => _.id === this.props.id), typing: true}, () => this.type())
    } else {
      this.setState({display: this.texts.find(_ => _.id === this.props.id).text.replace(/(\*)/g, '\n'), finnished: true})
    }
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  componentDidUpdate() {
    if(this.text2 && this.text2.current) {
      this.text2.current.style.display = 'none'
      const a = this.text2.current.offsetHeight
      this.text2.current.style.display = 'unset'
    }
  }

  render() {
    const regex = /(usability, design, and SEO|Deutschland Stipendium|Python, Django, and Javascript|Natural Language Processing|Meteor, React, Node.js and MongoDB|React Native|computer science major)/g
    return (
      <div className="typewriter-wrapper" ref={this.text3}>
        <p
          className={`typewriter ${this.state.typing ? 'typing' : ''}`} ref={this.text1}>
          {reactStringReplace(this.state.display, regex, (match, i) => (
            <span className="highlight" key={i}>{match}</span>
          ))}
          <span className="cursor" ref={this.text2}>_</span>
        </p>
        {this.state.typewriter.link && this.state.finished? 
          <div className="fade-in-fwd">
            <a href={this.state.typewriter.link} className="link" target="_blank" rel="noopener noreferrer">Link</a> 
          </div>
          : null}
      </div>
    )
  }
}

export default Typewriter;

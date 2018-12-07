import React, { Component } from 'react';
import Reference from './reference'

class References extends Component {
  constructor(props) {
    super()
    this.state = {
      activeIndex: ''
    }
  }

  references = [{
    id: 1,
    date: 'Mar 2015 - Jun 2015',
    title: 'Pjunger Design / Tübingen',
    detail: 'Web Development Intern',
    tools: ['HTML', 'CSS', 'PHP']
  }, {
    id: 2,
    date: 'Oct 2015 - Sep 2018',
    title: 'Bachelor of Science',
    detail: 'University of Applied Science Berlin',
    tools: []
  }, {
    id: 3,
    date: 'Oct 2016',
    title: 'Deutschland Stipendium',
    detail: 'Scholarship Award',
    tools: []
  }, {
    id: 4,
    date: 'Mar 2017 - Aug 2017',
    title: 'Decidata / Mexico City',
    detail: 'Full-stack Intern',
    tools: ['Python', 'Django', 'React']
  }, {
    id: 5,
    date: 'Jan 2018 - Sep 2018',
    title: 'Foodly / Berlin',
    detail: 'Full-stack Developer',
    tools: ['React', 'Redux', 'Meteor', 'Node']
  },
  ]

  projects = [{
    id: 6,
    date: '2017',
    title: 'HTW Mapper',
    tools: ['React Native', 'Java']
  }, {
    id: 7,
    date: '2018',
    title: 'Textual Analaysis of German Online Media',
    tools: ['NLP', 'Python']
  }, {
    id: 8,
    date: '2018',
    title: 'Simple Newsfeed',
    tools: ['React', 'Node', 'Express']
  }]

  handleClick = (id) => {
    this.setState({activeIndex: id})
    this.props.setTypewriter(id)
  }

  render() {
    return (
      <div className="sidebar">
        <div className="resume-wrapper sidebar-col">
          <div className="header">
            <h3>Resumé</h3>
          </div>
          <div className="references resume" ref={this.props.resumeRef}>
            {this.references.map((ref, id) => (
              <Reference key={id} reference={ref} func={this.handleClick} active={this.state.activeIndex === ref.id}/>
            ))}
          </div>
        </div>
        <div className="projects-wrapper sidebar-col">
          <div className="header">
            <h3>Projects</h3>
          </div>
          <div className="references projects" ref={this.props.projectsRef}>
            {this.projects.map((ref, id) => (
              <Reference key={id} reference={ref} func={this.handleClick} active={this.state.activeIndex === ref.id}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default References;

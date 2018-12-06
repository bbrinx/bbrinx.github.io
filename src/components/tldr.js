import React, { Component } from 'react';
import './tldr.scss';

class Tldr extends Component {
  constructor(props) {
    super()
    this.state = {
      active: false
    }
  }

  handleHover() {
    this.setState({active: true})
  }

  

  render() {
    return (
      <span 
        onMouseOver={() => this.handleHover()} 
        className={`tldr ${this.state.active ? 'active' : ''}`}>
          {this.props.text}
      </span>
    )
  }
}

export default Tldr;

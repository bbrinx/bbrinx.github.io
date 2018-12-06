import React, { Component } from 'react';

class Reference extends Component {
  
  render() {
    const ref = this.props.reference
    return (
      <div className={`reference ${this.props.active ? 'active' : ''}`} onClick={() => this.props.func(ref.id)}>
        <p className="number">[{ref.id}]</p>
        <p>
          <span>{ref.date}</span><br />
          <span className="title">{ref.title}</span><br />
          <span>{ref.detail}</span>{ref.detail ? <br /> : null}
          <span>{ref.tools.length ? `[${ref.tools.join(', ')}]` : null}</span>
          {ref.date && ref.detail && ref.tools.length ? null : <span className="filler"></span> }
        </p>
      </div>
    )
  }
}

export default Reference;

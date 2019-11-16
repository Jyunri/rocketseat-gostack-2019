import React, { Component } from 'react';

class Techlist extends Component {
  state = {
    techs: [
      'Node.js',
      'ReactJS',
      'ReactNative',
    ]
  };

  render() {
    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJS</li>
        <li>ReactNative</li>
      </ul>
    );
  }
}

export default Techlist;

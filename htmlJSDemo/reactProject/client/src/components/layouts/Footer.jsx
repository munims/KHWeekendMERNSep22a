//component : Component is a part of the UI which is responsible for rendering the content 

// there are several types of components

// 1. Class based components
// to create class based components, we will fire command rcc
// 2. Function based components
// 3. pure components

import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
      <h5> &copy; www.KnowlegHut.com {new Date().getFullYear()}</h5>
      </>
    );
  }
}

import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <>
          <nav class="navbar bg-dark">
      <h1>
        <a class="btn" href="index.html">
          <i class="fas fa-code"></i> DevConnector</a
        >
      </h1>
      <ul>
        <li>
          <a href="profiles.html">Developers</a>
        </li>
        <li>
          <a  href="signup.html">Register</a>
        </li>
        <li>
          <a  href="signin.html">Login</a>
        </li>
      </ul>
    </nav>
        </>
    )
  }
}

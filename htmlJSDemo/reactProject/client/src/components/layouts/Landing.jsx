import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
    return (
        <>
           <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
        <h1 class="x-large">Developer Connector</h1>
        <p class="lead">
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </p>
        <div class="container">
          <a href="signup.html" class="btn btn-primary">Signup</a>
          <a href="signin.html" class="btn btn-light">Login</a>
        </div>
      </div>
    </div>
    </section>
        </>
    )
  }
}

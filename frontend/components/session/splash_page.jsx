import React from 'react';
import { Link } from 'react-router-dom';
import { login, demoLogin } from '../../actions/session_actions'
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  demoLogin: () => dispatch(demoLogin())
})

class SplashPage extends React.Component {

  render() {
    return (
      <div className="splash-page">

        <header className="splash-header">

          <div className="logo">
            <img src={window.whiteLogoURL}></img>
            <h1>Cadenze</h1>
          </div>

          <nav className="splash-session-buttons">
            <a
              className="splash-session-link contact"
              href="https://github.com/wadecoufal">Github</a>
            <a
              className="splash-session-link contact"
              href="https://www.linkedin.com/in/wade-coufal/">LinkedIn</a>

            <p className="separator">|</p>

            <Link className="splash-session-link" to="/signup">Sign Up</Link>
            <Link className="splash-session-link" to="/login">Log In</Link>
          </nav>
        </header>

        <main>
          <div className="splash-content">
            <h1>Music for everyone.</h1>
            <h4>Millions of songs. No credit card needed.</h4>
            <button onClick={this.props.demoLogin}>DEMO LOGIN</button>
          </div>

        </main>

        <footer>
          <div className="footer-div">

          </div>
        </footer>

      </div>
    )
  }

}

export default connect(null, mapDispatchToProps)(SplashPage);

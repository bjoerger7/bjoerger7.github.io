import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <div>
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="#logo" className="brand-logo">Brian Joerger</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="https://github.com/bjoerger7">Github</a></li>
          </ul>
        </div>
      </nav>
      {children}
    </div>
  );
}

App.propTypes = propTypes;

export default App;

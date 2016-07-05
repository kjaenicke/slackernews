import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className="slacker-news">
        <div className="sidebar">
            <i className="fa fa-hacker-news fa-3x sidebar-logo" aria-hidden="true"></i>
            <Link to="top" activeClassName="active">
                <i className="fa fa-fire fa-3x" aria-hidden="true"></i>
                <p>Top</p>
            </Link>
            <Link to="new" activeClassName="active">
                <i className="fa fa-rocket fa-3x" aria-hidden="true"></i>
                <p>New</p>
            </Link>
        </div>
        <div className="content">
            { this.props.children }
        </div>
      </div>
    );
  }
}

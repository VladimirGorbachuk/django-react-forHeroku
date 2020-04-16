import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes, { func } from "prop-types";
import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-item ml-auto mt-2 mt-lg-0">
        <li className="nav-text mr-3">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        </li>
        <li className="nav-item">
          <Link to="/login" className="navLink">
            <button
              onClick={this.props.logout}
              className="nav-link btn btn-info btn-sm"
            >
              Logout
            </button>
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/register" className="navLink">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="navLink">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Lead Manager
          </a>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);

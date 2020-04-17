import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };
  /// error - messenger, error.type Алёрт должен зависеть только от типа ошибки!!!
  // if error.type -
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) {
        alert.error(`Name: ${error.msg.name.join()}`);
      }
      if (error.msg.email) {
        alert.error(`e-mail: ${error.msg.email.join()}`);
      }
      if (error.msg.message) {
        alert.error(`Message: ${error.msg.message.join()}`);
      }
      if (error.msg.non_field_errors) {
        alert.error(`e-mail: ${error.msg.non_field_errors.join()}`);
      }
      if (error.msg.username) {
        alert.error(error.msg.name.join());
      }
    }

    if (message !== prevProps.message) {
      if (message.deleteLead) {
        alert.success(message.deleteLead);
      }
      if (message.addLead) {
        alert.success(message.addLead);
      }
      if (message.passwordNotMatch) {
        console.log("here should be alert");
        alert.error(message.passwordNotMatch);
      }
      if (message.emptyFields) {
        console.log("here should be alert about empty fields");
        alert.error(message.emptyFields);
      }
    }
  }

  render() {
    return <Fragment />; //how on Earth did we get it styled??
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));

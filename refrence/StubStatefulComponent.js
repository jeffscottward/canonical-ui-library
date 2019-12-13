import React, { Component } from "react";
import PropTypes from "prop-types";

import SomeImportedComponent from "./SomeImportedComponent";

class _______ extends Component {
  static propTypes = {
    /* 
    * Prop
    */
    prop: PropTypes.TYPEOFPROP.isRequired
  };

  constructor(props) {
    super();
    this.state = {
      value: props.SOMEPROP
    };
  }

  handleChange = someVal => {
    this.props.handleChange
      ? this.props.handleChange(someVal)
      : this.setState({ value });
  };

  render() {
    return (
      <React.Fragment>
        <SomeImportedComponent
          value={this.state.value}
          onChange={someVal => {
            this.handleChange(someVal);
          }}
        />
      </React.Fragment>
    );
  }
}

export default _______;

/* 
  
  Component API should look like:
  
  <Btn />

*/


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { text, route } = this.props;
    const DynamicClasses = {};
    const SavedElements = {};

    return (
      <button className="btn">
        <div className="btn__text">
          <span>{text}</span>
        </div>
      </button>
    );
  }
};


Btn.defaultProps = {
  text: "Text",
  route: '',
};

Btn.propTypes = {
  text: PropTypes.string,
  route: PropTypes.string,
};

export default Btn;
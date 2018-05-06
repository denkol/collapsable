/* 
  
  Component API should look like:
  
  <SubBar
    theme={"dark" OR "light"}
    menuItems={[
      {
        iconName: "pi",
        title: "Datenschutz"
      }
    ]}
  />

*/


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconPiBoard, IconMap, IconDrift, IconDashboard, IconTap, IconArrow, IconSmooth, IconCopy } from './icons';

class SubBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderSubBarIcon(iconName) {
    switch(iconName) {
      case 'map':
        return IconMap;
      case 'pi':
        return IconPiBoard;
      case 'drift':
        return IconDrift;
      case 'dashboard':
        return IconDashboard;
      case 'tap':
        return IconTap;
      case 'smooth':
        return IconSmooth;
      case 'copy':
        return IconCopy;
      default:
        return 'No icon';
    }
  }
  render() {
    const { menuItems, theme } = this.props;
    // const { } = this.state;

    const DynamicClasses = {
      SubBar: classNames({
        'sub-bar': true,
        'sub-bar--theme-dark': theme === "dark"
      }),
      Content: classNames({
        'sub-bar-content': true,
        'sub-bar-content_center': menuItems.length <= 4
      }),
      Arrow: classNames({
        'sub-bar-arrow': true,
        'sub-bar-arrow--is-hidden': menuItems.length <= 4
      })
    };

    
    return (
      <div className={DynamicClasses.SubBar}>
        <div className={DynamicClasses.Content}>
          {menuItems.map((item, key) => {
            return (
              <div key={key} className='sub-bar-content__item'>
                <div className='sub-bar-icon'>{this.renderSubBarIcon(item.iconName)}</div>
                <div className='sub-bar-title'>
                  <span>{item.title}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={DynamicClasses.Arrow}>
          <button className='sub-bar-arrow__icon'>
            {IconArrow}
          </button>
        </div>
      </div>
    );
  }
};


SubBar.defaultProps = {
  theme: 'dark',
  menuItems: [],
};

SubBar.propTypes = {
  theme: PropTypes.string,
  menuItems: PropTypes.array,
};

export default SubBar;
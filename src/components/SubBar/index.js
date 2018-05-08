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

  $(window).on("scroll", function() {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      // when scroll to bottom of the page
    }
  });

*/


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import scroll from 'smoothscroll-polyfill';
import { IconPiBoard, IconMap, IconDrift, IconDashboard, IconTap, IconArrow, IconSmooth, IconCopy } from './icons';

class SubBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHiddenLeftArrow: true,
      isHiddenRightArrow: false,
      scrollPosition: 0
    };

    this.scrollHandler = this.scrollHandler.bind(this);
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
  arrowClickHandler(e, direction) {
    const { isHiddenLeftArrow, isHiddenRightArrow } = this.state;
    const contentElem = document.getElementById('sub-bar-content');
    const viewport = contentElem.offsetWidth;
    const shiftWidth = viewport / 2;
    
    const scrolling = () => {
      contentElem.scroll({
        left: this.state.scrollPosition, 
        behavior: 'smooth' 
      });
    }

    if(direction === "left" && isHiddenLeftArrow === false) {
      this.setState({scrollPosition: this.state.scrollPosition - shiftWidth}, () => {
        scrolling();
      });
    }

    if (direction === "right" && isHiddenRightArrow === false) {
      this.setState({scrollPosition: this.state.scrollPosition + shiftWidth}, () => {
        scrolling();
      });
    }

    // console.log(this.state.scrollPosition, scrollWidth)

  }

  scrollHandler(e) {
    const offsetWidth = e.target.offsetWidth;
    const scrollWidth = e.target.scrollWidth;
    const scrollLeft = e.target.scrollLeft;

    if ((offsetWidth - scrollLeft) / offsetWidth === 1) {
      this.setState({
        isHiddenLeftArrow: true,
        isHiddenRightArrow: false,
        scrollPosition: scrollLeft,
      });
    } else if (offsetWidth + scrollLeft == scrollWidth) {
      this.setState({
        isHiddenLeftArrow: false,
        isHiddenRightArrow: true,
        scrollPosition: scrollLeft,
      });
    } else {
      this.setState({
        isHiddenLeftArrow: false,
        isHiddenRightArrow: false,
        scrollPosition: scrollLeft,
      });
    }    
  }
  render() {
    console.log(this.state)
    const { menuItems, theme } = this.props;
    const { isHiddenLeftArrow, isHiddenRightArrow} = this.state;

    const DynamicClasses = {
      SubBar: classNames({
        'sub-bar': true,
        'sub-bar--theme-dark': theme === "dark",
        'sub-bar--lesser-3': menuItems.length <= 3
      }),
      Arrow: {
        left: classNames({
          'sub-bar-arrow': true,
          'sub-bar-arrow_left': true,
          'sub-bar-arrow--is-hidden': isHiddenLeftArrow
        }),
        right: classNames({
          'sub-bar-arrow': true,
          'sub-bar-arrow_right': true,
          'sub-bar-arrow--is-hidden': isHiddenRightArrow
        })
      }
    };

    
    return (
      <div className={DynamicClasses.SubBar}>

        <div className='sub-bar-content' id='sub-bar-content' onScroll={this.scrollHandler}>
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
        <div className={DynamicClasses.Arrow.left}>
          <button className='sub-bar-arrow__icon' onClick={(e) => this.arrowClickHandler(e, 'left')}>
            {IconArrow}
          </button>
        </div>
        <div className={DynamicClasses.Arrow.right}>
          <button className='sub-bar-arrow__icon' onClick={(e) => this.arrowClickHandler(e, 'right')}>
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
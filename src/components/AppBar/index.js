/* 
  
  Component API should look like:
  
  <AppBar
    theme={"dark" OR "light" OR "blue" }
    menuItems={
      [
        {
          title: "Signal Empowering",
          href: "/signal_empowering"
        }, {
          title: "Produkte",
          href: "/products"
        }, {
          title: "Support",
          href: "/support"
        }, {
          title: "Blog",
          href: "/blog"
        }
      ]
    }

  />

*/


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconSearch, IconBag, IconHamburger } from './icons';
import './styles/app-bar.css';

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreenMenuOpen: false
    };
  }
  toggleMobileMenu() {
    this.setState({
      isFullScreenMenuOpen: !this.state.isFullScreenMenuOpen
    })
  }
  render() {
    const AppName = "PANDA";
    const { menuItems, theme, transparent } = this.props;
    const { isFullScreenMenuOpen } = this.state;

    const DynamicClasses = {
      AppBar: classNames({
        "app-bar": true,
        "app-bar_transparent": transparent,
        "app-bar--theme-light": theme === "light",
        "app-bar--is-expanded": isFullScreenMenuOpen,
      }),
      Hamburger: classNames({
        "app-hamburger": true,
        "app-hamburger--is-active": isFullScreenMenuOpen,
      }),
      Menu: classNames({
        "app-bar-menu": true,
      })
    };

    // const DynamicRender = {
      
    // };



    return (
      <nav className={DynamicClasses.AppBar}>
        <div className="app-bar-header">
          <div className="app-bar-header__item app-bar-header__item_hamburger">
            <IconHamburger className={DynamicClasses.Hamburger} onClick={() => this.toggleMobileMenu()}/>
          </div>
          <div className="app-bar-header__item app-bar-header__item_logo">
            <a href="/" title="Go Home" className="app-bar-logo">{AppName}</a>
          </div>
          <div className="app-bar-header__item app-bar-header__item_bag">
            {IconBag}
          </div>
        </div>
        <div className="app-bar-content container">
          <div className="app-bar-content__item app-bar-content__item_logo">
            <a href="/" title="Go Home" className="app-bar-logo">{AppName}</a>
          </div>
          {menuItems.map((item, key) => {
            return (
              <div key={key} className="app-bar-content__item app-bar-content__item_menu">
                <a className="app-bar-content-link" href={item.href}> {item.title} </a>
              </div>    
            );
          })}
          <div className="app-bar-content__item app-bar-content__item_search">
            {/* Here will be <SearchBar /> component */}
            {IconSearch}
            <input type="text" placeholder="Suche"/>
          </div>
          <div className="app-bar-content__item app-bar-content__item_bag">
            {/* Here will be <Bag /> component */}
            {IconBag}
          </div>
        </div>
      </nav>
    );
  }
};


AppBar.defaultProps = {
  menuItems: [],
  theme: 'dark',
  transparent: false
};

AppBar.propTypes = {
  menuItems: PropTypes.array,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppBar;
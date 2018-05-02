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
import { IconLogo, IconSearch, IconBag, IconHamburger } from './icons';
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
    const { menuItems, theme } = this.props;
    const { isFullScreenMenuOpen } = this.state;

    const DynamicClasses = {
      AppBar: classNames({
        "app-bar": true,
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
      <header className={DynamicClasses.AppBar}>
        <div className="app-bar-content container">
          <div className="app-bar-content__item app-bar-content__item_hamburger" onClick={() => this.toggleMobileMenu()} >
            <IconHamburger className={DynamicClasses.Hamburger} />
          </div>
          <div className="app-bar-content__item app-bar-content__item_logo">
            <a href="/" title="Go Home">{IconLogo}</a>
          </div>
          <div className="app-bar-content__item app-bar-content__item_menu">
            <div className={DynamicClasses.Menu}>
              {menuItems.map((item, key) => {
                return (
                  <div key={key} className="app-bar-menu__item">
                    <a href={item.href}> {item.title} </a>
                  </div>    
                );
              })}
            </div>
          </div>
          <div className="app-bar-content__item app-bar-content__item_search">
            {/* Here will be <SearchBar /> component */}
            {IconSearch}
          </div>
          <div className="app-bar-content__item app-bar-content__item_bag">
            {/* Here will be <Bag /> component */}
            {IconBag}
          </div>
        </div>
      </header>
    );
  }
};


AppBar.defaultProps = {
  menuItems: [],
  theme: 'dark',
};

AppBar.propTypes = {
  menuItems: PropTypes.array,
  theme: PropTypes.string,
};

export default AppBar;
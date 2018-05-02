/* 
  
  Component API should look like:
  
  <Footer
    theme={"dark" OR "light"}
    menuItems={[
      {
        href: "/",
        title: "Datenschutz"
      }, {
        href: "/",
        title: "Nutzungsbestimmungen"
      }, {
        href: "/",
        title: "Impressum"
      }
    ]}
  />

*/


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles/footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { menuItems, theme } = this.props;
    // const { } = this.state;

    const DynamicClasses = {
      Footer: classNames({
        "footer": true,
        "footer--theme-light": theme === "light"
      })
    };

    // const DynamicRender = {
      
    // };

    return (
      <footer className={DynamicClasses.Footer}>
        <div className="footer-content container">
          <div className="footer-content__item footer-content__item_copyright">
            <span>Copyright © 2018 Panda Technology GmbH. Alle Rechte vorbehalten.</span>
          </div>
          <div className="footer-content__item footer-content__item_menu">
            <div className="footer-menu">
              {menuItems.map((item, key) => {
                return (
                  <div className="footer-menu__item">
                    <a href={item.href}>{item.title}</a>
                  </div>
                );
              })}  
            </div>
          </div>
        </div>
      </footer>
    );
  }
};


Footer.defaultProps = {
  theme: 'dark',
  menuItems: [],
};

Footer.propTypes = {
  theme: PropTypes.string,
  menuItems: PropTypes.array,
};

export default Footer;
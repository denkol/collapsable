/* 
  
  Component API should look like:
  
  <ProductMenu
    theme="dark",
    fullWidth={true},
    title='Sometitle',
    actionBtn: {<Btn text="" route=""/>}
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

class ProductMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  toggleList() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  render() {
    console.log(this.state);
    const { menuItems, theme, actionBtn, title, fullWidth } = this.props;
    const { isExpanded } = this.state;
    
    const DynamicClasses = {
      Root: classNames({
        'product-menu': true,
        'product-menu--full-width': fullWidth,
        'product-menu--theme-light': theme === 'light',
        'product-menu--is-expanded': isExpanded,
      }),
      Arrow: classNames({
        'product-menu-arrow': true,
        'product-menu-arrow--is-active': isExpanded,
      })
    };

    const SavedElements = {
      title: (<h2 className="product-menu-title">{title}</h2>),
      btn: (<React.Fragment>{actionBtn}</React.Fragment>),
      links: (
        <div className="product-menu-links">
          {menuItems.map( (item, key) => <a key={key} className="product-menu-links__item" href={item.href}>{item.title}</a>)}
        </div>
      ),
      arrow: (
        <div className={DynamicClasses.Arrow} onClick={() => this.toggleList()}>
          <span className='product-menu-arrow__chevron'></span>
        </div>
      ),
    };
    
    return (
      <div className={DynamicClasses.Root}>
        <div className='product-menu-header'>
          
            {SavedElements.title}
          
          
            {SavedElements.arrow}
          
          
            {SavedElements.btn}
          
        </div>
        <div className='product-menu-content'>
          <div className='product-menu-content__item product-menu-content__item_title'>
            {SavedElements.title}
          </div>
          <div className='product-menu-content__item'>
            <div className='product-menu-actions'>
              <div className='product-menu-actions__item'>
                {SavedElements.links}
              </div>
              <div className='product-menu-actions__item product-menu-actions__item_btn'>
                {SavedElements.btn}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


ProductMenu.defaultProps = {
  theme: 'light',
  title: '',
  menuItems: [],
  actionBtn: null,
  fullWidth: false,
};

ProductMenu.propTypes = {
  theme: PropTypes.string,
  title: PropTypes.string,
  menuItems: PropTypes.array,
  actionBtn: PropTypes.element,
  fullWidth: PropTypes.bool,
};

export default ProductMenu;
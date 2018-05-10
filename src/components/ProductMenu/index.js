/* 
  
  Component API should look like:
  
  <ProductMenu
    theme="dark",
    title='Sometitle',
    actionBtn: {<Btn text="" route=""/>}
    menuItems={[
      {
        iconName: "pi",
        title: "Datenschutz",
        disabled: true/false,
      }
    ]}
    
  />

*/


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Sticky from 'react-sticky-el';

class ProductMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
    // this.scrollyHandler = this.scrollyHandler.bind(this);
  }
  toggleList() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  disableExpanded() {
    this.setState({
      isExpanded: false,
    });
  }
  render() {
    console.log(this.state)
    const { menuItems, theme, actionBtn, title, isSticky } = this.props;
    const { isExpanded } = this.state;
    
    const DynamicClasses = {
      Root: classNames({
        'product-menu': true,
        'product-menu--theme-light': theme === 'light',
        'product-menu--is-expanded': isExpanded,
      }),
      LinkItem: (isDisabled) => classNames({"product-menu-links__item": true, "product-menu-links__item--is-disabled": isDisabled}),
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
          {menuItems.map((item, key) => <a key={key} className={DynamicClasses.LinkItem(item.isDisabled)} href={item.href}>{item.title}</a>)}
        </div>
      ),
      arrow: (
        <div className={DynamicClasses.Arrow} onClick={() => this.toggleList()}>
          <span className='product-menu-arrow__chevron'></span>
        </div>
      ),
    };
    return (
      <Sticky className={DynamicClasses.Root} onFixedToggle={() => this.disableExpanded()} stickyClassName={'product-menu--is-sticky'} disabled={!isSticky}>
      

        
        <div className='product-menu-wrapper'>
          <div className='product-menu-background'></div>
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
        <div className='product-menu-overlay'></div>
        
      
      </Sticky>
    );
  }
};


ProductMenu.defaultProps = {
  theme: 'dark',
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
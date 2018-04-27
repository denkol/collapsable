/*
  Hey, Denis. Looks pretty good. Some minor points:

  I want to be able to do something like this:
  <div style={{{{display:'flex'}}>
  <div style={{{: Width:'50%'}}>
  RenderList(items)}
  </div>
  <div style={{{: Width:'50%'}}}/>
  </div>


  I really like the autoscaling, but in this case, it is not very helpful. Any ideas? (see attached pictures)


  expandIcon is not square in cross mode. This is particularly noticeable when resizing the window. Looks a little weird.


  show expandIcon when extended - even if expandIcon is disabled (see Apple example)


  margin from parent under last child (see attached pictures)


  could you add that the hover effect only comes when the expandIcon is disabled?


  Any other ideas on the component?


*/
/* 
  
  Component API should look like:
  
  <Collapsable
    title="Frequently Asked Questions"
    titleSize="32px"
    content={...} // any div
    expandIcon={true}
    border={false}
    fullwidthBorder={true}
  />

- There should be a rotating transition for + to x (ExpandIcon).
- Smooth transition for collapsing.
- Auto-Scale expandIcon to textSize
- No library or only MaterialUI@Next (https://material-ui-next.com) for layout and responsive behaviour. 

https://www.apple.com/shop/buy-iphone/iphone-8

*/


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import closeIcon from './close-button.svg';
import './Collapsable.css';

import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';


const styles = {
  root: {
    boxShadow: "none",
  },
  disabled: {
    backgroundColor:"transparent",
  }
}


class Collapsable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false 
    };
  }
  toggleDrawer() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  
  render() {
    const { border, fullwidthBorder, expandIcon, content, titleSize, title} = this.props;
    const { isExpanded } = this.state;

    const DynamicClasses = {
      headline: classNames({
        "collapsable-headline": true,
        "collapsable-headline--is-hoverable": !expandIcon
      }),
      collapsable: classNames({
        "collapsable": true,
        "collapsable_fullwidth-border": fullwidthBorder,
        "collapsable_border": border
      }),
      expandIcon: classNames({
        "expand-icon": true,
        "expand-icon--is-active": isExpanded
      })
    };

    const DynamicRender = {
      expandIcon: () => {
        if(expandIcon === false)
          return null;
        
        return (
          <div style={{backgroundImage: `url(${closeIcon})`}} className={DynamicClasses.expandIcon}></div>
        );
      },
      drawer: () => {
        if(content === false) 
          return null;

        return (
          <ExpansionPanelDetails style={{padding: 0}}>
            <div className={"collapsable-drawer"}>
              {content}
            </div>
          </ExpansionPanelDetails>
        );
      },
    };

    return (
      <div className={DynamicClasses.collapsable}>
        <div className="collapsable-content">
          <ExpansionPanel classes={{...this.props.classes}} onChange={() => this.toggleDrawer()} disabled={!content}>
            <ExpansionPanelSummary className="collapsable-head" style={{fontSize: titleSize, padding: 0}}>
              <h2 className={DynamicClasses.headline}>{title}</h2>
              {DynamicRender.expandIcon()}
            </ExpansionPanelSummary>
            {DynamicRender.drawer()}
          </ExpansionPanel>
        </div>
      </div>
    );
  }
};


Collapsable.defaultProps = {
  title: 'Untitled',
  titleSize: '16px',
  content: false,
  expandIcon: false,
  border: false,
  fullwidthBorder: false
};

Collapsable.propTypes = {
  title: PropTypes.string,
  titleSize: PropTypes.string,
  content: PropTypes.node,
  expandIcon: PropTypes.bool,
  border: PropTypes.bool,
  fullwidthBorder: PropTypes.bool
};

export default withStyles(styles)(Collapsable);
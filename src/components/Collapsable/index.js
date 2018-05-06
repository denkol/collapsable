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
import closeIcon from './assets/close-button.svg';

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
        "expand-icon--is-active": isExpanded,
        "expand-icon--is-init-hidden": !expandIcon
      }),
    };

    const DynamicRender = {
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
      <div className={DynamicClasses.collapsable} style={{fontSize: titleSize}}>
        <div className="collapsable-content">
          <ExpansionPanel classes={{...this.props.classes}} onChange={() => this.toggleDrawer()} disabled={!content}>
            <ExpansionPanelSummary className="collapsable-head">
              <h2 className={DynamicClasses.headline}>{title}</h2>
              <div style={{backgroundImage: `url(${closeIcon})`}} className={DynamicClasses.expandIcon}></div>
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
  titleSize: 'inherit',
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
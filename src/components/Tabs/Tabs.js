import React, { Component } from "react";
import PropTypes from "prop-types";
import { MarginPaddingSize } from "../vars";

import Button from "../Button";

class Tabs extends Component {
  static propTypes = {
    /*
    * Tab value list
    */
    tabList: PropTypes.array.isRequired,
    /*
    * Default Active
    */
    defaultActiveTab: PropTypes.string,
    /*
    * Event handler
    */
    handleSelection: PropTypes.func.isRequired
  };

  constructor(props) {
    super();
    this.state = {
      activeTab: props.defaultActiveTab || ""
    };
  }

  handleClick = (e, tabitemClick) => {
    this.setState({ activeTab: tabitemClick });

    if (this.props.handleSelection) {
      this.props.handleSelection(tabitemClick);
    }
  };

  render() {
    return (
      <div
        className={
          "Tabs" + (this.props.className ? " " + this.props.className : "")
        }
      >
        {this.props.tabList.map(tabItem => {
          return (
            <Button
              key={tabItem + Math.random()}
              activeHighlight={this.state.activeTab === tabItem}
              onClick={someVal => {
                this.handleClick(someVal, tabItem);
              }}
            >
              {tabItem}
            </Button>
          );
        })}
        <style jsx>{`
          .Tabs {
            display: flex;

            :global(.Button) {
              border-right-width: 0;
            }
            :global(*:last-child) {
              border-right-width: 1px !important;
            }
            :global(.Button.tab-active) {
              padding-left: calc(${MarginPaddingSize[1]} + 1px);
            }
            :global(.Button.tab-active + .Button) {
              border-left-width: 0px;
              padding-left: calc(${MarginPaddingSize[1]} + 1px);
            }
            :global(.Button.tab-active) {
              border-right-width: 1px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Tabs;

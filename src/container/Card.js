import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <img width="75" src={this.props.avatar_url} />
        <div style={{ display: "inline-block", marginLeft: 10}}>
          <div style={{ fontSize: "1.25em", fontWeight: "bold" }}>
            {this.props.name}
          </div>
          <div>{this.props.company}</div>
        </div>
      </div>
    );
  }
}

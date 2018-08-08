import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
        <form>
            <input type="text" placeholder="Github username" />
            <button type="submit">Add Card</button>
        </form>
    );
  }
}

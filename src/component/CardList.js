import React, { Component } from "react";
import Card from "./Card";

export default class CardList extends Component {
  render() {
    return <div>
        <Card name="Petr Gazarov" avatar_url="https://avatars3.githubusercontent.com/u/5581195?v=4" company='Facebook' />
      </div>;
  }
}

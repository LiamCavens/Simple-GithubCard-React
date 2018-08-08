import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './component/CardList';

let data = [
  {
    name: "Petr Gazarov",
    avatar_url: "https://avatars3.githubusercontent.com/u/5581195?v=4",
    company: "Facebook"
  },
  {
    name: "Ben Alpert",
    avatar_url: "https://avatars.githubusercontent.com/u/8445?v=3",
    company: "Facebook"
  }
];
class App extends Component {
  render() {
    return (
      <CardList />
    );
  }
}

export default App;

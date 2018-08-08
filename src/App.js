import React, { Component } from 'react';
import CardList from './container/CardList';
import Form from './component/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          name: "Petr Gazarov",
          avatar_url: "https://avatars3.githubusercontent.com/u/5581195?v=4",
          company: "Facebook"
        },
        {
          name: "Paul O'Shannessy",
          avatar_url: "https://avatars.githubusercontent.com/u/8445?v=3",
          company: "Facebook"
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <Form />
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;

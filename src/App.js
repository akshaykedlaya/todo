import React, { Component } from 'react';

class TodoApp extends Component {
  state = { 
    value:'',
    items: [],
    id:0
   }

  handleInput = e => {
    this.setState({value : e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value:'',
      id: 0,
      items: [...this.state.items,this.state.value]
    })
  }

  deleteItem = (itemTobeDeleted, index) => {
    //console.log("itemdeleted:", itemTobeDeleted);
    const filteredItem = this.state.items.filter(item => {
      return item !== itemTobeDeleted;
    });
    this.setState({
      items: filteredItem
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='todo' value={this.state.value} onChange={this.handleInput}></input>
          <button>Add</button>
        </form>
        <ListItems items={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

const ListItems = props => (
  <div>
  <ul>
    {props.items.map((item, index) => {
      return (
        <li key={index}>
          {" "}
          {item}
          <button onClick={() => props.delete(item)}>Delete</button>
        </li>
      );
    })}
  </ul>
</div>
);

class App extends Component {
  render() {
    return (
      <div>
        <TodoApp />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './components/MyName';
import MyPart from './components/MyPart';
import Counter from './components/Counter';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'Jay',
        phone: '000-0000-0000'
      },
      {
        id:1, 
        name: 'Micheal',
        phone: '010-0000-0001'
      }
    ]
  }
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '13px'
    }
    {/*주석은 불편해*/}
    return (
      <div className="App"> 
        Hello React!!!!! <MyName name="홍길동"/>
        Hello MyPart :: <MyPart partnm="기획팀"/>
        <div>
          <Counter />
        </div>
        <div>
          <PhoneForm onCreate={this.handleCreate}/>
        </div>
        {JSON.stringify( this.state.information )}
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './components/MyName';
import MyPart from './components/MyPart';
import Counter from './components/Counter';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
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
    ],
    keyword: ''
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map( info => id === info.id ? { ...info, ...data} : data)
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
    const {information, keyword} = this.state;
    const filterUserList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    )
    return (
      <div>
        <div className="App"> 
          Hello React!!!!! <MyName name="홍길동"/>
          Hello MyPart :: <MyPart partnm="기획팀"/>
          <div>
            <Counter />
          </div>
          <div>
            <PhoneForm onCreate={this.handleCreate}/>
          </div>

          <div>
            <p>
              <input placeholder="search" onChange={this.handleChange} value={keyword}/>
            </p>
          </div>
        </div>
        <div>
            <PhoneInfoList data={filterUserList} 
            onRemove={this.handleRemove}
            onUpdate={this.handleUpdate}/>
        </div>
      </div>
    );
  }
}
export default App;

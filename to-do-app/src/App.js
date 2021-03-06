import React, { Component } from 'react';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
class App extends Component {
  id = 3
  state = {
    input: '',
    todos: [
      {id: 0, text: 'React Study', checked: false},
      {id: 1, text: 'Ielts Study', checked: false},
      {id: 2, text: 'Java Study', checked: false},
    ],
    color: ''
  }
  handleChange = (e) =>{
    this.setState({
      input: e.target.value
    })
  }
  handleCreate = () => {
    const{ input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input, 
        checked: false
      })
    })
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate()
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사
    
    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    const {input, todos, palette} = this.state; 
    const {
      handleChange, 
      handleKeyPress, 
      handleCreate,
      handleToggle,
      handleRemove
    } = this;

    return (
        <TodoListTemplate form={<Form 
          value={input}
          onChange={handleChange}
          onCreate={handleCreate}
          onKeyPress={handleKeyPress}
          />}> 
          <TodoItemList  todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </TodoListTemplate>
    );
  }
}
export default App;

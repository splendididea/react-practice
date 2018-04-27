import React, {Component} from 'react';
class Todo extends Component{
    state = {
        name: '',
        dueDate: '',
        done: ''
    };
    handleChange = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
    };
    render(){
        return(
            <form>
                <input
                    placeholder={"제목"}
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <span>{this.state.name}</span>
                <span>{this.state.dueDate}</span>
                <span>{this.state.done}</span>
            </form>
        )
    }
}
export default Todo;
import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '000-0000-0000',
            id: 0
        }
    }
    state = {
        editing: false,
        name: '',
        phone: ''
    }

    handleToggleEdit = () => {
        const {editing} = this.state;
        this.setState({
            editing: !editing
        });
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value            
        })
    }

    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }
    handleUpdate = () => {
        const {info, onUpdate} = this.props;
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
            return false;
        } 
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        const {info, onUpdate} = this.props;
        if(!prevProps.editing && this.state.editing) {
            this.setState({
                name: info.name,
                phone: info.phone
            })
        } else if(prevProps.editing && !this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name, 
                phone: this.state.phone
            })
        }
    }
    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }
        const {editing} = this.state;

        if(editing){
            return(
                <div style={style}>
                <div>
                  <input
                    value={this.state.name}
                    name="name"
                    placeholder="이름"
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <input
                    value={this.state.phone}
                    name="phone"
                    placeholder="전화번호"
                    onChange={this.handleChange}
                  />
                </div>
                <button onClick={this.handleToggleEdit}>적용</button>
                <button onClick={this.handleRemove}>삭제</button>
              </div>
            )
        }

        const {
            name, phone, id
        } = this.props.info;
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>delete</button>
                <button onClick={this.handleToggleEdit}>modify</button>
            </div>
        );
    }
}

export default PhoneInfo;

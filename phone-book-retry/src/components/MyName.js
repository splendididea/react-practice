import React, {Component} from 'react';

class MyName extends Component {
    static defaultProps = {
        name: '기본이름1'
    }
  render(){
    return(
        <div>
            안녕하세요 제 이름은  {this.props.name}, {this.props.name2}입니다.
        </div>
    )
  }
}
MyName.defaultProps = {
    name2: '기본이름2'
}
export default MyName;
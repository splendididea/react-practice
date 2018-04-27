import React, {Component} from 'react';

const Problematic = () => {
    throw (new Error('에러 발생 '));
    return(
        <div></div>
    )
}

class Counter extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }
    
    componentWillMount() {
        console.log('componentWillMount deprecated');
    }

    componentDidMount() {
        // 외부 라이브러리 연동: D3, masonry, etc
        // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
        // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log( ' Virtual DOM 에 리렌더링 하는것도,불필요할경우엔 방지하기 위해서 shouldComponentUpdate 를 작성합니다. ');
        console.log('shouldComponentUpdate start!!!!!');
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        console.log('nextContext', nextContext);
        if( nextState.number % 5 === 0 ){
            return false;
        }
        console.log('shouldComponentUpdate end!!!!!');
        return true;
    }

    static getDerivedStateFromProps(nextProps, prevState){
        // 여기서는 setState 를 하는 것이 아니라
        // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
        // 사용됩니다.
        
        console.log('getDerivedStateFromProps start!!');
        console.log(nextProps);
        console.log(prevState);
        console.log('getDerivedStateFromProps end!!');

        /*
        if (nextProps.value !== prevState.value) {
            return { value: nextProps.value };
        }
        return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
        */
    }
    componentDidCatch(error, info) {
        this.setState({
            error: true
        })
    }
    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    }
    render(){
        if (this.state.error) return (<h1>에러 발생!</h1>);

        return(
            <div>
                <h1>카운트</h1>
                {this.state.number === 4 && <Problematic />  }
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                <span>{this.state.number}</span>
            </div>
        )
    }
}
export default Counter;
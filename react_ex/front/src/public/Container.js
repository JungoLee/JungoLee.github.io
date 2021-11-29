import React,{ Component } from 'react';
import cls from "./pb.module.scss";
import Main from "../view/Main";
import Portfolio from "../view/Portfolio";
import Gallery from "../view/Gallery";

const components = {
    Main:Main,
    Portfolio:Portfolio,
    Gallery:Gallery,
}

class Container extends Component {

    render(){
        const SpecialComp = components[this.props.page];
        return(
            <div className={cls.container}>
                Container
                <SpecialComp></SpecialComp>
                <Counter></Counter>
            </div>
        );
    }
}

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: new Date().toLocaleTimeString("ko-KR"),
            delay: 1000,
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, this.state.delay);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.delay !== this.state.delay) {
        clearInterval(this.interval);
        this.interval = setInterval(this.tick, this.state.delay);
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    tick = () => {
        this.setState({
            count: new Date().toLocaleTimeString("ko-KR")
        });
    }

    render() {
        return (
        <div>
            <h1>{this.state.count}</h1>
        </div>
        );
    }
    }

export default Container;
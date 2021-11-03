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
                <p>{this.props.date}</p>
            </div>
        );
    }
}

export default Container;
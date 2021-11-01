import React,{ Component } from 'react';
import cls from "./pb.module.scss";
import Main from "../view/Main.js";
import Gallery from "../view/Gallery.js";

class Container extends Component {

    render(){
        console.log(new Main.constructor().name === this.props.page)
        console.log()

        return(
            <div className={cls.container}>
                Container

            </div>
        );
    }
}

export default Container;
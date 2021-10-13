import React,{ Component } from 'react';
import cls from './pb.module.scss';
class Header extends Component {
    render(){
        return(
            <div className={cls.header}>
                <h1 className={'special ' + cls.logo}>
                    <button type="button" className={cls.home_link}>Jungo</button>
                </h1>
            </div>
        );
    }
}

export default Header;
import React,{ Component } from 'react';
import cls from './pb.module.scss';
class Nav extends Component {

    render(){
        const lists = this.props.lists;
        const listsMap = lists.map(list => {
            if(list.class == "undefined" || list.class == undefined) list.class = "";
            return <li class={cls.first_depth}><a href={list.hrefs} className={cls.depth_link + " " + list.class}>{list.text}</a></li>
        });
        return(
            <ul className={cls.nav_wrapper}>
                {listsMap}

            </ul>
        );
    }
}
class Header extends Component {
    render(){
        return(
            <div className={cls.header}>

                <h1 className={'special ' + cls.logo}>
                    <a href="/" className={cls.home_link}>Jungo</a>
                </h1>

                <Nav lists={[
                    {text:"Portfolio",hrefs:"/portfolio"},
                    {text:"소개",hrefs:"/introduce"},
                    {text:"갤러리",hrefs:"/Gallery",class:"Gallery"},
                    ]}>
                </Nav>
            </div>
        );
    }
}

export default Header;
import React,{ Component } from 'react';
import cls from './pb.module.scss';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            lists:[
                    {text:"Portfolio",page:"Portfolio"},
                    {text:"소개",page:"Main"},
                    {text:"갤러리",page:"Gallery",class:"Gallery"},
                ],
        }
    }
    render(){

        const lists = this.state.lists;
        const listsMap = lists.map(list => {
            if(list.class === "undefined" || list.class === undefined) list.class = "";
            return (
                <li key={list.text} class={cls.first_depth}>
                    <a
                        href={list.page}
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangePage({_page:list.page});
                        }.bind(this)}
                        className={cls.depth_link + " " + list.class}>{list.text}
                    </a>
                </li>
            )

        });
        return(
            <ul className={cls.nav_wrapper}>
                {listsMap}
                <li key="dateGet" class={cls.first_depth}>
                    <a
                        href="#"
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangePage({_date:new Date().toString()});

                        }.bind(this)}
                        className={cls.depth_link + " " }>날짜변경
                    </a>
                </li>
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

                <Nav page={this.props.page} onChangePage={function(obj){
                    this.props.onChangePage(obj);
                }.bind(this)}></Nav>
            </div>
        );
    }
}

export default Header;
import React,{ Component } from 'react';
import Container from './Container';
import Header from './Header';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:"Main",
            date: new Date().toString(),
        }
    }

    render(){
        return(

            <div class="wrap">
                <Header page={this.state.page} onChangePage={function(obj){
                    this.setState({
                        page:obj._page == undefined ? this.state.page : obj._page,
                        date:obj._date == undefined ? this.state.date : obj._date,
                    });
                }.bind(this)}></Header>
                <Container page={this.state.page} date={this.state.date}></Container>
            </div>
        );
    }
}

export default App;
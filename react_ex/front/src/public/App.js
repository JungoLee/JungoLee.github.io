import React,{ Component } from 'react';
import Container from './Container';
import Header from './Header';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:"Main",
        }
    }

    render(){
        return(
            <div class="wrap">
                <Header onChangePage={function(_page){
                    this.setState({
                        page:_page
                    });
                }.bind(this)}></Header>
                <Container page={this.state.page}></Container>
            </div>
        );
    }
}

export default App;
import React,{ Component } from 'react';
import Container from './Container';
import Header from './Header';


class App extends Component {
    render(){
        return(
            <div class="wrap">
                <Header></Header>
                <Container></Container>
            </div>
        );
    }
}

export default App;
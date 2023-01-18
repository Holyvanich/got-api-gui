import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css'

export default class App extends Component {
    
    constructor() {
        super();
        this.toggleRandomComponent()
        this.state = {
            toggle: true,
        }
        this.toggleRandomComponent = this.toggleRandomComponent.bind(this);
    }

    

    toggleRandomComponent() {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
      }

    render() {
            return (
                <> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                            {this.state.toggle && <RandomChar/>}
                                <button 
                                onClick={this.toggleRandomComponent}
                                className='toggle-random'>
                                Toggle {this.state.toggle ? 'OFF' : 'ON'} random character</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='6'>
                                <ItemList />
                            </Col>
                            <Col md='6'>
                                <CharDetails />
                            </Col>
                        </Row>
                    </Container>
                </>
            );
        };
}
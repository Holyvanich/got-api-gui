import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage/characterPage';
import BookPage from '../pages/bookPage/bookPage';
import HousePage from '../pages/housePage/housePage';
import gotSercive from '../../sevices/gotService';
import './app.css'


export default class App extends Component {
    
    constructor() {
        super();
        this.toggleRandomComponent = this.toggleRandomComponent.bind(this);
    }

    gotSercive = new gotSercive();

    state = {
        toggle: true,
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
                        <CharacterPage/>
                        <BookPage/>
                        <HousePage/>
                    </Container>
                </>
            );
        };
}
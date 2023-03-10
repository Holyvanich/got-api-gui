import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../sevices/gotService';
import Spinner from '../spinner'
export default class RandomChar extends Component {

    gotService = new gotService();
    state = {
        char: {},
        loading: true,
    }

    componentDidMount() {
        this.updateChar()
        this.timerId = setInterval(this.updateChar, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    }

    updateChar = () => {
        const id = Math.floor(Math.random()*140 + 10);
        this.gotService.getCharacter(id)
            .then(res => {this.onCharLoaded(res)}
            )
    }

    render() {
        const {char, loading} = this.state;

        const content = loading ? <Spinner/> : <View char={char}/>;
        
        return (
            <div className="random-block rounded">
                {content}
            </div>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
                </>
    )
}
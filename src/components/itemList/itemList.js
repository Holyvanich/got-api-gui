import React, {Component} from 'react';
import './itemList.css';
import gotSercive from '../../sevices/gotService';
import Spinner from '../spinner';
export default class ItemList extends Component {

    gotSercive = new gotSercive();

    state = {
        charList: null,
        selectedChar: null,
    }

    componentDidMount() {
        this.gotSercive.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    } 

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li
                    key={i}
                    className='list-group-item'
                    onClick={ () => this.props.onCharSelected(this.gotSercive.page * 10 - 9 + i)}>
                    {item.name}
                </li>
            )
        })
    }

    render() {
        const {charList} = this.state;

        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
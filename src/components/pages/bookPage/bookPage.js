import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import './bookPage'
import gotSercive from '../../../sevices/gotService';
import RowBlock from '../../rowBlock';

export default class bookPage extends Component {
    gotSercive = new gotSercive();

    state = {
        selectedBook: null
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    render() {

        const itemList = (
                <ItemList 
                    onItemSelected={this.onItemSelected}
                    getData={this.gotSercive.getAllBooks}
                    renderItem={(item) => `${item.name}`}
                    page={this.gotSercive.pageBook}
                />
        )

        const charDetails = (
            <ItemDetails 
            itemId={this.state.selectedBook}
            getData={this.gotSercive.getBook}
            label={'book'}>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )

        return (
           <RowBlock left={itemList} right={charDetails}/>
        )
    }
}
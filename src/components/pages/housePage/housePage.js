import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import './housePage'
import gotSercive from '../../../sevices/gotService';
import RowBlock from '../../rowBlock';

export default class housePage extends Component {
    gotSercive = new gotSercive();

    state = {
        selectedHouse: null
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }

    render() {

        const itemList = (
                <ItemList 
                    onItemSelected={this.onItemSelected}
                    getData={this.gotSercive.getAllHouses}
                    renderItem={(item) => `${item.name}`}
                    page={this.gotSercive.pageHouse}
                />
        )

        const charDetails = (
            <ItemDetails 
            itemId={this.state.selectedHouse}
            getData={this.gotSercive.getHouse}
            label={'house'}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='founded' label='Founded'/>
            </ItemDetails>
        )

        return (
           <RowBlock left={itemList} right={charDetails}/>
        )
    }
}
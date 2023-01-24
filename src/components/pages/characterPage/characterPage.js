import React, {Component} from 'react';
import ItemList from '../../itemList';
import CharDetails, {Field} from '../../itemDetails';
import './characterPage'
import gotSercive from '../../../sevices/gotService';
import RowBlock from '../../rowBlock';

export default class characterPage extends Component {
    gotSercive = new gotSercive();

    state = {
        selectedChar: null
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {

        const itemList = (
                <ItemList 
                    onItemSelected={this.onItemSelected}
                    getData={this.gotSercive.getAllCharacters}
                    renderItem={(item) => `${item.name} (${item.gender})`}
                    page={this.gotSercive.pageChar}
                />
        )

        const charDetails = (
            <CharDetails 
            itemId={this.state.selectedChar}
            getData={this.gotSercive.getCharacter}
            label={'character'}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </CharDetails>
        )

        return (
           <RowBlock left={itemList} right={charDetails}/>
        )
    }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Grid, Dropdown } from 'semantic-ui-react';

import { updateConcession } from '../actions/updateConcession';

/*const roomOptions = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
]*/

const priceOptions = [
  { key: 1, text: '20-50', value: '20-50' },
  { key: 2, text: '51-70', value: '51-70' },
  { key: 3, text: '71-100', value: '71-100' },
  { key: 4, text: '101-150', value: '101-150' },
  { key: 5, text: '151-200', value: '151-200' },
]

const locationOptions = [
  { key: 1, text: 'Mornington', value: 'Mornington' },
  { key: 2, text: 'Hastings', value: 'Hastings' },
  { key: 3, text: 'Frankston', value: 'Frankston' },
  { key: 4, text: 'Sorrento', value: 'Sorrento' },
]

export const HOUSEKEEPING = 'Housekeeping';
export const CLEANING_DISHES = 'Cleaning dishes';
export const CLEANING_TOILETS = 'Cleaning toilets';
export const COOKING = 'Cooking';

const choreOptions = [
  { key: 1, text: HOUSEKEEPING, value: HOUSEKEEPING },
  { key: 2, text: CLEANING_DISHES, value: CLEANING_DISHES },
  { key: 3, text: CLEANING_TOILETS, value: CLEANING_TOILETS },
  { key: 4, text: COOKING, value: COOKING, },
]

class FilterHeaders extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleConcession = this.handleConcession.bind(this);
        this.printLabel = this.printLabel.bind(this);
    }

    handleConcession(event, { value }) {
        this.props.updateConcession(value);
    }

    printLabel(event, { value }) {
        console.log(value);
    }

    render() {
        return(
            <Grid centered padded columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <Dropdown placeholder='Price range'
                                  fluid
                                  selection
                                  options={priceOptions}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown placeholder='Nearest town'
                                  fluid
                                  selection
                                  options={locationOptions}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown placeholder='Chores'
                                  multiple
                                  fluid
                                  selection
                                  options={choreOptions}
                                  onChange={this.handleConcession}
                                  onClick={this.printLabel}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        houses: state.houses
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { updateConcession: updateConcession }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterHeaders);

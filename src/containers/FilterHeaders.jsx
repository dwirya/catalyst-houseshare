import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Grid, Dropdown } from 'semantic-ui-react';

import { updateConcession } from '../actions/updateConcession';

import {
    HOUSEKEEPING,
    WASHINGDISHES,
    WASHINGCLOTHES,
    WASHINGTOILET,
    COOKING,
    GROCERY,
    GARDENING
} from '../reducers/reducer_all_houses';

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

const choreOptions = [
  { key: 1, text: HOUSEKEEPING, value: HOUSEKEEPING },
  { key: 2, text: WASHINGDISHES, value: WASHINGDISHES },
  { key: 3, text: WASHINGCLOTHES, value: WASHINGCLOTHES },
  { key: 4, text: WASHINGTOILET, value: WASHINGTOILET },
  { key: 5, text: COOKING, value: COOKING },
  { key: 6, text: GROCERY, value: GROCERY },
  { key: 7, text: GARDENING, value: GARDENING }
]


class FilterHeaders extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleConcession = this.handleConcession.bind(this);
    }

    handleConcession(event, { value }) {
        this.props.updateConcession(value);
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
                                  closeOnChange
                                  value={this.props.selectedChores}
                                  options={choreOptions}
                                  onChange={this.handleConcession}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        houses: state.houses,
        selectedChores: state.selectedChores
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { updateConcession: updateConcession }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterHeaders);

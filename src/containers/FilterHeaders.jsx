import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Checkbox, Grid, Label, Segment, Dropdown } from 'semantic-ui-react';

import { selectChore } from '../actions/selectChore';

const roomOptions = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
]

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
  { key: 1, text: 'houseKeeping', value: 'houseKeeping' },
  { key: 2, text: 'cleanDishes', value: 'cleanDishes' },
  { key: 3, text: 'cleanToilets', value: 'cleanToilets' },
  { key: 4, text: 'cooking', value: 'cooking' },
]

export default class FilterHeaders extends Component {

    render() {
        return(
            <Grid centered padded columns={4}>
                <Grid.Row>
                    <Grid.Column>
                        <Dropdown placeholder='Number of rooms'
                                  fluid
                                  selection
                                  options={roomOptions}
                        />
                    </Grid.Column>
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
    return bindActionCreators( { selectChore: selectChore }, dispatch)
}

// export default connect(mapStateToProps, mapDispatchToProps)(HouseList);

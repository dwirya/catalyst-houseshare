import React, { Component } from 'react';
import { Checkbox, Grid, Label, Segment, Dropdown } from 'semantic-ui-react';

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
  { key: 1, text: 'House Keeping', value: 'House Keeping' },
  { key: 2, text: 'Clean Dishes', value: 'Clean Dishes' },
  { key: 3, text: 'Clean Toilets', value: 'Clean Toilets' },
  { key: 4, text: 'Cooking', value: 'Cooking' },
  { key: 5, text: 'Buy Groceries', value: 'Buy Groceries' },
  { key: 6, text: 'Do Laundry', value: 'Do Laundry' },
  { key: 7, text: 'Gardening', value: 'Gardening' },
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
                                  // renderLabel={renderLabel}
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

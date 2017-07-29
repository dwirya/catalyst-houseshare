import React, { Component } from 'react';
import { Grid, Label, Segment, Dropdown } from 'semantic-ui-react';

const roomOptions = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
]

const priceOptions = [

]

const locationOptions = [
  { key: 1, text: 'Mornington', value: 'Mornington' },
  { key: 2, text: 'Hastings', value: 'Hastings' },
  { key: 3, text: 'Frankston', value: 'Frankston' },
  { key: 4, text: 'Sorrento', value: 'Sorrento' },
]

export default class FilterHeaders extends Component {

    render() {
        return(
            <Grid centered padded columns={3}>
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
                </Grid.Row>
            </Grid>
        )
    }
}
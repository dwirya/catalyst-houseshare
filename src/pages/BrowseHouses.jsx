import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import HouseList from '../containers/HouseList';
import FilterHeaders from '../components/FilterHeaders';


export default class BrowseHouses extends Component {
  render() {
    return (
      <div>
        <Grid stackable padded columns={2}>
          <Grid.Column width={10}>
            <FilterHeaders />
            <HouseList />
          </Grid.Column>
          <Grid.Column width={6}>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}


;

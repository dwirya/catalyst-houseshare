import React, { Component } from 'react';
import { Divider, Grid, Container } from 'semantic-ui-react';

import NavigationHeader from '../components/NavigationHeader';
import HouseList from '../containers/HouseList';
import FilterHeaders from '../containers/FilterHeaders';


export default class BrowseHouses extends Component {
  render() {
    return (
      <div>
        <Container>
          <NavigationHeader />
          <Divider />
          <Grid stackable padded columns={2}>
            <Grid.Column width={10}>
              <FilterHeaders />
              <HouseList />
            </Grid.Column>
            <Grid.Column width={6}>
            </Grid.Column>
          </Grid>
        </Container>  
      </div>
    )
  }
}

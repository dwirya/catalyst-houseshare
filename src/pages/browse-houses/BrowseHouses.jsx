import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import HousePreview from '../../containers/HousePreview';
import FilterHeaders from './FilterHeaders';

export default class BrowseHouses extends Component {
  render() {
    return (
      <div>
        <FilterHeaders />
        <Grid stackable padded columns={2}>
          <Grid.Column width={10}>
            <Grid doubling columns={2}>
              <Grid.Column>
                <HousePreview />
              </Grid.Column>  
            </Grid>
            
          </Grid.Column>
          <Grid.Column width={6}>
          </Grid.Column>
        </Grid>
      </div>  
    )
  }
}


;

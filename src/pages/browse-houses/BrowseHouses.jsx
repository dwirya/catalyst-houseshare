import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import HousePreview from '../../containers/HousePreview';
import FilterHeaders from './FilterHeaders';

const HousePreviewStyle = {
  marginLeft: '3rem'
}

export default class BrowseHouses extends Component {
  render() {
    return (
      <div>
        <Grid stackable padded columns={2}>
          <Grid.Column width={10}>
            <FilterHeaders />
            <Grid doubling columns={2}>
              <Grid.Column>
                <div style={ HousePreviewStyle }>
                  <HousePreview />
                </div>  
              </Grid.Column>
              <Grid.Column>
                <div style={ HousePreviewStyle }>
                  <HousePreview />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div style={ HousePreviewStyle }>
                  <HousePreview />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div style={ HousePreviewStyle }>
                  <HousePreview />
                </div>
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

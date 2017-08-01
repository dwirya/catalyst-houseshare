import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import HouseDetail from '../components/HouseDetail';


export default class HouseInfo extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column>
            <HouseDetail />
          </Grid.Column>
        </Grid>
      </div>

    )
  }
};

import React, { Component } from 'react';
import { Divider, Grid } from 'semantic-ui-react';

import NavigationHeader from '../components/NavigationHeader';
import AddHouseDetail from '../components/AddHouseDetail';


export default class AddHouse extends Component {
  render() {
    return (
      <div>
        <NavigationHeader />
        <Divider />
        <AddHouseDetail />
      </div>

    )
  }
};

import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

import NavigationHeader from '../components/NavigationHeader';
import HouseDetail from '../containers/HouseDetail';


export default class HouseInfo extends Component {
  render() {
    return (
      <div>
        <NavigationHeader />
        <Divider />
        <HouseDetail />
      </div>

    )
  }
};

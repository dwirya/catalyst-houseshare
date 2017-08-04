import React, { Component } from 'react';
import { Divider, Container } from 'semantic-ui-react';

import NavigationHeader from '../components/NavigationHeader';
import HouseDetail from '../containers/HouseDetail';


export default class HouseInfo extends Component {
  render() {
    return (
      <div>
        <Container>
          <NavigationHeader />
          <Divider />
          <HouseDetail />
        </Container>
      </div>

    )
  }
};

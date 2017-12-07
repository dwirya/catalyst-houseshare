import React, { Component } from 'react';
import { Divider, Container } from 'semantic-ui-react';

import NavigationHeader from '../components/NavigationHeader';
import AddHouseDetail from '../containers/AddHouseDetail';


export default class RegisterHouse extends Component {
  render() {
    return (
      <div>
        <Container>
          <NavigationHeader />
          <Divider />
          <AddHouseDetail />
        </Container>
      </div>
    )
  }
};

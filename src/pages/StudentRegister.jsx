import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';

import NavigationHeader from '../components/NavigationHeader';
import StudentRegisterDetail from '../containers/StudentRegisterDetail';


export default class StudentRegister extends Component {
  render() {
    return (
      <div>
        <Container>
          <NavigationHeader />
          <Divider />
          <StudentRegisterDetail />
        </Container>
      </div>

    )
  }
};

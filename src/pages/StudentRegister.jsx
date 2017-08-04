import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

import NavigationHeader from '../components/NavigationHeader';
import StudentRegisterDetail from '../containers/StudentRegisterDetail';


export default class StudentRegister extends Component {
  render() {
    return (
      <div>
        <NavigationHeader />
        <Divider />
        <StudentRegisterDetail />
      </div>

    )
  }
};

import React, { Component } from 'react';

import HousePreview from '../../containers/HousePreview';
import LandingSection from '../../components/LandingSection';
import NavigationHeader from '../../pages/home/NavigationHeader';


export default class Home extends React.Component {

  render() {
      return(
        <NavigationHeader />
        <LandingSection />
      )
    }
  }
;

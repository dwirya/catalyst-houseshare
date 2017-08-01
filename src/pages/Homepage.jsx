import React, { Component } from 'react';

import HousePreview from '../containers/HousePreview';
import LandingSection from '../components/LandingSection';
import NavigationHeader from '../components/NavigationHeader';


export default class Home extends React.Component {

  render() {
      return(
        <div>
          <NavigationHeader />
          <LandingSection />
        </div>
      )
    }
  }
;

import React, { Component } from 'react';

import LandingSection from '../components/LandingSection';
import NavigationHeader from '../components/NavigationHeader';


export default class Home extends Component {

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

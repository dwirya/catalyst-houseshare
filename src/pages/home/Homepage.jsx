import React, { Component } from 'react';

import HousePreview from '../../containers/HousePreview.jsx';
import LandingSection from '../../components/LandingSection';
import NavBar from '../../pages/home/NavigationHeader.jsx';

// var {Route, Router, IndexRoute, hashHistory} = require('react-router');


export default class Home extends React.Component {



  // renderPreviews() {
  //   var array = [1,2,3];
  //   return array.map(() => {
  //     return (
  //       <div className='col-md-4'>
  //         <HousePreview />
  //       </div>
  //     )
  //   })
  // }

  render() {
      return(
        <div>
          <NavBar />
          <LandingSection />
        </div>
      )
    }
  }

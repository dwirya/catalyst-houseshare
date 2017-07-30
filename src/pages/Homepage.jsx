import React, { Component } from 'react';

import HousePreview from "../containers/HousePreview.jsx";
import BrowseHouses from '../components/LandingSection';

// var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// App css
// require('style!css!sass!applicationStyles')


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
        <BrowseHouses />

      )
    }
  }

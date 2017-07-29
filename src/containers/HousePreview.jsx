import React, { Component } from 'react';
import { Grid, Label, Segment } from 'semantic-ui-react';

import BeachPic from '../media/sorrento-bay.jpg';
import House1 from '../media/Houses/11-Max-Avenue-St.jpg';


const PreviewStyle = {
    height: '20rem',
    width: '30rem',
    backgroundColor: 'blue'
}

const HouseCardStyle = {
    height: '25rem',
    margin: '1rem',
    width: '30rem'
    
}

const HouseCoverStyle = {
    backgroundImage: 'url(' + House1 + ')',
    backgroundSize: 'cover',
    height: '15rem',
    marginTop: '1rem',
    width: '100%'
}

const HouseInfoStyle = {
    marginTop: '1.5rem'
}

export default class HousePreview extends Component {
  
  
  
  render() {
    return (
        <div className="house-card ui raised segment" style={ HouseCardStyle }>
          <a className="ui orange right ribbon label">1km away</a>

          <div className="house-cover-pic" style= { HouseCoverStyle }>
          </div>

          <div className="house-info" style={ HouseInfoStyle }>
              <div className="ui two column center aligned padded grid">
                <div className="row">
                  <div className="six wide teal column">
                    <p>$120 pw</p>
                  </div>
                  <div className="ten wide black column">
                    <p>Available now !</p>
                  </div>
                </div>
              </div>
          </div>
          
        </div>
    )
  }
}


;

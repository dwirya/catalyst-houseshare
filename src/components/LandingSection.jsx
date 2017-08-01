import React, { Component } from 'react';
import { Image, List, Table, Header, Grid, Dropdown, Segment } from 'semantic-ui-react';

import SunsetPic from '../media/mornington-sunset.jpg';

const stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }  ];

export default class LandingSection extends Component {
    render() {
        return (
          <div>

            {/* <Dropdown placeholder='State' fluid multiple search selection options={stateOptions} /> */}

            <Image src={SunsetPic} fluid/>
          </div>
        )
    }
}

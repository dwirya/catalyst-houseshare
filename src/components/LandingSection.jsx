import React, { Component } from 'react';
import { Image, List, Table, Header, Grid, Divider, Segment } from 'semantic-ui-react';

import SunsetPic from '../media/mornington-sunset.jpg';

export default class LandingSection extends Component {
    render() {
        return (
          <div>
            <Image src={SunsetPic} fluid/>
          </div>
        )
    }
}

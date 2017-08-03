import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

import SunsetPic from '../media/mornington-sunset.jpg';

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

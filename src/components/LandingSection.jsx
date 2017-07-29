import React, { Component } from 'react';

import SunrisePic from '../media/mornington-sunrise.jpg';

const Style = {
    backgroundImage: 'url(' + SunrisePic  + ')',
    height: '35rem',
    width: '100%',
    
}

export default class LandingSection extends Component {
    render() {
        return (
            <div style={Style}>
            </div>
        )
    }
}
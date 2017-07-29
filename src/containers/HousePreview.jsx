import React, { Component } from 'react';
import { Card, Image, Label, Segment, Header } from 'semantic-ui-react';

import House1 from '../media/Houses/11-Max-Avenue-St.jpg';


const HouseCardStyle = {
  margin: '1rem'
}

const extra = (
  <div className='ui two buttons'>
    <Label color='teal' tag>$120 pw</Label>
    <Label color='red' tag>Available now</Label>
  </div>
)

export default class HousePreview extends Component {

  render() {
    return (
      <div style={ HouseCardStyle }>
        <Segment compact>
          <Label as='a' color='orange' ribbon='right'>1km away</Label>
          <Card
            href="#"
            as={ Segment }
            image={ House1 }
            header='11 Max Avenue St.'
            description='A very comfy place near Frankston'
            extra={extra}>
          </Card>
        </Segment>  
      </div>  
    )
  }
}

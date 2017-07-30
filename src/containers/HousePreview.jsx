import React, { Component } from 'react';
import { Grid, Card, Image, Label, Segment, Header, Icon } from 'semantic-ui-react';

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
          <Label attached='top'><Icon name='bath' size='huge' /></Label>
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

// <Label as='a' color='teal' ribbon='right'>$120 pw</Label>
//           <Label as='a' color='red' ribbon='right'>Available now</Label>

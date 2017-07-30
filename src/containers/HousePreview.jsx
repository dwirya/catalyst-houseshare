import React, { Component } from 'react';
import { Grid, Card, Image, Label, Segment, Header, Icon } from 'semantic-ui-react';



const HouseCardStyle = {
  margin: '1rem'
}

export default class HousePreview extends Component {

  getExtras(house) {
    return (
      <div className='ui two buttons'>
        <Label color='teal' tag>{house.price}</Label>
        <Label color='red' tag>Available {house.available}</Label>
      </div>
    )
  }

  render() {
    return (
      <div style={ HouseCardStyle }>
        <Segment compact>
          <Label attached='top'><Icon name='bath' size='huge' /></Label>
          <Label as='a' color='orange' ribbon='right'>1km away</Label>
          
          <Card
            href="#"
            as={ Segment }
            image={ this.props.house.image }
            header={this.props.house.address}
            description={this.props.house.description}
            extra={this.getExtras(this.props.house)}>
          </Card>
        </Segment>
      </div>  
    )
  }
}

import React, { Component } from 'react';
import { Grid, Card, Image, Label, Segment, Header, Icon, Divider } from 'semantic-ui-react';

import House1 from '../media/Houses/11-Max-Avenue-St.jpg';
import WashClothes from '../media/choreIcons/icons8-Clothes-50.png'
import WashDishes from '../media/choreIcons/icons8-Dishwasher-50.png'
import Housekeeping from '../media/choreIcons/icons8-Housekeeping-50.png'
import Sterilization from '../media/choreIcons/icons8-Sterilization-50.png'
import WashToilet from '../media/choreIcons/icons8-Toilet Paper-50.png'
import VacuumHouse from '../media/choreIcons/icons8-Vacuum Cleaner-50.png'


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
          <Label attached='top'>

            <Image.Group size='mini'>
              <Image src={WashClothes} />
              <Image src={WashDishes} />
              <Image src={Housekeeping} />
              <Image src={Sterilization} />
              <Image src={WashToilet} />
              <Image src={VacuumHouse} />
            </Image.Group>

          </Label>
          <br />
          <br />

          <Label as='a' color='orange' ribbon='right'>
            120pw
          </Label>


          <Card
            raised

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

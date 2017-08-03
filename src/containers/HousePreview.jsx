import React, { Component } from 'react';
import { Form, Grid, Card, Image, Label, 
        Segment, Header, Icon, Divider,
        Transition } from 'semantic-ui-react';

import House1 from '../media/Houses/11-Max-Avenue-St.jpg';

import WashClothes from '../media/choreIcons/icons8-Clothes-50.png';
import WashDishes from '../media/choreIcons/icons8-Dishwasher-50.png';
import Housekeeping from '../media/choreIcons/icons8-Housekeeping-50.png';
import Sterilization from '../media/choreIcons/icons8-Sterilization-50.png';
import WashToilet from '../media/choreIcons/icons8-Toilet Paper-50.png';
import VacuumHouse from '../media/choreIcons/icons8-Vacuum Cleaner-50.png';

import Bathroom from '../media/choreIcons/black-bathroom-icon.png';
import Cooking from '../media/choreIcons/black-cooking-icon.png';
import Gardening from '../media/choreIcons/black-gardening-icon.png';
import Grocery from '../media/choreIcons/black-grocery-icon.png';
import Rent from '../media/choreIcons/black-house-icon.png';
import Location from '../media/choreIcons/black-location-icon.png';
import Availability from '../media/choreIcons/green-tick-icon.png';
import Other from '../media/choreIcons/other-icon.png';

const HouseCardStyle = {
  margin: '1rem'
}

const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce'];

export default class HousePreview extends Component {
  
  state = { animation: 'tada', duration: 300, visible: true };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  componentWillReceiveProps() {
    this.toggleVisibility();
  }

  getExtras(price, availability) {
    return (
      <div className='ui two buttons'>
        <Label color='teal' tag><p>${price} pw</p></Label>
        <Label color='red' tag>Available {availability}</Label>
      </div>
    )
  }
  
  render() {
    const weeklyRate = this.props.house.price - this.props.concession;
    const { animation, duration, visible } = this.state

    return (
      <div style={ HouseCardStyle }>
        <Segment compact>
          <Label attached='top'>

            <Image.Group size='mini'>
              <Image src={Housekeeping} />
              <Image src={WashDishes} />
              <Image src={WashToilet} />
              <Image src={Cooking} />
              <Image src={Grocery} />
              <Image src={WashClothes} />
              <Image src={Gardening} />
            </Image.Group>

          </Label>
          <br />
          <br />

          <Transition animation={animation} duration={duration} visible={visible}>
            <Label as='a' color='orange' ribbon='right'>
              <p>${weeklyRate} pw</p>
            </Label>
          </Transition>

          <Card
            raised

            href="#"
            as={ Segment }
            image={ this.props.house.image }
            header={this.props.house.address}
            description={this.props.house.description}
            extra={this.getExtras(weeklyRate, this.props.house.available)}>
          </Card>
          <Form.Button content='Run' onClick={this.toggleVisibility} />
        </Segment>
      </div>
    )
  }
}

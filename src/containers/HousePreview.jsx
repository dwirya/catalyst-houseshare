import React, { Component } from 'react';
import { Card, Image, Label, Segment, Transition, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import WashClothes from '../media/choreIcons/icons8-Clothes-50.png';
import WashDishes from '../media/choreIcons/icons8-Dishwasher-50.png';
import Housekeeping from '../media/choreIcons/icons8-Housekeeping-50.png';
import WashToilet from '../media/choreIcons/icons8-Toilet Paper-50.png';
import Cooking from '../media/choreIcons/black-cooking-icon.png';
import Gardening from '../media/choreIcons/black-gardening-icon.png';
import Grocery from '../media/choreIcons/black-grocery-icon.png';

import { getChoreImage } from './HouseDetail';

import { getWeeklyRate } from '../reducers/reducer_get_concession';

// const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce'];

export default class HousePreview extends Component {
  constructor(props) {
    super(props);
    this.renderChoresImages.bind(this);
  }

  state = { animation: 'flash', duration: 500, visible: true };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  componentWillReceiveProps() {
    this.toggleVisibility();
  }

  // shouldComponentUpdate(nextProps) {
  //   let previousRate = this.getWeeklyRate(this.props.house.chores, this.props.selectedChores);
  //   let nextRate = this.getWeeklyRate(nextProps.house.chores, nextProps.selectedChores);

  //   if (previousRate == nextRate) {
  //     this.toggleVisibility(false);
  //     return false;
  //   }

  //   this.toggleVisibility(true);
  //   return true;
  // }


  getExtras(availability) {
    return (
      <Button 
      label={{ basic: false, color: 'teal', pointing: 'right', content: 'Available ' + availability }} 
      icon='heart' 
      content='Message'
      color='blue' 
      labelPosition='left'
      floated='right' 
      />
    )
  }

  renderChoresImages(chores) {
    return chores.map((chore) => {
      return (
        <Image key={chore} src={getChoreImage(chore)} />
      )
    })
  }

  

  render() {

    // const weeklyRate = this.props.house.price - this.props.concession;
    const weeklyRate = getWeeklyRate(this.props.house.price,
      this.props.house.chores, this.props.selectedChores);
    const { animation, duration, visible } = this.state
    

    return (
        <Segment compact>
          <Label attached='top'>

            <Image.Group size='mini'>
              {/* <Image src={Housekeeping} />
              <Image src={WashDishes} />
              <Image src={WashToilet} />
              <Image src={Cooking} />
              <Image src={Grocery} />
              <Image src={WashClothes} />
              <Image src={Gardening} /> */}
              {this.renderChoresImages(this.props.house.chores)}
            </Image.Group>

          </Label>
          <br />
          <br />

          <Transition animation={animation} duration={duration} visible={visible}>
            <Label as='a' color='orange' ribbon='right'>
              <p>${weeklyRate} pw</p>
            </Label>
          </Transition>

          <Link to={`/house/${this.props.house.slug}`}>
            <Card
              as={ Segment }
              image={ this.props.house.image }
              header={this.props.house.address}
              description={this.props.house.description}
              extra={this.getExtras(this.props.house.available)}>
            </Card>
          </Link>
        </Segment>
    )
  }
}

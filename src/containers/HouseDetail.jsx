import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Checkbox, Item, Image, Table, Header, Grid } from 'semantic-ui-react';

import { getWeeklyRate } from '../reducers/reducer_get_concession';

/*import House1 from '../media/Houses/11-Max-Avenue-St.jpg';*/
import House2 from '../media/Houses/rosebudhouse1.jpg';
/*import House3 from '../media/Houses/rosebudhouse2.jpg';
import House4 from '../media/Houses/rosebudhouse3.jpg';
import House5 from '../media/Houses/rosebudhouse4.jpg';
import House6 from '../media/Houses/rosebudhouse5.jpg';
import House7 from '../media/Houses/rosebudhouse6.jpg';*/


import WashClothes from '../media/choreIcons/icons8-Clothes-50.png';
import WashDishes from '../media/choreIcons/icons8-Dishwasher-50.png';
import Housekeeping from '../media/choreIcons/icons8-Housekeeping-50.png';
import WashToilet from '../media/choreIcons/icons8-Toilet Paper-50.png';
import Cooking from '../media/choreIcons/black-cooking-icon.png';
import Gardening from '../media/choreIcons/black-gardening-icon.png';
import Grocery from '../media/choreIcons/black-grocery-icon.png';

import Bathroom from '../media/choreIcons/black-bathroom-icon.png';
import Rent from '../media/choreIcons/black-house-icon.png';
import Location from '../media/choreIcons/black-location-icon.png';
import Availability from '../media/choreIcons/green-tick-icon.png';
import Other from '../media/choreIcons/other-icon.png';

import {
  HOUSEKEEPING,
  WASHINGDISHES,
  WASHINGCLOTHES,
  WASHINGTOILET,
  COOKING,
  GROCERY,
  GARDENING
} from '../reducers/reducer_all_houses';

/*var imageStyle = {
  marginLeft:  '3rem',
  marginRight:  '3rem',
};*/

export const getChoreImage = (choreString) => {
  switch (choreString) {
    case HOUSEKEEPING:
      return Housekeeping;
    case WASHINGDISHES:
      return WashDishes;
    case WASHINGCLOTHES:
      return WashClothes;
    case WASHINGTOILET:
      return WashToilet;
    case COOKING:
      return Cooking;
    case GROCERY:
      return Grocery;
    case GARDENING:
      return Gardening;
  }
}


class HouseDetail extends Component {
    constructor(props) {
      super(props);
    }

    renderChoresList(chores) {
      return chores.map((chore) => {
        return (
          <Table.Row key={chore}>
            <Table.Cell>
              <Image src={getChoreImage(chore)} size='mini' />
              {chore}
            </Table.Cell>
          </Table.Row>
        )
      })
    }

    render() {
      const { address, chores, description, price, available, } = this.props.house
      const weeklyRate = getWeeklyRate(price, chores, this.props.selectedChores);
      return (
        <Container>
          <Header as='h1' floated='left'>Frankston</Header>
          <br/>


            <Image src={this.props.house.image} fluid />
            <Header as='h2'>House Details</Header>

            <Item.Group divided>
              <Item>
                <Item.Image size='mini' src={Rent} />
                <Item.Content verticalAlign='middle'>
                  Rent: {weeklyRate}pw
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='mini' src={Bathroom} />
                <Item.Content verticalAlign='middle'>
                  Bathroom: 2 shared
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='mini' src={Availability} />
                <Item.Content verticalAlign='middle'>
                  Availability: {available}
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='mini' src={Location} />
                <Item.Content verticalAlign='middle'>
                  Location: {address}
                </Item.Content>
              </Item>
            </Item.Group>

            <Header as='h2'>Chores that you need to do</Header>

              <Table basic='very'>
                <Table.Body>
                  {this.renderChoresList(chores)}
                </Table.Body>
              </Table>

            <Header as='h2'>Bills to be paid</Header>
            <br/>
            <Grid columns={4}>
              <Checkbox label='Electricity' defaultChecked readOnly/>
              <Checkbox label='Gas' defaultChecked readOnly/>
              <Checkbox label='Water' defaultChecked readOnly/>
              <Checkbox label='Internet' defaultChecked readOnly/>
            </Grid>
            <br/>

            <Header as='h2'>About the Owner</Header>

              <Table basic='very'>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      Name: Maya Aegns
                    </Table.Cell>
                    <Table.Cell>
                      Gender: Female
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Age: 65
                    </Table.Cell>
                    <Table.Cell>
                      Occupation: Retiree
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Drink: Once in a while
                    </Table.Cell>
                    <Table.Cell>
                      Smoke: Yea, sure Cancer
                    </Table.Cell>

                  </Table.Row>
                </Table.Body>
              </Table>
        </Container>
      )
    }
}


function mapStateToProps(state) {
  return {
    selectedChores: state.selectedChores
  }
}

export default connect(mapStateToProps)(HouseDetail);

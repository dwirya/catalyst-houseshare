import React, { Component } from 'react';
import { Container, Checkbox, Item, Icon, Image, Label, List, Table, Header, Grid, Divider, Segment } from 'semantic-ui-react';

import House1 from '../media/Houses/11-Max-Avenue-St.jpg';
import House2 from '../media/Houses/rosebudhouse1.jpg';
import House3 from '../media/Houses/rosebudhouse2.jpg';
import House4 from '../media/Houses/rosebudhouse3.jpg';
import House5 from '../media/Houses/rosebudhouse4.jpg';
import House6 from '../media/Houses/rosebudhouse5.jpg';
import House7 from '../media/Houses/rosebudhouse6.jpg';


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



var imageStyle = {
  marginLeft:  '3rem',
  marginRight:  '3rem',
};


export default class HouseDetail extends Component {
    render() {
        return (
          <Container clearing>
          {/* <Grid> */}
            {/* <Grid.Column> */}
              {/* <Segment.Group>

                <Segment> */}
                  <Header as='h1' floated='left'>Frankston</Header>
                <br/>
                  <Header as='h3' color='teal' size='s' floated='right'>2km away</Header>
                {/* </Segment> */}


                  <Image src={House2} fluid />


                {/* <Segment> */}
                  <Header as='h2'>House Details</Header>

                  <Item.Group divided>
                    <Item>
                      <Item.Image size='mini' src={Rent} />
                      <Item.Content verticalAlign='middle'>
                        Rent: 100pw
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
                        Availability: available from 10th Aug
                      </Item.Content>
                    </Item>

                    <Item>
                      <Item.Image size='mini' src={Location} />
                      <Item.Content verticalAlign='middle'>
                        Location: Unit 6/16-17 Bloom St, Frankston VIC 3199
                      </Item.Content>
                    </Item>
                  </Item.Group>


                  {/* <Item.Group>
                    <Item>
                      <Item.Content verticalAlign='middle'>
                        <Item.Header>
                          <Icon name='like' />
                          Veronika Ossi
                        </Item.Header>
                      </Item.Content>
                    </Item>
                  </Item.Group> */}



                  <Header as='h2'>Chores that you need to do</Header>



                    <Table basic='very'>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                            <Image src={Housekeeping} size='mini' />
                            Clean common area
                          </Table.Cell>
                          <Table.Cell>
                            <Image src={Gardening} size='mini' />
                            Gardening
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Image src={WashClothes} size='mini' />
                            Laundry
                          </Table.Cell>
                          <Table.Cell>
                            <Image src={Grocery} size='mini' />
                            Buy groceries
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Image src={WashDishes} size='mini' />
                            Washing dishes
                          </Table.Cell>
                          <Table.Cell>
                            <Image src={WashToilet} size='mini' />
                            Clean toilet
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Image src={Cooking} size='mini' />
                            Cooking
                          </Table.Cell>
                          <Table.Cell>
                            <Image src={Other} size='mini' />
                            Others
                          </Table.Cell>
                        </Table.Row>
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

                {/* </Segment>
              </Segment.Group> */}
            {/* </Grid.Column>
          </Grid> */}
          </Container>
        )
    }
}

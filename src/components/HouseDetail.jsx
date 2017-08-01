import React, { Component } from 'react';
import { Checkbox, Item, Icon, Image, Label, List, Table, Header, Grid, Divider, Segment } from 'semantic-ui-react';

import House1 from '../media/Houses/11-Max-Avenue-St.jpg';

var styles = {
  backgroundSize: '50% 20%',
  maxWidth: '100%',
  maxHeight: '30rem',
	// color:'red',
	// backgroundColor:'black',
	// fontWeight:'bold'
};


export default class HouseDetail extends Component {
    render() {
        return (
          <Grid>
            {/* <Grid.Column>
              <Header as='h1'></Header>
            </Grid.Column> */}
            <Grid.Column>
              <Segment.Group>

                <Segment>
                  <Header as='h1'>Suburb</Header>
                  <Header as='h4'>distance away from where?</Header>
                </Segment>
                <div>
                  {/* <img src={House1} style={styles}/> */}
                  <Image src={House1} fluid />
                </div>

                <Segment>
                  <Header as='h2'>House Details</Header>

                  <Item.Group divided>
                    <Item>
                      <Item.Image size='tiny' src={House1} />
                      <Item.Content verticalAlign='middle'>Rent</Item.Content>
                    </Item>

                    <Item>
                      <Item.Image size='tiny' src={House1} />
                      <Item.Content verticalAlign='middle'>Bathroom</Item.Content>
                    </Item>

                    <Item>
                      <Item.Image size='tiny' src={House1} />
                      <Item.Content content='Availability' verticalAlign='middle' />
                    </Item>

                    <Item>
                      <Item.Image size='tiny' src={House1} />
                      <Item.Content content='Location' verticalAlign='middle' />
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
                            <Image src={House1} size='tiny' />
                            Clean common area
                          </Table.Cell>
                          <Table.Cell>Gardening</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Laundry</Table.Cell>
                          <Table.Cell>Buy groceries</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Washing dishes</Table.Cell>
                          <Table.Cell>Clean toilet</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Cooking</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>

                  <Header as='h2'>Bills to be paid</Header>
                  <br/>
                  <Grid columns={4}>
                    <Checkbox label='Electricity' defaultChecked />
                    <Checkbox label='Gas' defaultChecked />
                    <Checkbox label='Water' defaultChecked />
                    <Checkbox label='Internet' defaultChecked />
                  </Grid>
                  <br/>

                  <Header as='h2'>About the Owner</Header>

                    <Table basic='very'>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>Name</Table.Cell>
                          <Table.Cell>Gender</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Age</Table.Cell>
                          <Table.Cell>Occupation</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Drink</Table.Cell>
                          <Table.Cell>Smoke</Table.Cell>

                        </Table.Row>
                      </Table.Body>
                    </Table>

                </Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid>
        )
    }
}

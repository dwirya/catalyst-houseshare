import React, { Component } from 'react';
import { Image, List, Table, Header, Grid, Divider, Segment } from 'semantic-ui-react';

import House1 from '../media/Houses/11-Max-Avenue-St.jpg';



export default class HouseDetail extends Component {
    render() {
        return (
          <Segment.Group>

            <Segment>
              <Header as='h1'>First Header</Header>
            </Segment>

            <Image src={House1} centered />

            <Segment>
              <Header as='h2'>Second Header</Header>
            </Segment>

            <Segment>
                <Table basic='very'>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Rent</Table.Cell>
                      <Table.Cell>Number of Rooms</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Bathroom</Table.Cell>
                      <Table.Cell>Location</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Availability</Table.Cell>

                    </Table.Row>
                  </Table.Body>
                </Table>
            </Segment>

            <Segment inverted>
              <Divider inverted />
              <Divider horizontal inverted>Horizontal</Divider>
            </Segment>

          </Segment.Group>
        )
    }
}

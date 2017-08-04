import React, { Component } from 'react';
import { Divider, Segment, Container, Header, Icon, Image, Label, Grid } from 'semantic-ui-react';

import SunsetPic from '../media/mornington-sunset.jpg';
import HomePagePic from '../media/homePagePic.jpg';

import HouseIcon from '../media/choreIcons/black-house-icon.png';
import HandGripIcon from '../media/choreIcons/handgrip-icon.png';
import CleanHouseIcon from '../media/choreIcons/icons8-Housekeeping-50.png';

export default class LandingSection extends Component {
    render() {
        return (
          <div>
            {/* <Header as='h2' icon textAlign='center'>
              <Icon name='home' circular />
              <Header.Content>
                Friends
              </Header.Content>
            </Header> */}
            <Image src={HomePagePic} fluid />
            <br/>
            <br/>
            <Container>
              <Grid padded='horizontally' centered divided columns={3} >
                <Grid.Column>
                  <Image src={HouseIcon} centered />
                  <Header as='h2' textAlign='center'>Homeowners list spaces and set prices</Header>
                </Grid.Column>
                <Grid.Column>
                  <Image src={CleanHouseIcon} centered/>
                  <Header as='h2' textAlign='center'>Students Set Chores to Offset Rental Fees</Header>
                </Grid.Column>
                <Grid.Column>
                  <Image src={HandGripIcon} centered/>
                  <Header as='h2' textAlign='center'>Homeowners get connected to potential buyers</Header>
                </Grid.Column>
              </Grid>
            </Container>
            <br/>
            <Divider />

            {/* <Segment style={{ padding: '0em' }} vertical> */}
            <Container style={{ backgroundColor: 'darkGrey' }}>
              <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                  <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as='h3'>"Paula has been a blessing to my home. I've been living alone for awhile and which so many spare rooms in my home, it would quickly gather dust. I'm glad Paula has been around to help and in exchange for it, I could give her a home and a proper education."</Header>
                    <Header as='h5'>Hui Min Yau</Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as='h3'>"Steve was a legend of a lad. Cleaning the gutters and going after all those hard to reach places. Feels good too to help send someone to school."</Header>
                    <Header as='h5'>Hui Min Yau</Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as='h3'>"Samantha is such a pleasure to have. Does not hesitate to go the extra mile and helps that she's a chatty and bright young girl. Never would have thought I'd bond with her so well. I feel young again!"</Header>
                    <Header as='h5'>Hui Min Yau</Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
            {/* </Segment> */}
            <br/>
            <br/>
            <br/>
          </div>
        )
    }
}

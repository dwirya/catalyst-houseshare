import React, { Component } from 'react';
import { Divider, Segment, Container, Header, Icon, Image, Label, Grid } from 'semantic-ui-react';

import SunsetPic from '../media/mornington-sunset.jpg';
import HomePagePic from '../media/homePagePic2.jpg';

// import pic1 from '';

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
              <Header as='h1' style={{ fontSize: '4em' }} textAlign='center' >How It Works</Header>
              <br/>
              <br/>
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
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* <Divider /> */}

            {/* style={{color: '#e24c3d'}}
            style={{ backgroundColor: '#ffe5aa' }}> */}

            {/* <Segment style={{ padding: '0em' }} vertical> */}
            <Container>
              <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                  <Container>
                    <Header as='h3' textAlign='center' >"Paula has been a blessing to my home. I've been living alone for awhile and which so many spare rooms in my home, it would quickly gather dust. I'm glad Paula has been around to help and in exchange for it, I could give her a home and a proper education."</Header>
                    <Header as='h5' textAlign='center' >Hui Min Yau</Header>
                    <br/>
                    <Header as='h3' textAlign='center' >"Steve was a legend of a lad. Cleaning the gutters and going after all those hard to reach places. Feels good too to help send someone to school."</Header>
                    <Header as='h5' textAlign='center' >Hui Min Yau</Header>
                    <br/>
                    <Header as='h3' textAlign='center' >"Samantha is such a pleasure to have. Does not hesitate to go the extra mile and helps that she's a chatty and bright young girl. Never would have thought I'd bond with her so well. I feel young again!"</Header>
                    <Header as='h5' textAlign='center' >Hui Min Yau</Header>
                  </Container>
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

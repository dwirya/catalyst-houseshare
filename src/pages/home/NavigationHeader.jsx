import React, { Component } from 'react';
import { Image, Header, Grid, Segment } from 'semantic-ui-react';

// import House1 from '../../media/Houses/11-Max-Avenue-St.jpg';


const Style = {
    width: '100%',
}

export default class NavigationHeader extends Component {

    render() {
        return(
          <div style={Style}>
            <Grid padded columns={4}>
                <Grid.Row>
                  <Grid.Column>
                    {/* <Image src={House1} size='small'/> */}
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h2'>
                      {/* <Image src={House1} /> */}
                      {' '}How It Works
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h2'>About Us</Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h2'>Student Living</Header>
                  </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        )
    }
}

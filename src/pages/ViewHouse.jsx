import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Divider, Container } from 'semantic-ui-react';

import NavigationHeader from '../components/NavigationHeader';
import HouseDetail from '../containers/HouseDetail';

class ViewHouse extends Component {
  render() {
    const houseHashedArray =  _.mapKeys(this.props.houses, 'slug');
    const house = houseHashedArray[this.props.match.params.slug];
    return (
      <div>
        <Container>
          <NavigationHeader />
          <Divider />
          <HouseDetail house={house} />
        </Container>
      </div>
    )
  }
};

function mapStateToProps(state) {
  // console.log(this.props)
  return {
    houses: state.houses
  };
}

export default connect(mapStateToProps)(ViewHouse);

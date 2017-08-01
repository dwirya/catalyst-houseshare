import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Grid } from 'semantic-ui-react';

import HousePreview from './HousePreview';

import { selectHouse } from '../actions/selectHouse';


const HousePreviewStyle = {
  marginLeft: '3rem'
}

class HouseList extends Component {

    renderList() {
        return this.props.houses.map((house) => {
            return (
                <Grid.Column>
                    <div style={ HousePreviewStyle }>
                    <HousePreview house={house} />
                    </div>  
                </Grid.Column>
            )
        })
    }

    render() {
        return (
            <Grid doubling columns={2}>
              {this.renderList()}
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        houses: state.houses
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { selectHouse: selectHouse }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseList);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Grid } from 'semantic-ui-react';

import HousePreview from './HousePreview';

import { selectHouse } from '../actions/selectHouse';


class HouseList extends Component {

    renderList() {
        return this.props.houses.map((house) => {
            return (
                <Grid.Column key={house.slug}>
                    <div>
                    <HousePreview house={house} selectedChores={this.props.selectedChores} />
                    </div>  
                </Grid.Column>
            )
        })
    }

    render() {
        return (
            <Grid doubling columns={3}>
              {this.renderList()}
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        houses: state.houses,
        selectedChores: state.selectedChores
    }
}

export default connect(mapStateToProps)(HouseList);


import React, { Component } from 'react';
import { Image, Header, Grid, Segment, Menu } from 'semantic-ui-react';

import logo2 from '../../media/logo1.png';

export default class NavigationHeader extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
      return(
        <Menu secondary stackable widths={4}>
          <Menu.Item>
            <Image src = {logo2} size = 'tiny' />
          </Menu.Item>

          <Menu.Item
            header
            // name='testimonials'
            // active={activeItem === 'testimonials'}
            onClick={this.handleItemClick}
          >
            {/* Testimonials */}
          </Menu.Item>

          <Menu.Item
            header
            name='find-a-place'
            // active={activeItem === 'find-a-place'}
            onClick={this.handleItemClick}
          >
            Find A Place
          </Menu.Item>

          {/* <Menu.Item
            header
            name='sign-in'
            // active={activeItem === 'sign-in'}
            onClick={this.handleItemClick}
          >
            Sign-in
          </Menu.Item> */}

          <Menu.Item
            header
            name='list-a-place'
            // active={activeItem === 'sign-in'}
            onClick={this.handleItemClick}
          >
            List A Place
          </Menu.Item>
        </Menu>
      )
    }
}

import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Image, Header, Grid, Segment, Menu } from 'semantic-ui-react';

import logo2 from '../media/logo1.png';

export default class NavigationHeader extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state
    
      return(
        <Menu secondary stackable widths={5}>
          <Menu.Item>
            <Image src = {logo2} size = 'tiny' />
          </Menu.Item>

          <Menu.Item
            header
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            href='/'
          >
            {/* Home */}
            Home
          </Menu.Item>

          <Menu.Item
            header
            name='find-a-place'
            active={activeItem === 'find-a-place'}
            onClick={this.handleItemClick}
            href='/browse'
          >
            Find A Place
          </Menu.Item>

          
          <Menu.Item
            header
            name='list-a-place'
            active={activeItem === 'list-a-place'}
            onClick={this.handleItemClick}
            href='/add'
          >
            List A Place
          </Menu.Item>
          

          <Menu.Item
            header
            name='sign-in'
            active={activeItem === 'sign-in'}
            onClick={this.handleItemClick}
            href='/student'
          >
            Sign-in
          </Menu.Item>

        </Menu>
      )
    }
}

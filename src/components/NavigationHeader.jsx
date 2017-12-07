import React, { Component } from 'react';
import { Image, Menu } from 'semantic-ui-react';

import logo2 from '../media/logo1.png';

export default class NavigationHeader extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

      return(
        <Menu secondary stackable widths={6}>
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
            Home
          </Menu.Item>

          <Menu.Item
            header
            name='find-a-place'
            active={activeItem === 'find-a-place'}
            onClick={this.handleItemClick}
            href='/house/browse'
          >
            Find A Place
          </Menu.Item>


          <Menu.Item
            header
            name='list-a-place'
            active={activeItem === 'list-a-place'}
            onClick={this.handleItemClick}
            href='/house/register'
          >
            List A Place
          </Menu.Item>


          <Menu.Item
            header
            name='sign-up'
            active={activeItem === 'sign-up'}
            onClick={this.handleItemClick}
            href='/student/register'
          >
            Sign up
          </Menu.Item>

          <Menu.Item
            header
            name='sign-up'
            active={activeItem === 'guide'}
            onClick={this.handleItemClick}
            href='/about-us'
          >
            About us
          </Menu.Item>

        </Menu>
      )
    }
}

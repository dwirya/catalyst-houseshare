import React, { Component } from 'react';
import { Header, Dropdown, Divider, Container, Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const roomOptions = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
]

const priceOptions = [
  { key: 1, text: '20-50', value: '20-50' },
  { key: 2, text: '51-70', value: '51-70' },
  { key: 3, text: '71-100', value: '71-100' },
  { key: 4, text: '101-150', value: '101-150' },
  { key: 5, text: '151-200', value: '151-200' },
]

const locationOptions = [
  { key: 1, text: 'Mornington', value: 'Mornington' },
  { key: 2, text: 'Hastings', value: 'Hastings' },
  { key: 3, text: 'Frankston', value: 'Frankston' },
  { key: 4, text: 'Sorrento', value: 'Sorrento' },
]

const choreOptions = [
  { key: 1, text: 'House Keeping', value: 'House Keeping' },
  { key: 2, text: 'Clean Dishes', value: 'Clean Dishes' },
  { key: 3, text: 'Clean Toilets', value: 'Clean Toilets' },
  { key: 4, text: 'Cooking', value: 'Cooking' },
  { key: 5, text: 'Buy Groceries', value: 'Buy Groceries' },
  { key: 6, text: 'Do Laundry', value: 'Do Laundry' },
  { key: 7, text: 'Gardening', value: 'Gardening' },
]

export default class StudentRegisterDetail extends Component {
  render() {
    return (
      <Container>
        <Form>
          <br/>
          <br/>
          <br/>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='First name' placeholder='First name' />
            <Form.Field control={Input} label='Last name' placeholder='Last name' />
            <Form.Field control={Select} label='Gender' options={genderOptions} placeholder='Gender' />
          </Form.Group>
          <br/>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Date of birth' placeholder='DD/MM/YYYY' />
            <Form.Field control={Input} label='Email' placeholder='Email' />
            <Form.Field control={Input} label='Phone' placeholder='Phone' />
          </Form.Group>
          <br/>
          <Form.Field control={TextArea} label='About you' placeholder='Tell us more about you...' />
          <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
          <br/>
          <Divider />
          <br/>
          <Form.Field control={Select} label='Number of Rooms' options={roomOptions} placeholder='Number of Rooms' />
          <Form.Field control={Select} multiple label='Location' options={locationOptions} placeholder='Location' />
          <Form.Field control={Select} multiple label='Chore' options={choreOptions} placeholder='Chore' />
          <Form.Field control={Select} label='Rent per week' options={priceOptions} placeholder='Rent per week' />
          <br/>
          <br/>
          <Button positive floated='left'>Confirm</Button>
          <Button floated='right'>Cancel</Button>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Form>
      </Container>
    )
  }
};

import React, { Component } from 'react';
import { Divider, Container, Button, Checkbox, Form, Input, Select, TextArea } from 'semantic-ui-react';

// import House1 from '../media/Houses/11-Max-Avenue-St.jpg';
// import House2 from '../media/Houses/rosebudhouse1.jpg';
// import House3 from '../media/Houses/rosebudhouse2.jpg';
// import House4 from '../media/Houses/rosebudhouse3.jpg';
// import House5 from '../media/Houses/rosebudhouse4.jpg';
// import House6 from '../media/Houses/rosebudhouse5.jpg';
// import House7 from '../media/Houses/rosebudhouse6.jpg';


// import WashClothes from '../media/choreIcons/icons8-Clothes-50.png';
// import WashDishes from '../media/choreIcons/icons8-Dishwasher-50.png';
// import Housekeeping from '../media/choreIcons/icons8-Housekeeping-50.png';
// import Sterilization from '../media/choreIcons/icons8-Sterilization-50.png';
// import WashToilet from '../media/choreIcons/icons8-Toilet Paper-50.png';
// import VacuumHouse from '../media/choreIcons/icons8-Vacuum Cleaner-50.png';

// import Bathroom from '../media/choreIcons/black-bathroom-icon.png';
// import Cooking from '../media/choreIcons/black-cooking-icon.png';
// import Gardening from '../media/choreIcons/black-gardening-icon.png';
// import Grocery from '../media/choreIcons/black-grocery-icon.png';
// import Rent from '../media/choreIcons/black-house-icon.png';
// import Location from '../media/choreIcons/black-location-icon.png';
// import Availability from '../media/choreIcons/green-tick-icon.png';
// import Other from '../media/choreIcons/other-icon.png';



// var imageStyle = {
//   marginLeft:  '3rem',
//   marginRight:  '3rem',
// };

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

// const priceOptions = [
//   { key: 1, text: '20-50', value: '20-50' },
//   { key: 2, text: '51-70', value: '51-70' },
//   { key: 3, text: '71-100', value: '71-100' },
//   { key: 4, text: '101-150', value: '101-150' },
//   { key: 5, text: '151-200', value: '151-200' },
// ]

// const locationOptions = [
//   { key: 1, text: 'Mornington', value: 'Mornington' },
//   { key: 2, text: 'Hastings', value: 'Hastings' },
//   { key: 3, text: 'Frankston', value: 'Frankston' },
//   { key: 4, text: 'Sorrento', value: 'Sorrento' },
// ]

const utilityOptions = [
  { key: 1, text: 'Electricity', value: 'Electricity' },
  { key: 2, text: 'Gas', value: 'Gas' },
  { key: 3, text: 'Water', value: 'Water' },
  { key: 4, text: 'Internet', value: 'Internet' },
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

export default class AddHouseDetail extends Component {
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
          <Form.Field control={Input} label='Occupation' placeholder='Occupation' />
          <br/>
          <Form.Field control={Checkbox} label='Smoking prefence' />
          <Form.Field control={Checkbox} label='Drinking preference' />
          <br/>
          <Form.Field control={TextArea} label='About you' placeholder='Tell us more about you...' />
          <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
          <br/>
          <Divider />
          <br/>
          <Form.Field control={Input} label='Address' placeholder='Type in full address' />

          <Form.Field control={Input} label='Rent per week' placeholder='Rent per week' />
          <Form.Field control={Input} label='Availability' placeholder='DD/MM/YYY' />

          <Form.Field control={Select} multiple label='Chores' options={choreOptions} placeholder='What chores would you like to get help with?' />

          <Form.Field control={Select} label='Number of Rooms' options={roomOptions} placeholder='Number of Rooms' />
          <Form.Field control={Select} multiple label='Utility Bills' options={utilityOptions} placeholder='Which utility bills would the student need to pay for?' />


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

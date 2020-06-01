import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    // default action is to send a request when we click on sending form
    // This reloads the server and we dont want it, so we preventDefault like that to not let this happed
    event.preventDefault();
    alert('You continue!');
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Max Schwarzmüller',
        address: {
          street: 'Teststreet 1',
          zipCode: '41351',
          country: 'Germany',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch((error) => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your contact data</h4>
        <form action=''>
          <input
            className={classes.Input}
            type='text'
            name='name'
            placeholder='Your name'
          />
          <input
            className={classes.Input}
            type='email'
            name='email'
            placeholder='Your email'
          />
          <input
            className={classes.Input}
            type='text'
            name='street'
            placeholder='Street'
          />
          <input
            className={classes.Input}
            type='text'
            name='postal'
            placeholder='Postal Code'
          />
          <Button btnType='Success' clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;

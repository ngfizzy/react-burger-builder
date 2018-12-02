import React, { Component } from 'react';
import classes from './ContactData.css';

import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        totalPrice: 0,
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    };
    componentDidMount() {
        this.setState({ingredients: this.props.ingredients, totalPrice:this.props.price})
    }
    orderHandler = async (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Olufisayo Bamidele',
                address: {
                    street: 'Test street 1',
                    zipCode: '41351',
                    country: 'Germany',
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        try {
            // eslint-disable-next-line
            const purchase = await axios.post('/orders.json', order);
            this.setState({ loading: false });

            this.props.history.push('/');
        } catch (error) {
            this.setState({ loading: false });
        }


    }

    render() {
        let form = <Spinner />

        if (this.state.loading === false) {
            form = [
                <h4>Enter your Contact Data</h4>,
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="texts" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            ]
        }
        return (
            <div className={classes.ContactData}>
                {form}
            </div>
        );
    }
}

export default ContactData;
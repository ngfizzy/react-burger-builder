import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import Modal from '../../components/UI/Modal/Modal'
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: true,
        showModal: true,
    }
    async componentDidMount() {
        try {
            const orders = [];
            const { data } = await axios.get('/orders.json');

            for (let key in data) {
                orders.push({
                    ...data[key],
                    id: key,
                });
            }

            this.setState({orders, loading: false});
        } catch (error) {
            this.setState({ loading: false })

            return error;
        }
    }

    closeModal() {
        this.setState({showModal: false})
    }
    render() {
    
        let orders = this.state.orders.map(order => (
            <Order key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}/>));

        if (this.state.orders.length === 0) {
            orders = <Modal 
            show={this.state.showModal}
            modalClosed={() => this.closeModal()}>
            No order yet.
        </Modal>
        }

        return (
            <div>
                { orders }
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);

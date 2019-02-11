import React from 'react';

import classes from './Order.css';

const order = (props) => {

    const ingredientNames = Object.keys(props.ingredients || {});
    const ingredients = ingredientNames.map(name => <p key={name}>{name}: {props.ingredients[name]}</p>)
    return (
        <div className={classes.Order}>
            {ingredients}
            <p>Price: <strong>{props.price}</strong></p>
        </div>
    );

}

export default order;

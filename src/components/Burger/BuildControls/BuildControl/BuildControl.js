import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl} price={props.price}>
        <div className={classes.label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed} 
            disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
);

export default buildControl;
import React from 'react';
import { Button } from '@material-ui/core';
import './index.css'
export default function Todo({ id, description, done,random }) {

    return (
        <div className={id % 2 ===0?"par":"impar"}>
            <div >
                <div>{id} - {description}</div>
                <div>This is the Random id - {random}</div>
                <div >Feito? {done === true ? 'Sim' : 'Não'}</div>
            </div>
            <div >
            <Button variant="outlined" color="primary">Ok</Button>
            </div>
        </div>
    )
}
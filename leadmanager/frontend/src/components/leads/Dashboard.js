// 2.3.2 Creamos los componentes básicos del frontend de leads
import React, { Fragment } from 'react';
import Form from './Form';
import Leads from './Leads';

export default function Dashboard(){
    return(
        <Fragment>
            <Form />
            <Leads />
        </Fragment>
        )
}

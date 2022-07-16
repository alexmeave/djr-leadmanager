import React from 'react';


export default function FormField(props) {
	switch(props.type){
    case 'textarea':
        return(
            <textarea
                className="form-control"
                type="text"
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                required={props.required}
            />
            )
    default:
        return(
            <input
                className="form-control"
                type={props.type}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                required={props.required}
            />
            )
    }
}
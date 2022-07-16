// 2.3.2 Creamos los componentes básicos del frontend de leads
import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';
import FormField from '../layout/FormField';

export class Form extends Component{

    fields = [
        {name: 'nombre', webName: 'Nombre',type: 'text', value: '', },
        {name: 'primer_apellido', webName: 'Primer Apellido',type: 'text', value: '', },
        {name: 'segundo_apellido', webName: 'Segundo Apellido',type: 'text', value: ''},
        {name: 'email', webName: 'E-mail',type: 'email', value: '', },
        {name: 'observacion', webName: 'Observacion',type: 'textarea', value: ''},
    ]

    state = this.fields.reduce( (obj,field) => ({...obj, [field.name]: field.value}), {});

    static propTypes = {
        addLead: PropTypes.func.isRequired,
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const lead = {... this.state};
        this.props.addLead(lead);

        
        initialState = this.fields.reduce( (obj,field) => ({...obj, [field.name]: field.value}), {});
        this.setState({... initialState});
    }

    render(){
        const values = {... this.state};
        return(
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    { this.fields.map( field => (
                    <div key={field.name} className="form-group">
                        <label>{field.webName}</label>

                        <FormField
                            className="form-control"
                            type={field.type}
                            name={field.name}
                            onChange={this.onChange}
                            value={values[field.name]}
                            required={field.required}
                        />
                    </div>
                    ) )
                    }
                    <br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}


export default connect(null, { addLead })(Form);


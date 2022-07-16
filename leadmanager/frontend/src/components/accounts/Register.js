import React, { Component } from 'react';
import FormField from '../layout/FormField';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage, createWarning } from '../../actions/messages';


export class Register extends Component {
	fields = [
        {name: 'username', webName: 'Nombre de usuario', type: 'text', value: '', },
        {name: 'email', webName: 'Correo electrónico', type: 'email', value: '', },
        {name: 'password', webName: 'Contraseña', type: 'password', value: ''},
        {name: 'password2', webName: 'Confirmar contraseña', type: 'password', value: ''},
    ]

    state = this.fields.reduce( (obj,field) => ({...obj, [field.name]: field.value}), {});
	
	static propTypes = {
    	register: PropTypes.func.isRequired,
    	createMessage: PropTypes.func.isRequired,
    	createWarning: PropTypes.func.isRequired,
    	isAuthenticated: PropTypes.bool
    }
    
    onSubmit = e => {
    	e.preventDefault();
    	const { username, email, password, password2 } = this.state;
    	if( password !== password2 ){
    		this.props.createWarning({ passwordsNotMatch: 'Las contraseñas no son las mismas' });
    	}
    	else{
    		const newUser = {
    			username,
    			password,
    			email
    		}
    		this.props.register(newUser);
    	}
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    
	render() {

		if(this.props.isAuthenticated){
			return <Navigate to='/' replace={true} />
		}
		const values = {... this.state};
		
		return (
			<div className="col-md-6 m-auto">
				<div className="card card-body mt-5">
					<h2 className="text-center">Registro</h2>
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
	                    <p>
	                    	¿Ya tienes una cuenta de usuario? <Link to="/login">Inicia sesión</Link>
	                    </p>
					</form>
				</div>
				
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { register, createMessage, createWarning })(Register)

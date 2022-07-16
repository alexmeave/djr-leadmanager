import React, { Component } from 'react';
import FormField from '../layout/FormField';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


export class Login extends Component {
	fields = [
        {name: 'username', webName: 'Nombre de usuario', type: 'text', value: '', },
        {name: 'password', webName: 'Contraseña', type: 'password', value: ''},
    ]

    state = this.fields.reduce( (obj,field) => ({...obj, [field.name]: field.value}), {});

    static propTypes = {
    	login: PropTypes.func.isRequired,
    	isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
    	e.preventDefault();
    	this.props.login(this.state.username, this.state.password);
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
					<h2 className="text-center">Iniciar sesión</h2>
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
	                            Iniciar
	                        </button>
	                    </div>
	                    <p>
	                    	¿No tienes una cuenta de usuario? <Link to="/register">Regístrate</Link>
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


export default connect(mapStateToProps, { login })(Login)

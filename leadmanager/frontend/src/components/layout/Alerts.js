import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component{
	
	static propTypes = {
		error: PropTypes.object.isRequired,
		message: PropTypes.object.isRequired,
		warning: PropTypes.object.isRequired,
	};

	componentDidUpdate(prevProps){
		const { error, message, warning, alert } = this.props;

		if( error !== prevProps.error){
			Object.keys(error.msg).forEach( key => {
				const errStr = (Array.isArray(error.msg[key])) ?
					error.msg[key].join():
					error.msg[key];

				switch( errStr ){
				case 'This field may not be blank.':
					alert.error(`${key}: Este campo no puede ir vacío`);
					break;
				case 'lead with this email already exists.':
					alert.error(`${key}: Este correo electrónico ya está registrado`);
					break;
				case 'Authentication credentials were not provided.':
					alert.error(`Por favor inicia sesión para utilizar esta aplicación`);
					break;
				default:
					alert.error(`${errStr}`);
				}
			} )
		}

		if( message !== prevProps.message){
			Object.keys(message).forEach( key =>{
				const msgStr = message[key];
				alert.success(`${msgStr}`);
			})
		}

		if( warning !== prevProps.warning){
			Object.keys(warning).forEach( key =>{
				const msgStr = warning[key];
				alert.info(`${msgStr}`);
			})
		}

	}

	render(){
		return <Fragment />;
	}
}


const mapStateToProps = state => ({
	error: state.errors,
	message: state.messages,
	warning: state.warnings,
	});


export default connect(mapStateToProps)(withAlert()(Alerts));
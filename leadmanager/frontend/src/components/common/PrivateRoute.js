import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const PrivateRoute = ({children, auth, redirectTo }) => {
	return (auth.isLoading || auth.isAuthenticated === null) ? <h2>Iniciando, espera un momento...</h2> :
		(!auth.isAuthenticated) ? <Navigate to={redirectTo} replace={true} /> :
		children;
}

const mapStateToProps = (state) => ({
	auth: state.auth
})


export default connect(mapStateToProps)(PrivateRoute);
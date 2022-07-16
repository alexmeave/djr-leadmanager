// 2.2.2 Creamos App.js
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';


import Header from './layout/Header';
import Alerts from './layout/Alerts';
import Dashboard from './leads/Dashboard';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';


import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';


// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
};

class App extends Component{
    

    componentDidMount() {
        store.dispatch( loadUser() );
    }

    render(){
        return (
            // 3.2.3 Actualizar App.js para agregar un provider y el store
            <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>

                <Router>
                    {/* 2.3.3 Actualizamos src/components/App.js para integrar el Dashboard a la app */}
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Routes>
                                <Route path="/" element={
                                    <PrivateRoute redirectTo="/login">
                                        <Dashboard />
                                    </PrivateRoute>
                                }
                                />
                                <Route path="/register" element={<Register />} />
                                <Route path="/login" element={<Login />} />
                            </Routes>
                        </div>
                    </Fragment>
                    
                </Router>
                
            </AlertProvider>
            </Provider>
        )
    }
}


ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('app'));
// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App />);
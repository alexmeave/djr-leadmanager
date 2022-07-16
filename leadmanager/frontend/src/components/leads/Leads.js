// 2.3.2 Creamos los componentes básicos del frontend de leads
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';


export class Leads extends Component{
    static propTypes = {
        leads: PropTypes.array.isRequired,
        isAuthenticated: PropTypes.bool,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired,
    };

    componentDidMount(){
        if(this.props.isAuthenticated){
            this.props.getLeads();
        }
    }

    render(){
        return(
            <Fragment>
                <h2>Leads</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Folio</th>
                            <th>Nombre</th>
                            <th>Primer Apellido</th>
                            <th>Segundo Apellido</th>
                            <th>Email</th>
                            <th>Observacion</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.leads.map( lead => (

                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.nombre}</td>
                            <td>{lead.primer_apellido}</td>
                            <td>{lead.segundo_apellido}</td>
                            <td>{lead.email}</td>
                            <td>{lead.observacion}</td>
                            <td>
                                <button onClick={ this.props.deleteLead.bind(this, lead.id) } className="btn btn-danger btn-sm">
                                    Borrar
                                </button>
                            </td>
                        </tr>
                        ) )
                        
                        }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leadReducer.leads,
    isAuthenticated: state.auth.isAuthenticated,
});


export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);


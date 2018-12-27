import React, { Component } from 'react';
import {addVisitor} from '../actions/visitorActions';

class Visitor extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  	visitorName: '',
		  	employeeID: '',
		  	phoneNumber: '',
		  	error: {
		    	message: ''
		  	}
		}
		//this.checkIn = this.checkIn.bind(this);
	}

	checkIn() {
		console.log('this.state', this.state);
		const { visitorName, employeeID, phoneNumber } = this.state;
		const visitor = {
            visitorName: visitorName,
            employeeID: employeeID,
            phoneNumber: phoneNumber
        };
        addVisitor(visitor);
	}

	render() {
		return (
			<div className="Visitor" style={{margin: '5%'}}>
	        <h2>Enter credentials for checkin:</h2>
	        <div className="form-group">
	          <input
	            className="form-control"
	            type="text"
	            style={{marginRight: '5px'}}
	            placeholder="Full name"
	            onChange={event => this.setState({visitorName: event.target.value})}
	          />
	          <input
	            className="form-control"
	            type="text"
	            style={{marginRight: '5px'}}
	            placeholder="employeeID"
	            onChange={event => this.setState({employeeID: event.target.value})}
	          />
	          <input
	            className="form-control"
	            type="text"
	            style={{marginRight: '5px'}}
	            placeholder="Phone"
	            onChange={event => this.setState({phoneNumber: event.target.value})}
	          />
	          <div>
		          <button
		            className="btn btn-primary"
		            type="button"
		            onClick={() => this.checkIn()}
		          >
		            Sign Up
		          </button>
	          </div>
	        </div>
	        <div>{this.state.error.message}</div>
	      </div>
		)
	}
}

export default Visitor;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Delete from '../Image/delete2.png';
import Edit from '../Image/edit1.jpg';

export default class ContactDetails extends Component {
    constructor(props) {
        super(props)
        var displayContactDetails = JSON.parse(localStorage.getItem((window.location.pathname).split('/contactdisplay/')[1]))
        if (displayContactDetails == null) {
            return (
                alert("No User Present"),
                window.location.pathname='/'
            )
        }
        this.state = {
            name: displayContactDetails.name,
            email: displayContactDetails.email,
            mobile: displayContactDetails.mobile,
            landline: displayContactDetails.landline,
            website: displayContactDetails.website,
            address:displayContactDetails.address
        }
    }

    handleDelete = () => {
        if (window.confirm("Do you want to delete this contact detail??")) {
            localStorage.removeItem((window.location.pathname).split('/contactdisplay/')[1]);
        }
    }

    render() {
        return (
            <div className="col-sm-6 display-contact-details">
                <div className="contact-header">
                    <h4>{this.state.name}</h4>
                    <Link to={{pathname:'/edit/'+(window.location.pathname).split('/contactdisplay/')[1]}} className="contact-edit">
                        <img src={Edit} alt="EDIT" />
                        <p>EDIT</p>
                    </Link>
                    <Link to={{pathname:'/'}} className="contact-delete" onClick={this.handleDelete}>
                        <img src={Delete} alt="DELETE"/>
                        <p>DELETE</p>
                    </Link>
                </div>
                <p>Email: {this.state.email}</p>
                <p className='contact-media'>Mobile: {this.state.mobile}</p>
                <p className='contact-media'>Landline: {this.state.landline}</p>
                <p className='website'>Website: {this.state.website}</p>
                <p>Address: {this.state.address}</p>
            </div>
        )
    }
}

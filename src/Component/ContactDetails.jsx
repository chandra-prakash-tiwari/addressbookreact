import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Delete from '../Image/delete2.png';
import Edit from '../Image/edit1.jpg';

export default class ContactDetails extends Component {
    handleDelete = () => {
        if (window.confirm("Do you want to delete this contact detail??")) {
            localStorage.removeItem((window.location.pathname).split('/contactdisplay/')[1]);
            alert("Ok");
            window.location.pathname = '/';
        }
    }

    render() {
        var user = JSON.parse(localStorage.getItem((window.location.pathname).split('/contactdisplay/')[1]))
        if (user == null)
            return (
                alert("No User Present"),
                <Redirect to="/" />
            )
        return (
            <div className="col-sm-6 display-contact-details">
                <div className="contact-header">
                    <h4>{user.name}</h4>
                    <Link to={{pathname:'/edit/'+user.email}} className="contact-edit">
                        <img src={Edit} alt="EDIT" />
                        <p>EDIT</p>
                    </Link>
                    <Link to={{pathname:'/'}} className="contact-delete" onClick={this.handleDelete}>
                        <img src={Delete} alt="DELETE"/>
                        <p>DELETE</p>
                    </Link>
                </div>
                <p>Email: {user.email}</p>
                <p className='contact-media'>Mobile: {user.mobile}</p>
                <p className='contact-media'>Landline: {user.landline}</p>
                <p className='website'>Website: {user.website}</p>
                <p>Address: {user.address}</p>
            </div>
        )
    }
}

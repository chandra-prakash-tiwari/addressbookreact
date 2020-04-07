import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AllContactsDisplay extends Component {
    handleChange=(item)=> {
        window.location.pathname = '/';
        window.location.pathname =  '/contactdisplay/'+item;
    }

    render() {
        var contactslist = [];
        for (var x in localStorage) {
            var user = JSON.parse(localStorage.getItem(x));
            if (user != null)
            contactslist.push(user);
        }

        const listItems = contactslist.map((item, i) => (
            <div className='contacts-details' key={i}>
                <Link to={{ pathname: '/contactdisplay/' + item.email }} className="contact-cointeiner" onClick={() => this.handleChange(item.email)}>
                    <h4>{item.name}</h4>
                    <p>{item.email}</p>
                    <p>{item.mobile}</p>
                </Link>
            </div>
          ))

        return (
            <div className="col-sm-4" id="contact-list" >
                <h6 className="contacts-head"><b>CONTACTS</b></h6>
                <div>{listItems}</div>
            </div>
        );
    }
}

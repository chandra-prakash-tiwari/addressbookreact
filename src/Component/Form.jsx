import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

export default class Form extends Component {
    constructor(props) {
        super(props);
        if(window.location.pathname==='/add')
            this.state = {
                name: '',
                email: '',
                mobile: '',
                landline: '',
                website: '',
                address: '',
                opertaion: 'ADD',
                id:uuidv4(),
            };
        else {
            var user = JSON.parse(localStorage.getItem((window.location.pathname).split('/edit/')[1]))
            if (user == null)
                return (
                    window.location.pathname='/'
                )
            this.state = {
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                landline: user.landline,
                website: user.website,
                address: user.address,
                opertaion: 'UPDATE',
                id:(window.location.pathname).split('/edit/')[1],
            }   
        }
    }
    
    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    contact = () => {  
        var contactdetail = {
            "name": this.state.name,
            "email": this.state.email,
            "mobile": this.state.mobile,
            "landline": this.state.landline,
            "website": this.state.website,
            "address": this.state.address
        };
        localStorage.setItem(this.state.id, JSON.stringify(contactdetail));
    }

    render() {
        return (
            <div className="col-sm-6 form"  >
                <form action="/" id="form-details" onSubmit={this.contact} >
                    <div className="form-group">
                        <label><b>Name <span>Required</span></b></label>
                        <input type="text" className="form-control" name="name" value={this.state.name} id="name" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label><b>Email <span>Required</span></b></label>
                        <input type="email" className="form-control" name="email" value={this.state.email} id="email" onChange={this.handleChange} required />
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label><b>Mobile <span>Required</span></b></label>
                            <input type="text" className="form-control" name="mobile" value={this.state.mobile} id="mobile" onChange={this.handleChange} required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label><b>Landline <span>Required</span></b></label>
                            <input type="text" name="landline" id="landline" value={this.state.landline} className="form-control" onChange={this.handleChange} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><b>Website <span>Required</span></b></label>
                        <input type="text" name="website" id="website" className="form-control" value={this.state.website} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label><b>Address</b></label>
                        <textarea className="form-control" name="address" id="address" value={this.state.address} onChange={this.handleChange} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" id="addbtn">{this.state.opertaion}</button>
                </form> 
            </div>  
        )
    }
}

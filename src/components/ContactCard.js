import React from 'react';

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img alt="" src={props.imgurl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    );
}

export default ContactCard
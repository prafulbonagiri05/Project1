import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"


class Customer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                 <nav className="navbar bg-dark">
                 <h4><Link className="link" to="/reservations">Reservation</Link></h4>
                 <h4><Link className="link" to="/SearchRooms">Search Rooms</Link></h4> 
                 </nav>
                 {/* <img src="./images/pic1.jpeg" width="100%" height="100%" alt="  " className = "image"/> */}
                
            </div>
        );
    }
}

export default Customer;
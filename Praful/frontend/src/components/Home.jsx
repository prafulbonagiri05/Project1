import React, { Component } from 'react';
import "./Navbar.css"


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Rent A Place</h1>
                 {/* <nav className="navbar bg-dark">
                 <h4><Link className="link" to="/reservations">Reservation</Link></h4>
                 <h4><Link className="link" to="/SearchRooms">Search Rooms</Link></h4> 
                 <h4><Link className="link" to="/Inventory">Inventory</Link></h4>
                 <h4><Link className="link" to="/StaffDetail">Staff Details</Link></h4>
                 </nav> */}
                 {/* <img src="./images/pic1.jpeg" width="100%" height="100%" alt="  " className = "image"/> */}
                
            </div>
        );
    }
}

export default Home;
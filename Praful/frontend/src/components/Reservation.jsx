
import React,{Component} from 'react'
import ReservationServices from '../services/ReservationServices'
import "./Background.css";

class Reservation extends Component{
    constructor(props)
    {
        super(props)
        this.state={
                reservations:[]
        }
        this.addReservation=this.addReservation.bind(this);
        this.editReservation=this.editReservation.bind(this);
        this.pay=this.pay.bind(this);
        this.addGuest=this.addGuest.bind(this);
        
    }
    deleteReservation(id){
        ReservationServices.deleteReservationById(id).then(res=>{
            if(window.confirm("Are you sure to delete?"))
            this.setState({reservations:this.state.reservations.filter(reservations=>reservations.id!==id)});
        });

    }
    pay()
    {
        this.props.history.push("/reservations/SetRates");
    }

    addGuest()
    {
        this.props.history.push("/reservations/addGuests");
    }

    editReservation(id){
        this.props.history.push(`updateReservation/${id}`);
    }
    componentDidMount(){
        ReservationServices.getReservations().then((res)=>{
            this.setState({reservations:res.data});
        }
        );
    }
    addReservation()
    {
        this.props.history.push("/addReservation");
    }
    
    

    render(){
        return(
            <div className="container">
                 <h2 className="text-center">Reservations</h2>
                
                
                 <div className="row">
                     <table className="table table-striped table-bordered">
                         <thead>
                             <tr>
                             <th>Code</th>
                             <th>No-of-adults</th>
                             <th>Check-in</th>
                             <th>No-of-nights</th>
                             <th>Check-out</th>
                             <th>Status</th>
                             <th>No-of-children</th>
                             <th>Actions</th>
                             </tr>     
                         </thead>
                         <tbody>
                         {
                                 this.state.reservations.map(
                                     reservations=>
                                     <tr key={reservations.id}>
                                         <td>{reservations.code}</td>
                                         <td>{reservations.numberOfAdults}</td>
                                         <td>{reservations.checkInDate}</td>
                                         <td>{reservations.numberOfNights}</td>
                                         <td>{reservations.checkOutDate}</td>
                                         <td>{reservations.status}</td>
                                         <td>{reservations.numberOfChildren}</td>
                                         <td>
                                             <button onClick={()=>this.editReservation(reservations.id)} className="btn btn-info">Update</button>
                                             <button style={{marginLeft:"10px"}} onClick={()=>this.pay()} className="btn btn-info">Pay</button>
                                             <button style={{marginLeft:"10px"}} onClick={()=>this.addGuest()} className="btn btn-danger">Add Guests</button>
                                         </td>
                                         </tr>
                                 )
                             }
                         </tbody>
                     </table>

                 </div>

            </div>
        )
    }
}
export default Reservation;
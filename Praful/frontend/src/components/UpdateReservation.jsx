import React,{Component} from 'react'
import ReservationServices from '../services/ReservationServices';


class UpdateReservation extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            id:this.props.match.params.id,
            code:'',
            numberOfAdults:'',
            checkInDate:'',
            numberOfNights:'',
            checkOutDate:'',
            status:'',
            numberOfChildren:''
            
        }
        this.changeId=this.changeId.bind(this);
        this.changeCode=this.changeCode.bind(this);
        this.changeAdults=this.changeAdults.bind(this);
        this.changeCheckin=this.changeCheckin.bind(this);
        this.changeNights=this.changeNights.bind(this);
        this.changeCheckout=this.changeCheckout.bind(this);
        this.changeStatus=this.changeStatus.bind(this);
        this.changeChildren=this.changeChildren.bind(this); 
        this.updateReservation=this.updateReservation.bind(this);
    }
    componentDidMount(){
        ReservationServices.getReservationById(this.state.id).then((res)=>
        {
            let reservations=res.data;
            this.setState({id:reservations.id,
                code:reservations.code,
                numberOfAdults:reservations.numberOfAdults,
                checkInDate:reservations.checkInDate,
                numberOfNights:reservations.numberOfNights,
                checkOutDate:reservations.checkOutDate,
                status:reservations.status,
                numberOfChildren:reservations.numberOfChildren 
             } );
        });
    }
    updateReservation=(e)=>{
        e.preventDefault();
        let reservations={id:this.state.id,code:this.state.code,numberOfAdults:this.state.numberOfAdults,
            checkInDate:this.state.checkInDate,numberOfNights:this.state.numberOfNights,checkOutDate:this.state.checkOutDate,
            status:this.state.status,
            numberOfChildren:this.state.numberOfChildren
            }
      
         //console.log("reservations=>"+JSON.stringify(reservations));
         ReservationServices.updateReservation(reservations,this.state.id).then(res=>{
             this.props.history.push("/reservations");
         });
    }
    changeId=(e)=>
    {
        this.setState({id:e.target.value});
    }
    changeCode=(e)=>{
        this.setState({code:e.target.value});
    }
    changeAdults=(e)=>{
        this.setState({numberOfAdults:e.target.value});
    }
    changeCheckin=(e)=>{
        this.setState({checkInDate:e.target.value});
    }
    changeNights=(e)=>{
        this.setState({numberOfNights:e.target.value});
    }
    changeCheckout=(e)=>{
        this.setState({checkOutDate:e.target.value});
    }
    changeStatus=(e)=>{
        this.setState({status:e.target.value});
    }
    changeChildren=(e)=>{
        this.setState({numberOfChildren:e.target.value});
    }
    cancel()
    {
        this.props.history.push("/reservations");
    }
    render()
    {
        return(
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Update Reservation</h3>
                    <div className="card-body">
                        <form>
                        <div className="form-group">
                               <label>Id:</label>
                               <input placeholder="id" name="id" className="form-control"
                               value={this.state.id} onChange={this.changeId}/>    
                            </div>
                            <div className="form-group">
                               <label>Code:</label>
                               <input placeholder="code" name="code" className="form-control"
                               value={this.state.code} onChange={this.changeCode}/>    
                            </div>
                            <div className="form-group">
                               <label>No of Adults:</label>
                               <input placeholder="no of adults" name="numberOfAdults" className="form-control"
                               value={this.state.numberOfAdults} onChange={this.changeAdults}/>    
                            </div>
                            <div className="form-group">
                               <label>Checkin:</label>
                               <input type="date" placeholder="checkin" name="checkInDate" className="form-control"
                               value={this.state.checkInDate} onChange={this.changeCheckin}/>    
                            </div>
                            <div className="form-group">
                               <label>No of Nights:</label>
                               <input placeholder="no of Nights" name="numberOfNights" className="form-control"
                               value={this.state.numberOfNights} onChange={this.changeNights}/>    
                            </div>
                            <div className="form-group">
                               <label>Checkout:</label>
                               <input type="date" placeholder="checkout" name="checkOutDate" className="form-control"
                               value={this.state.checkOutDate} onChange={this.changeCheckout}/>    
                            </div>
                            <div className="form-group">
                               <label>Status:</label>
                               <input placeholder="status" name="status" className="form-control"
                               value={this.state.status} onChange={this.changeStatus}/>    
                            </div>
                            <div className="form-group">
                               <label>No of children:</label>
                               <input placeholder="no of children" name="numberOfChildren" className="form-control"
                               value={this.state.numberOfChildren} onChange={this.changeChildren}/>    
                            </div>
                            <button className="btn btn-success" onClick={this.updateReservation}>Save</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginleft:"10px"}}>Cancel</button>
                        </form>
                 </div>
             </div>
        </div>
    </div>
        )
    }
}
export default UpdateReservation
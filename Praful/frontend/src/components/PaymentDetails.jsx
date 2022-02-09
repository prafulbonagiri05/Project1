import React, { Component } from 'react'
import PaymentService from '../services/PaymentService';

class PaymentDetails extends Component {
    constructor(props) {
        super(props)   
        this.state = {

            code: '',
            firstNightPrice:'',
            checkIn:'',
            checkOut:'',
            noOfGuests:'',
            noOfDays:'',
            extensionPrice:''
          
        }
        this.changecode=this.changecode.bind(this);
        this.changeFirstNightPrice=this.changeFirstNightPrice.bind(this);
        this.changeCheckIn=this.changeCheckIn.bind(this);
        this.changeCheckOut=this.changeCheckOut.bind(this);
        this.changeNoOfGuests=this.changeNoOfGuests.bind(this);
        this.changeNoOfDays= this.changeNoOfDays.bind(this);
        this.changeExtensionPrice=this.changeExtensionPrice.bind(this)
        this.savePayment=this.savePayment.bind(this)

        
    }



    savePayment=(e)=>{
        e.preventDefault();
        let addPayments={
            code:this.state.code,
            firstNightPrice:this.state.firstNightPrice,
            checkIn:this.state.checkIn,
            checkOut:this.state.checkOut,
            noOfGuests:this.state.noOfGuests,
            noOfDays:this.state.noOfDays,
            extensionPrice:this.state.extensionPrice
        }
            PaymentService.addPayment(addPayments).then(res=>{
             this.props.history.push("/SetRates/issueBills");
         })
    }






    changecode=(e)=>{
        this.setState({code:e.target.value})
    }

changeFirstNightPrice=(e)=>{
    this.setState({firstNightPrice:e.target.value});
}

changeCheckIn=(e)=>{
    this.setState({checkIn:e.target.value});
}

changeCheckOut=(e)=>{
    this.setState({checkOut:e.target.value});
}
changeNoOfGuests=(e)=>{
    this.setState({noOfGuests:e.target.value});
}
changeNoOfDays=(e)=>{
    this.setState({noOfDays:e.target.value});
}
changeExtensionPrice=(e)=>{
    this.setState({extensionPrice:e.target.value});
}



    cancel(){
        this.props.history.push('/reservations');
    }


    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">setPayment</h3>
                            <div className = "card-body">
                                <form>
                                    <div className= "form-group">
                                        <label> code </label>
                                        <input placeholder="Code" name="code" className="form-control"
                                          required  value={this.state.code} onChange={this.changecode}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> FirstNightPrice </label>
                                        <input placeholder="FirstNightPrice" name="firstNightPrice" className="form-control"
                                           value={this.state.firstNightPrice} onChange={this.changeFirstNightPrice}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> CheckIn </label>
                                        <input type="date" placeholder="CheckIn" name="checkin" className="form-control"
                                           value={this.state.checkin} onChange={this.changeCheckIn}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> CheckOut </label>
                                        <input type="date" placeholder="CheckOut" name="checkOut" className="form-control"
                                           value={this.state.checkOut} onChange={this.changeCheckOut}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> NoOfGuests </label>
                                        <input  placeholder="NoOfGuests" name="noOfGuests" className="form-control"
                                           value={this.state.noOfGuests} onChange={this.changeNoOfGuests}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> NoOfDays </label>
                                        <input placeholder="NoOfDays" name="noOfDays" className="form-control"
                                           value={this.state.noOfDays} onChange={this.changeNoOfDays}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> ExtensionPrice </label>
                                        <input placeholder="ExtensionPrice" name="extensionPrice" className="form-control"
                                           value={this.state.extensionPrice} onChange={this.changeExtensionPrice}/>
                                    </div>
                                    <div style={{marginTop:"10px"}}>
                                    <button   className="btn btn-success" onClick={this.savePayment}>Next</button>
                                    <button   className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentDetails;

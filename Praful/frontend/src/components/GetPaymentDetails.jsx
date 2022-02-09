import React, { Component } from 'react';
import PaymentDetailsService from '../services/PaymentDetailsService';

class GetPaymentDetails extends Component {
    constructor(props){
        super(props)
        this.state = {

            total:'',
            payTime:'',
            creditCard:''

        
        
            
        }
        this.changeTotalHandler = this.changeTotalHandler.bind(this);
        this.changePayTimeHandler = this.changePayTimeHandler.bind(this);
        this.changecreditCardHandler = this.changecreditCardHandler.bind(this);
        this.saveDetails = this.saveDetails.bind(this);
    }

    saveDetails = (e) => {
        e.preventDefault();
        let Details = {total: this.state.total, payTime: this.state.payTime, creditCard: this.state.creditCard};
        //console.log('details =>' + JSON.stringify(details));

        PaymentDetailsService.createDetails(Details).then(res => {
            this.props.history.push('/PaymentGateway');
        });
    }

    changeTotalHandler=(event) => {
        this.setState({total: event.target.value});

    }

    changePayTimeHandler=(event) => {
        this.setState({payTime: event.target.value});
    }

    changecreditCardHandler=(event) => {
        this.setState({creditCard: event.target.value});
    }
    cancel() {
        this.props.history.push('/reservations');
    }

    render() {
        return (
            <div>
                 < div className="container">
                     <div className="row">
                         <div className= "card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Add Details</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className="form-group">
                                            <label> Total </label>
                                            <input placeholder = "Total" name = "total" className="form-control"
                                                value={this.state.total} onChange={this.changeTotalHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> PayTime </label>
                                            <input type="date" placeholder = "PayTime" name = "payTime" className="form-control"
                                                value={this.state.payTime} onChange={this.changePayTimeHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> CreditCard </label>
                                            <input placeholder = "CreditCard" name = "creditCard" className="form-control"
                                                value={this.state.creditCard} onChange={this.changecreditCardHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveDetails}>Save</button>
                                         <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                         </div>
                     </div>
                 </div>

            </div>
        );
    }
}

export default GetPaymentDetails;
import React, { Component } from 'react'
import IssueBillService from '../services/IssueBillService';

class IssueBills extends Component {
    constructor(props) {
        super(props)   
        this.state = {
            billingNo: '',
            quantity:'',
            price:'',
            taxes:'',
            dateOfIssueBills:'',
            services:'',
            unit:''         
        }
        this.changeBillingNo=this.changeBillingNo.bind(this);
        this.changeQuantity=this.changeQuantity.bind(this);
        this.changePrice=this.changePrice.bind(this);
        this.changeTaxes=this.changeTaxes.bind(this);
        this.changeDateOfIssueBills=this.changeDateOfIssueBills.bind(this);
        this.changeServices= this.changeServices.bind(this);
        this.changeUnit=this.changeUnit.bind(this);    
        this.saveIssueBills=this.saveIssueBills.bind(this);  
    }



    saveIssueBills=(e)=>{
        e.preventDefault();  
        let issueBills={
            billingNo:this.state.billingNo,
            quantity:this.state.quantity,
            price:this.state.price,
            taxes:this.state.taxes,
            dateOfIssueBills:this.state.dateOfIssueBills,
            services:this.state.services,
            unit:this.state.unit
        };
        IssueBillService.addIssueBills(issueBills).then(res=>{
             this.props.history.push("/SetRates/issueBills/getPaymentDetails");
         })
    }




    changeBillingNo=(e)=>{
        this.setState({billingNo:e.target.value})
    }

    changeQuantity=(e)=>{
    this.setState({quantity:e.target.value});
    }

    changePrice=(e)=>{
    this.setState({price:e.target.value});
    }

    changeTaxes=(e)=>{
    this.setState({taxes:e.target.value});
    }
    changeDateOfIssueBills=(e)=>{
    this.setState({dateOfIssueBills:e.target.value});
    }
    changeServices=(e)=>{
    this.setState({services:e.target.value});
    }
    changeUnit=(e)=>{
    this.setState({unit:e.target.value});
    }



    cancel(){
        this.props.history.push('/reservations');
    }
    back(){
        this.props.history.push("/reservations")
    }

    printReceipt() {
        window.print();
    }
    

    render() {
        return (
            <div>
                <div className = "container" class="print-receipt">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">setPayment</h3>
                            <div className = "card-body">
                                <form>
                                    <div className= "form-group">
                                        <label> BillingNo </label>
                                        <input placeholder="BillingNo" name="billingNo" className="form-control"
                                           value={this.state.billingNo} onChange={this.changeBillingNo}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> Quantity </label>
                                        <input placeholder="Quantity" name="quantity" className="form-control"
                                           value={this.state.quantity} onChange={this.changeQuantity}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> Price </label>
                                        <input placeholder="Price" name="price" className="form-control"
                                           value={this.state.price} onChange={this.changePrice}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> Taxes </label>
                                        <input placeholder="Taxes" name="taxes" className="form-control"
                                           value={this.state.taxes} onChange={this.changeTaxes}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> DateOfIssueBills </label>
                                        <input type="date" placeholder="DateOfIssueBills" name="dateOfIssueBills" className="form-control"
                                           value={this.state.dateOfIssueBills} onChange={this.changeDateOfIssueBills}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> Services </label>
                                        <input placeholder="Services" name="services" className="form-control"
                                           value={this.state.services} onChange={this.changeServices}/>
                                    </div>
                                    <div className= "form-group">
                                        <label> Unit </label>
                                        <input placeholder="Unit" name="unit" className="form-control"
                                           value={this.state.unit} onChange={this.changeUnit}/>
                                    </div>
                                    <div style={{marginTop:"20px" , display:"flex",justifyContent:"space-around"}}>
                                    <button   className="btn btn-success" onClick={this.saveIssueBills}>Next</button>
                                    <button   className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    <button   className="btn btn-secondary"  onClick={this.back.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                                    <button class="hide-on-print" className="btn btn-secondary" onClick={this.printReceipt} style={{marginLeft: "10px"}}>Print</button>
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

export default IssueBills;

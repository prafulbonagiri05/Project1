import React,{Component} from 'react'
import GuestService from '../services/GuestService';


class AddGuest extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            code:'',
            phoneno:'',
            company:'',
            name:'',
            email:'',
            gender:'',
            address:''
            
        }
        this.changeCode=this.changeCode.bind(this);
        this.changePhoneno=this.changePhoneno.bind(this);
        this.changeCompany=this.changeCompany.bind(this);
        this.changeName=this.changeName.bind(this);
        this.changeEmail=this.changeEmail.bind(this);
        this.changeGender=this.changeGender.bind(this);
        this.changeAddress=this.changeAddress.bind(this);
        this.saveGuest=this.saveGuest.bind(this);

    }
    saveGuest=(e)=>{
        e.preventDefault();
        let guests={code:this.state.code,phoneno:this.state.phoneno,company:this.state.company,name:this.state.name,email:this.state.email,gender:this.state.gender,address:this.state.address}
        GuestService.addGuests(guests).then(res=>{
            this.props.history.push("/reservations");
        });
    }
    changeCode=(e)=>{
        this.setState({code:e.target.value});
    }
    changePhoneno=(e)=>{
        this.setState({phoneno:e.target.value});
    }
    changeCompany=(e)=>{
        this.setState({company:e.target.value});
    }
    changeName=(e)=>{
        this.setState({name:e.target.value});
    }
    changeEmail=(e)=>{
        this.setState({email:e.target.value});
    }
    changeGender=(e)=>{
        this.setState({gender:e.target.value});
    }
    changeAddress=(e)=>{
        this.setState({address:e.target.value});
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
                    <h3 className="text-center">Add Guests</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                               <label>Code:</label>
                               <input placeholder="code" name="code" className="form-control"
                               value={this.state.code} onChange={this.changeCode}/>    
                            </div>
                            <div className="form-group">
                               <label>Phone No:</label>
                               <input placeholder="phoneno" name="phoneno" className="form-control"
                               value={this.state.phoneno} onChange={this.changePhoneno}/>    
                            </div>
                            <div className="form-group">
                               <label>Company:</label>
                               <input placeholder="company" name="company" className="form-control"
                               value={this.state.company} onChange={this.changeCompany}/>    
                            </div>
                            
                            <div className="form-group">
                               <label>Name:</label>
                               <input placeholder="name" name="name" className="form-control"
                               value={this.state.name} onChange={this.changeName}/>    
                            </div>
                            
                            <div className="form-group">
                               <label>Email:</label>
                               <input placeholder="email" name="email" className="form-control"
                               value={this.state.email} onChange={this.changeEmail}/>    
                            </div>
                            <div className="form-group">
                               <label>Gender:</label>
                               <select placeholder="gender" name="gender" className="form-control" 
                               value={this.state.gender} onChange={this.changeGender}>
                                <option value="male" id="gender">Male</option>
                                <option value="female" id="gender">Female</option>
                                </select>  
                            </div>
                            <div className="form-group">
                               <label>Address:</label>
                               <input placeholder="address" name="address" className="form-control"
                               value={this.state.address} onChange={this.changeAddress}/>    
                            </div>
                            <button className="btn btn-success" onClick={this.saveGuest}>Save</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginleft:"10px"}}>Cancel</button>
                        </form>
                 </div>
             </div>
        </div>
    </div>
        )
    }     

}
export default AddGuest;
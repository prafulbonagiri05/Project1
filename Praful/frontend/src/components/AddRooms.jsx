import React,{Component} from 'react'
import RoomServices from '../services/RoomServices';


class AddRooms extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            code:'',
            name:''
        }
        this.changeCode=this.changeCode.bind(this);
        this.changeName=this.changeName.bind(this);
        this.saveRooms=this.saveRooms.bind(this);

       

}
saveRooms=(e)=>{
    e.preventDefault();
    let addrooms={code:this.state.code,name:this.state.name}
    RoomServices.addRooms(addrooms).then(res=>{
        this.props.history.push("/SearchRooms");
    });
}
changeCode=(e)=>{
    this.setState({code:e.target.value});
}
changeName=(e)=>{
    this.setState({name:e.target.value});
}
cancel()
    {
        this.props.history.push("/SearchRooms");
    }


render(){
    return(
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Add Rooms</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                               <label>Code:</label>
                               <input placeholder="code" name="code" className="form-control"
                               value={this.state.code} onChange={this.changeCode}/>    
                            </div>
                            <div className="form-group">
                               <label>Type:</label>
                               <input placeholder="name" name="name" className="form-control"
                               value={this.state.name} onChange={this.changeName}/>    
                           </div>
                            <button className="btn btn-success" onClick={this.saveRooms}>Save</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginleft:"10px"}}>Cancel</button>
                        </form>
                 </div>
             </div>
        </div>
    </div>
    )}

}
export default AddRooms;
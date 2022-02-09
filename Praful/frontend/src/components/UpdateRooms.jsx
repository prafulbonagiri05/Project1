import React,{Component} from 'react'
import RoomServices from '../services/RoomServices';

class UpdateRooms extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            id:this.props.match.params.id,
            code:'',
            name:''
            
        }
        this.changeId=this.changeId.bind(this);
        this.changeCode=this.changeCode.bind(this);
        this.changeName=this.changeName.bind(this);
        this.updateRooms=this.updateRooms.bind(this);


        
    }
    componentDidMount(){
        RoomServices.getRoomById(this.state.id).then((res)=>
        {
            let rooms=res.data;
            this.setState({id:rooms.id,
                code:rooms.code,
                name:rooms.name
                
             } );
        });
    }
    updateRooms=(e)=>{
        e.preventDefault();
        let rooms={id:this.state.id,code:this.state.code,name:this.state.name}
      
         //console.log("reservations=>"+JSON.stringify(reservations));
         RoomServices.updateRooms(rooms,this.state.id).then(res=>{
             this.props.history.push("/SearchRooms");
         });
    }
    changeId=(e)=>
    {
        this.setState({id:e.target.value});
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
                    <h3 className="text-center">Update Rooms</h3>
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
                               <label>Type:</label>
                               <input placeholder="name" name="name" className="form-control"
                               value={this.state.name} onChange={this.changeName}/>    
                           </div>
                            <button className="btn btn-success" onClick={this.updateRooms}>Save</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginleft:"10px"}}>Cancel</button>
                        </form>
                 </div>
             </div>
        </div>
    </div>
    )}

}
export default UpdateRooms;

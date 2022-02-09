import React,{Component} from 'react';
import RoomServices from '../services/RoomServices'
class GetRooms extends Component{
    constructor(props)
    {
        super(props)
        this.state={
                rooms:[],
                count:10
        }
        this.addRoom=this.addRoom.bind(this);
        this.editRooms=this.editRooms.bind(this);
        this.deleteRooms=this.deleteRooms.bind(this);
        this.reserveRooms=this.reserveRooms.bind(this);
    }
    componentDidMount(){
        RoomServices.getRooms().then((res)=>{
            this.setState({rooms:res.data});
        }
        );
    }
    deleteRooms(id){
        RoomServices.deleteRoomById(id).then(res=>{
            this.setState({rooms:this.state.rooms.filter(rooms=>rooms.id!==id)});
        });

    }
    editRooms(id){
        this.props.history.push(`SearchRooms/updateRooms/${id}`);
    }
   addRoom()
   {
       this.props.history.push("SearchRooms/addRooms");
   }
   reserveRooms()
   {
    this.setState({count : this.state.count-1});
    this.props.history.push("SearchRooms/addReservation");
   }
 
    render(){
        return(
    <div className="container">
    <h2 className="text-center">Rooms</h2>
    {/* <button className="btn btn-primary" onClick={this.addRoom}>Add Room</button>  */}
    
    <div className="row">
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                <th>Code</th>
                <th>Name</th>
                
                <th>Actions</th>
                </tr>
                
            </thead>
            <tbody>
            {
                    this.state.rooms.map(
                        rooms=>
                        <tr key={rooms.id}>
                            <td>{rooms.code}</td>
                            <td>{rooms.name}</td>
                            <td>
                            <button onClick={()=>this.editRooms(rooms.id)} className="btn btn-info">Update</button>
                            <button style={{marginLeft:"10px"}} onClick={()=>this.reserveRooms()} className="btn btn-info">Reserve</button>
                            <button style={{marginLeft:"10px"}} onClick={()=>this.deleteRooms(rooms.id)} className="btn btn-danger">Delete</button>
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
export default GetRooms;
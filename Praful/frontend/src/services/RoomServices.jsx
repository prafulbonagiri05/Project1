import axios from 'axios';


const ROOMS_API="http://localhost:8086/SearchRooms";

class RoomServices{
    getRooms(){
        return axios.get(ROOMS_API);
    }
    addRooms(addrooms)
    {
        return axios.post(ROOMS_API,addrooms);
    }
    getRoomById(roomId)
    {
        return axios.get(ROOMS_API+"/"+roomId);
    }
    updateRooms(rooms,roomId){
        return axios.put(ROOMS_API+"/"+roomId,rooms);
    }
    deleteRoomById(roomId)
    {
        return axios.delete(ROOMS_API+"/"+roomId);
    }
}

export default new RoomServices();



import axios from 'axios';

const GUEST_API="http://localhost:8091/allGuest";

class GuestService{
    getGuests()
    {
        return axios.get(GUEST_API);
    }
    addGuests(guests)
    {
        return axios.post(GUEST_API,guests);
    }
    getGuestById(guestId)
    {
        return axios.get(GUEST_API+"/"+guestId);
    }
    updateGuests(guests,guestId){
        return axios.put(GUEST_API+"/"+guestId,guests);
    }
    deleteRoomById(guestId)
    {
        return axios.delete(GUEST_API+"/"+guestId);
    }

}
export default new GuestService();
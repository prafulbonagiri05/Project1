package Rooms;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class RoomController {

    @Autowired
    RoomService roomService;

    @RequestMapping("/SearchRooms")
    public List<RoomDetails> returnAll()
    {
        return roomService.returnAll();
    }
    @RequestMapping("/SearchRooms/{id}")
    public Optional<RoomDetails> getGuest(@PathVariable Long id)
    {
        return roomService.getRoom(id);
    }
    @RequestMapping(method= RequestMethod.POST,value="/SearchRooms")
    public void addGuest(@RequestBody RoomDetails Guest)
    {
        roomService.addRoom(Guest);
    }
    @RequestMapping(method=RequestMethod.DELETE,value="/SearchRooms/{id}")
    public void deleteGuest(@PathVariable Long id)
    {
        roomService.deleteRoom(id);
    }
    @RequestMapping(method=RequestMethod.PUT,value="/SearchRooms/{id}")
    public void updateGuest(@RequestBody RoomDetails Guest,@PathVariable Long id)
    {
        roomService.updateRoom(id, Guest);
    }
}
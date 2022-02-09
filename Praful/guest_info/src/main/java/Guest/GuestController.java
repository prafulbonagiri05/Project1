package Guest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class GuestController {
	@Autowired 
	GuestServices guestservices;
	 @RequestMapping("/allGuest")
	    public List<GuestDetails> returnAll()
	    {
	        return guestservices.returnAll();
	    }
	    @RequestMapping("/allGuest/{id}")
	    public Optional<GuestDetails> getGuest(@PathVariable Long id)
	    {
	        return guestservices.getGuest(id);
	    }
	    @RequestMapping(method= RequestMethod.POST,value="/allGuest")
	    public void addGuest(@RequestBody GuestDetails Guest)
	    {
	    	guestservices.addGuest(Guest);
	    }
	    @RequestMapping(method=RequestMethod.DELETE,value="/allGuest/{id}")
	    public void deleteGuest(@PathVariable Long id)
	    {
	    	guestservices.deleteGuest(id);
	    }
	    @RequestMapping(method=RequestMethod.PUT,value="/allGuest/{id}")
	    public void updateGuest(@RequestBody GuestDetails Guest,@PathVariable Long id)
	    {
	    	guestservices.updateGuest(id, Guest);
	    }

	

}

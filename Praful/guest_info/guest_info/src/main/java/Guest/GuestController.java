package Guest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;






@RestController
public class GuestController {
	@Autowired 
	GuestServices guestservices;
	 @RequestMapping("/all")
	    public List<GuestDetails> returnAll()
	    {
	        return guestservices.returnAll();
	    }
	    @RequestMapping("/all/{id}")
	    public Optional<GuestDetails> getGuest(@PathVariable Long id)
	    {
	        return guestservices.getGuest(id);
	    }
	    @RequestMapping(method= RequestMethod.POST,value="/all")
	    public void addGuest(@RequestBody GuestDetails Guest)
	    {
	    	guestservices.addGuest(Guest);
	    }
	    @RequestMapping(method=RequestMethod.DELETE,value="/all/{id}")
	    public void deleteGuest(@PathVariable Long id)
	    {
	    	guestservices.deleteGuest(id);
	    }
	    @RequestMapping(method=RequestMethod.PUT,value="/all/{id}")
	    public void updateGuest(@RequestBody GuestDetails Guest,@PathVariable Long id)
	    {
	    	guestservices.updateGuest(id, Guest);
	    }

	

}

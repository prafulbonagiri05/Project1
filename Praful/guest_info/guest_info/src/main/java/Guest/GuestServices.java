package Guest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;





@Service
public class GuestServices {

	
	
	
	@Autowired
	GuestRepository guestrepo;
	
	 public List<GuestDetails> returnAll()
	    {
	        List<GuestDetails> guest = new ArrayList<>();
	        guestrepo.findAll()
	                .forEach(guest::add);
	        return guest;
	    }

	 public Optional<GuestDetails> getGuest(Long id)
	    {
	        return guestrepo.findById(id);
	    }
	 public void addGuest(GuestDetails Guest)
	    {
		 
		 guestrepo.save(Guest);
	    }
	    public void deleteGuest(Long id)
	    {
	    	guestrepo.deleteById(id);
	    }
	    public void updateGuest(Long id,GuestDetails guest)
	    {
	        guestrepo.save(guest);
	    }
}

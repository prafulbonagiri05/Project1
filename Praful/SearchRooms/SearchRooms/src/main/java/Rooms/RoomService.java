package Rooms;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;



import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Component
@Service
public class RoomService {

	
	@Autowired
    SequenceGeneratorService sequenceGeneratorService;

    @Autowired
    private RoomRepository roomRepository;

    public List<RoomDetails> returnAll()
    {
        List<RoomDetails> Rooms = new ArrayList<>();
        roomRepository.findAll()
                .forEach(Rooms::add);
        return Rooms;
    }

    public Optional<RoomDetails> getRoom(Long id)
    {
        return roomRepository.findById(id);
    }
    public void addRoom(RoomDetails Guest)
    {
    	Guest.setId(sequenceGeneratorService.generateSequence(RoomDetails.SEQUENCE_NAME));
        roomRepository.save(Guest);
    }
    public void deleteRoom(Long id)
    {
        roomRepository.deleteById(id);
    }
    public void updateRoom(Long id,RoomDetails Room)
    {
        roomRepository.save(Room);
    }



}
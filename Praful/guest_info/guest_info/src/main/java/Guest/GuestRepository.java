package Guest;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;


@Repository
@Component
public interface GuestRepository extends MongoRepository<GuestDetails,Long> {
}

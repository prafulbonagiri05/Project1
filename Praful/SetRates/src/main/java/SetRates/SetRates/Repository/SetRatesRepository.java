package SetRates.SetRates.Repository;

import SetRates.SetRates.Model.RatesDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;


@Component
@Repository
public interface SetRatesRepository extends MongoRepository<RatesDetails, Long> {
}

package SetRates.SetRates.Services;

import SetRates.SetRates.Model.RatesDetails;
import SetRates.SetRates.Repository.SetRatesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SetRatesService {

    @Autowired
    private SetRatesRepository setRatesRepository;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;


    public List<RatesDetails> returnAll() {
        List<RatesDetails> Rates = new ArrayList<>();
        setRatesRepository.findAll()
                .forEach(Rates::add);
        return Rates;
    }

    public Optional<RatesDetails> getRates(Long id) {
        return  setRatesRepository.findById(id);
    }

    public RatesDetails addRates(RatesDetails Rates){
        Rates.setRateid(sequenceGeneratorService.generateSequence(RatesDetails.SEQUENCE_NAME));
        return setRatesRepository.save(Rates);
    }

    public void deleteRates(Long id){
        setRatesRepository.deleteById(id);
    }
    public void updateRate(Integer id , RatesDetails Rates){
        setRatesRepository.save(Rates);
    }




}

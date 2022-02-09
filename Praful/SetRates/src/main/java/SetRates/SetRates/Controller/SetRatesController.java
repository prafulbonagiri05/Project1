package SetRates.SetRates.Controller;


import SetRates.SetRates.Model.RatesDetails;
import SetRates.SetRates.Services.SetRatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class SetRatesController {


    @Autowired
    SetRatesService setRatesService;


    @RequestMapping("/SetRates")
    public List<RatesDetails> returnAll() {
        return setRatesService.returnAll();
    }

    @RequestMapping("/SetRates/{id}")
    public Optional<RatesDetails> getRates(@PathVariable Long id) {
        return setRatesService.getRates(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/SetRates")
    public void addRates(@RequestBody RatesDetails Rates) {
        setRatesService.addRates(Rates);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/SetRates/{id}")
    public void deleteRates(@PathVariable Long id) {
        setRatesService.deleteRates(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/SetRates/{id}")
    public void updateRates(@RequestBody RatesDetails Rates, @PathVariable Integer id) {
        setRatesService.updateRate(id , Rates);
    }
}

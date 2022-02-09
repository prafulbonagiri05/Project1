package com.IssueBill.IssueBill.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.IssueBill.IssueBill.Repository.IssueBillRepository;
import com.IssueBill.IssueBill.Vo.RatesDetails;
import com.IssueBill.IssueBill.Vo.ResponceTemplateVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.IssueBill.IssueBill.Model.IssueBillDetails;
import org.springframework.web.client.RestTemplate;


@Service
public class IssueBillService {
    @Autowired
    private IssueBillRepository issueBillRepository;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;


    public List<IssueBillDetails> returnAll() {
        List<IssueBillDetails> Reservations = new ArrayList<>();
        issueBillRepository.findAll()
                .forEach(Reservations::add);
        return Reservations;
    }

//
//    public Optional<IssueBillDetails> getIssueBill(Integer id) {
//        return issueBillRepository.findById(id);
//    }

    public void addIssueBill(IssueBillDetails Bills) {
        Bills.setId(sequenceGeneratorService.generateSequence(IssueBillDetails.SEQUENCE_NAME));
        issueBillRepository.save(Bills);
    }

    public void deleteIssueBill(Long id) {
        issueBillRepository.deleteById(id);
    }

    public void updateIssueBill(Long id, IssueBillDetails reservation) {
        issueBillRepository.save(reservation);
    }


    public ResponceTemplateVo getBillsWithPayment(Long id) {
        ResponceTemplateVo vo = new ResponceTemplateVo();
      Optional<IssueBillDetails> issueBillDetails = issueBillRepository.findById(id);

        RatesDetails ratesDetails =
                restTemplate.getForObject("http://SETRATES/allSetRates/" + id , RatesDetails.class);
        vo.setIssueBillDetails(issueBillDetails);
        vo.setRatesDetails(ratesDetails);
        return vo;
    }
}

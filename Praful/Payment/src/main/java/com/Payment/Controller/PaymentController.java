package com.Payment.Controller;

import java.util.List;
import java.util.Optional;

import com.Payment.Model.PaymentDetails;
import com.Payment.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class PaymentController {

    @Autowired
    PaymentService paymentservice;

    @RequestMapping("/all")
    public List<PaymentDetails> returnAll()
    {
        return paymentservice.returnAll();
    }

    @RequestMapping("/all/{id}")
    public Optional<PaymentDetails> getPayment(@PathVariable Long id)
    {
        return paymentservice.getPayment(id);
    }
    @RequestMapping(method=RequestMethod.POST,value="/all")
    public void addPayment(@RequestBody PaymentDetails Payment)
    {
        paymentservice.addPayment(Payment);
    }
    @RequestMapping(method=RequestMethod.DELETE,value="/all/{id}")
    public void deletePayment(@PathVariable Long id)
    {
        paymentservice.deletePayment(id);
    }
    @RequestMapping(method=RequestMethod.PUT,value="/all/{id}")
    public void updatePayment(@RequestBody PaymentDetails Payment, @PathVariable Long id)
    {
        paymentservice.updatePayment(id, Payment);
    }


}

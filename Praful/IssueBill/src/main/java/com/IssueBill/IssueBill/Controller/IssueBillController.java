package com.IssueBill.IssueBill.Controller;

import java.util.List;
import java.util.Optional;

import com.IssueBill.IssueBill.Vo.ResponceTemplateVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.IssueBill.IssueBill.Model.IssueBillDetails;
import com.IssueBill.IssueBill.Service.IssueBillService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class IssueBillController {
    @Autowired
    IssueBillService issueBillService;


    @RequestMapping("/IssueBills")
    public List<IssueBillDetails> returnAll() {
        return issueBillService.returnAll();
    }

    @RequestMapping("/IssueBills/{id}")
    public ResponceTemplateVo getBillsWithPayment(@PathVariable("id")  Long id) {
        return issueBillService.getBillsWithPayment(id);
    }

    @RequestMapping(method= RequestMethod.POST,value="/IssueBills")
    public void addGuest(@RequestBody IssueBillDetails Guest)
    {
    	issueBillService.addIssueBill(Guest);
    }

//    public Optional<IssueBillDetails> getGuest(@PathVariable Integer id) {
//        return issueBillService.getIssueBill(id);
//    }


    @RequestMapping(method = RequestMethod.DELETE, value = "/IssueBills/{id}")
    public void deleteGuest(@PathVariable Long id) {
        issueBillService.deleteIssueBill(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/IssueBills/{id}")
    public void updateGuest(@RequestBody IssueBillDetails issueBills, @PathVariable Long id) {
        issueBillService.updateIssueBill(id, issueBills);
    }


}



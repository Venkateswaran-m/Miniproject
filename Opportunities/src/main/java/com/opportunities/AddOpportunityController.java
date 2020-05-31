package com.opportunities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddOpportunityController {
	@Autowired
	OpportunityService opportunityService;
	
	@RequestMapping(value="/addOpportunity", method=RequestMethod.POST)
	public String addOpportunity(Opportunity opportunity) {
		
		opportunityService.addOpportunity(opportunity);
		return "Added";

	}
	
	 @GetMapping(path="/all")
	  public @ResponseBody Iterable<Opportunity> getAllOpportunities() {
	    
	    return opportunityService.getAllOpportunities();
	  }
	}



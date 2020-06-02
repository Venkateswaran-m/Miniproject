package com.opportunities;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AddOpportunityController {
	@Autowired
	OpportunityService opportunityService;

	@RequestMapping(value="/addopportunity", method=RequestMethod.POST)
	public String addCandidate( Opportunity opportunity)
	{
		System.out.println(opportunity.toString());
		opportunityService.addOpportunity(opportunity);
		return "completed";
	}
	@GetMapping(path = "/all")
	public @ResponseBody List<Opportunity> getAlOpportunities() {
			System.out.println("test");
		return opportunityService.getOpportunities();
	}
	@DeleteMapping("/deletecandidate/{Id}")
	public List<Opportunity> deleteCandidate(@PathVariable Integer Id)
	{
		opportunityService.deleteCandidate(Id);
		return opportunityService.getOpportunities();
	}
}

package com.opportunities.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.opportunities.model.LocationCount;
import com.opportunities.model.Opportunity;
import com.opportunities.service.OpportunityService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OpportunityController {
	@Autowired
	OpportunityService opportunityService;

//	@RequestMapping(value="/addopportunity", method=RequestMethod.POST)
//	public String addCandidate( Opportunity opportunity)
//	{
//		System.out.println(opportunity.toString());
//		opportunityService.addOpportunity(opportunity);
//		return "completed";
//	}
	
//	@PostMapping("/addopportunity")
//	public String addopportunity(@RequestBody Opportunity o)
//	{
//		System.out.println("Adding Opportunity");
//		return opportunityService.addOpportunity(o);
//	}

	@RequestMapping(value="/addopportunity", method=RequestMethod.POST)

	public String addOpportunity(@RequestBody Opportunity opportunity)
	{
		
		opportunityService.addOpportunity(opportunity);
		return "completed";
	}
	@GetMapping(path = "/all")
	public @ResponseBody List<Opportunity> getAlOpportunities() {
			System.out.println("Fetching Data");
		return opportunityService.getOpportunities();
	}
	@DeleteMapping("/deleteopportunity/{Id}")
	public List<Opportunity> deleteOpportunity(@PathVariable Integer Id)
	{
		opportunityService.deleteOpportunity(Id);
		System.out.println("Deleting");
		return opportunityService.getOpportunities();
	}
	
	@PutMapping("/updateopportunity")
	public String updateOpportunity(@RequestBody Opportunity o)
	{
		System.out.println("Updating");
		return opportunityService.updateOpportunity(o);
	}
	@GetMapping("/getlocationcount")
	public List<LocationCount> getLocationCount()
	{
		return opportunityService.getLocation();
	}
}

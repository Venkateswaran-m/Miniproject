package com.opportunities.controller;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
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

	private final static Logger LOGGER =  
            Logger.getLogger(Logger.GLOBAL_LOGGER_NAME); 

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
		 LOGGER.log(Level.INFO, "Opportunity Added	"); 
		 System.out.println(opportunity);
		opportunityService.addOpportunity(opportunity);
		return "completed";
	}
	 @GetMapping("/users")
		String checkUser(@RequestHeader("Authorization") String token)
		{
				return opportunityService.checkUser(token);
		}
	
	
	@GetMapping(path = "/all")
	public @ResponseBody List<Opportunity> getAlOpportunities(@RequestHeader("Authorization") String token) {
		
		if(opportunityService.checkUser(token)=="Login sucessfull and User is Authenticated") {
		 LOGGER.log(Level.INFO, "Retrieved opportunities"); 
		return opportunityService.getOpportunities();
		}
		return null;
	}
	@DeleteMapping("/deleteopportunity/{Id}")
	public List<Opportunity> deleteOpportunity(@PathVariable Integer Id,@RequestHeader("Authorization") String token)
	{
		if(opportunityService.checkUser(token)=="Login sucessfull and User is Authenticated") {
		opportunityService.deleteOpportunity(Id);
		 LOGGER.log(Level.INFO, "Opportunity Deleted"); 
		return opportunityService.getOpportunities();
		}
		return null;
	}
	
	@PutMapping("/updateopportunity")
	public String updateOpportunity(@RequestBody Opportunity o,@RequestHeader("Authorization") String token)
	{
		if(opportunityService.checkUser(token)=="Login sucessfull and User is Authenticated") {
		 LOGGER.log(Level.INFO, "Opportunity Updated"); 
		System.out.println("Updating : "+ o);
		return opportunityService.updateOpportunity(o);
		}
		return null;
	}
	@GetMapping("/getlocationcount")
	public List<LocationCount> getLocationCount(@RequestHeader("Authorization") String token)
	{
		if(opportunityService.checkUser(token)=="Login sucessfull and User is Authenticated") {
		 LOGGER.log(Level.INFO, "Location count obtained"); 
		return opportunityService.getLocation();
		}
		return null;
	}
}

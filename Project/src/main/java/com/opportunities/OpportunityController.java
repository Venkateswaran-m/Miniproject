package com.opportunities;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/opportunity")
public class OpportunityController {

	
	@Autowired
	OpportunityService opportunityService;
	
	
	@GetMapping("/")
	public List<Opportunity> getAll()
	{
		return opportunityService.getAll();
	}
	
	@PostMapping("/")
	public String addEmployee(@RequestBody Opportunity o)
	{
		return opportunityService.addOpportunity(o);
	}

	@PutMapping("/")
	public String updateEmployee(@RequestBody Opportunity o)
	{
		return opportunityService.upadateOpportunity(o);
	}

	@DeleteMapping("/{id}")
	public String deleteEmployee(@PathVariable("id") int id)
	{
		return opportunityService.deleteOpportunity(id);
	}

	
}
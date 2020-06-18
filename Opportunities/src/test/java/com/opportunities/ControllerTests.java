package com.opportunities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.databind.ObjectMapper;


import com.opportunities.controller.OpportunityController;
import com.opportunities.model.LocationCount;
import com.opportunities.model.Opportunity;
import com.opportunities.service.OpportunityService;


@SpringBootTest
public class ControllerTests {
	
	private static MockMvc mockMvc;

	@Autowired
	private WebApplicationContext webApplicationContext;

	ObjectMapper objectMapper = new ObjectMapper();

	@Autowired
	private OpportunityController controller;
	@MockBean
	private OpportunityService service;

	public static Opportunity createOpportunityForTest() {
		Opportunity o = new Opportunity();
		o.setContactNumber("9842422597");
		o.setExpectedDuration("12");
		o.setHiringManager("venkat");
		o.setLocation("chennai");
		o.setManagerEmail("venkat@gmail.com");
		o.setOpportunityName("developer");
		o.setSkills("Java");
		return o;
	}
	
	@Test
	public void getOpportunitiesTest() {
		when(service.getOpportunities()).thenReturn(Stream.of(
				new Opportunity(1, "Developer", "Venkat", "managerEmail", "contactNumber", "location", "skills", "32"),
				new Opportunity(2, "opportunityName", "hiringManager", "managerEmail", "contactNumber", "location",
						"skills", "expectedDuration"))
				.collect(Collectors.toList()));
		assertEquals(2, controller.getAlOpportunities().size());
	}
	@Test
	public void addOpportunityTest() {
		Opportunity o =  createOpportunityForTest();
		when(service.addOpportunity(o)).thenReturn("success");
		assertEquals("completed", controller.addOpportunity(o));
	}
	
	@Test
	public void updateOpportunityTest() {
		Opportunity o =  createOpportunityForTest();
		when(service.updateOpportunity(o)).thenReturn("Inserted Successfully");
		assertEquals("Inserted Successfully", controller.updateOpportunity(o));
	}
	
	@Test
	public void getLocationCountTest() {

		when(service.getLocation())
				.thenReturn(Stream.of(new LocationCount("chennai", 5)).collect(Collectors.toList()));
		assertEquals(1, controller.getLocationCount().size());
	}
		
	

	

}

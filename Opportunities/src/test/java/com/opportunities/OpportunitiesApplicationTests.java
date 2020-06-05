package com.opportunities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.opportunities.dao.OpportunityDao;
import com.opportunities.model.Opportunity;
import com.opportunities.service.OpportunityService;

@SpringBootTest
class OpportunitiesApplicationTests {

	@Autowired
	private OpportunityService service;
	@MockBean
	private OpportunityDao repository;
//
//	@Test
//	void contextLoads() {
//	}
//	@Test
//	public void getOpportunitiesTest() {
//		when(repository.getAllOpportunities()).thenReturn(Stream.of(
//				new Opportunity(1, "Developer", "Venkat", "managerEmail", "contactNumber", "location", "skills", "32"),
//				new Opportunity(2, "opportunityName", "hiringManager", "managerEmail", "contactNumber", "location",
//						"skills", "expectedDuration"))
//				.collect(Collectors.toList()));
//		assertEquals(2, service.getOpportunities().size());
//	}
//
//	@Test
//	public void deleteOpportunityTest() {
//		Opportunity o = new Opportunity(1, "Developer", "Venkat", "managerEmail", "contactNumber", "location", "skills", "32");
//		service.deleteOpportunity(1);
//		verify(repository,times(1)).deleteById(1);
//		//when(service.deleteOpportunity(1)).thenReturn(1);
//		
//	}
//	
//	@Test
//	public void addOpportunityTest() {
//		Opportunity o = new Opportunity(1, "Developer", "Venkat", "managerEmail", "contactNumber", "location", "skills", "32");
//		when(repository.addOpportunity(o)).thenReturn(true);
//		assertEquals("Success",service.addOpportunity(o));
//	}
//	
//	@Test
//	public void updateOpportunityTest() {
//		Opportunity o = new Opportunity(1, "Developer", "Venkat", "managerEmail", "contactNumber", "location", "skills", "32");
//		when(repository.updateOpportunity(o)).thenReturn(true);
//		assertEquals("Inserted SucessFully",service.updateOpportunity(o));
//}
//	public void locationCountTest() {
//		when()
//	}
//	
}
